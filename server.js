require('dotenv').config();

const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;
const RESULTS_DIR = path.join(__dirname, 'data', 'results');

const { MongoClient } = require('mongodb');

let participantsCollection = null;

async function initDatabase() {
    if (!process.env.MONGODB_URI) {
        console.log("No MONGODB_URI found — using local disk storage only.");
        return;
    }
    try {
        const client = new MongoClient(process.env.MONGODB_URI);
        await client.connect();
        const db = client.db('ethical_run_db');
        participantsCollection = db.collection('participants');
        console.log("Connected to MongoDB Atlas!");

        // Only download logs that don't exist locally OR were updated more recently in MongoDB
        const allDocs = await participantsCollection.find({}).toArray();
        let newOrUpdatedCount = 0;

        allDocs.forEach(doc => {
            const { _id, ...cleanData } = doc;
            if (!cleanData.userId) return;

            const filePath = path.join(RESULTS_DIR, `${cleanData.userId}.json`);
            let shouldWrite = false;

            if (!fs.existsSync(filePath)) {
                shouldWrite = true; // File doesn't exist locally yet
            } else if (cleanData.updatedAt) {
                try {
                    const localData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
                    if (!localData.updatedAt || cleanData.updatedAt > localData.updatedAt) {
                        shouldWrite = true; // Cloud version is newer than local version
                    }
                } catch (e) {
                    shouldWrite = true; // Local file was corrupted, restore from cloud
                }
            }

            if (shouldWrite) {
                fs.writeFileSync(filePath, JSON.stringify(cleanData, null, 2));
                newOrUpdatedCount++;
            }
        });

        console.log(`Synced ${newOrUpdatedCount} new/updated participant logs from MongoDB (Total in DB: ${allDocs.length}).`);
    } catch (err) {
        console.error("MongoDB connection error:", err.message);
    }
}
initDatabase();

// Helper function to save to both local disk AND MongoDB Atlas
async function saveParticipantData(userId, userData) {
    userData.updatedAt = Date.now(); // Stamp exact time of latest change

    const filePath = path.join(RESULTS_DIR, `${userId}.json`);
    fs.writeFileSync(filePath, JSON.stringify(userData, null, 2));

    if (participantsCollection) {
        try {
            await participantsCollection.updateOne(
                { userId: userId },
                { $set: userData },
                { upsert: true }
            );
        } catch (err) {
            console.error(`Failed to sync ${userId} to MongoDB:`, err.message);
        }
    }
}

// Helper function to calculate official CUQ Score (0-100 scale)
function calculateCUQScore(cuqAnswers) {
    let rawSum = 0;
    for (let i = 1; i <= 16; i++) {
        const val = parseInt(cuqAnswers[`cuq_${i}`], 10);
        if (isNaN(val)) return "";
        if (i % 2 === 1) {
            rawSum += (val - 1); // Odd items: positive
        } else {
            rawSum += (5 - val); // Even items: negative (reverse-scored)
        }
    }
    return ((rawSum / 64) * 100).toFixed(2);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

if (!fs.existsSync(RESULTS_DIR)) {
    fs.mkdirSync(RESULTS_DIR, { recursive: true });
}

// 1. Landing Page: Generate ID and start loop
app.get('/', async (req, res) => {
    res.redirect(`/pre_questionnaire.html?userId=${uuidv4()}`);
});

// 2. Status Check: Returns demographics status, completed frameworks, and active framework
app.get('/api/status/:userId', (req, res) => {
    const userFile = path.join(RESULTS_DIR, `${req.params.userId}.json`);
    if (fs.existsSync(userFile)) {
        const data = JSON.parse(fs.readFileSync(userFile));
        const completed = [];
        if (data.runs) {
            for (const fw of ['utilitarianism', 'deontological', 'virtue']) {
                if (data.runs[fw] && data.runs[fw].post) {
                    completed.push(fw);
                }
            }
        }
        res.json({
            hasDemographics: !!data.demographics,
            completedFrameworks: completed,
            currentFramework: data.currentFramework || null
        });
    } else {
        res.json({ hasDemographics: false, completedFrameworks: [], currentFramework: null });
    }
});

// 3. Submit Pre-Questionnaire
app.post('/api/pre_submit', async (req, res) => {
    const { 
        userId, 
        framework, 
        age, 
        major, 
        philosophyKnowledge, 
        aiFrequency, 
        time_consent, 
        time_framework_select,
        time_demographics, 
        ...scenarios 
    } = req.body;
    
    const userFile = path.join(RESULTS_DIR, `${userId}.json`);
    
    let userData = { userId, createdAt: new Date().toISOString(), runs: {} };
    if (fs.existsSync(userFile)) userData = JSON.parse(fs.readFileSync(userFile));
    userData.userId = userId;

    // Save demographics (and their timers) once on the first run
    if (age && major) {
        userData.demographics = { 
            age, 
            major, 
            philosophyKnowledge, 
            aiFrequency,
            time_consent,
            time_demographics
        };
    }

    // Track which framework the user is currently playing
    userData.currentFramework = framework;

    if (!userData.runs) userData.runs = {};
    if (!userData.runs[framework]) {
        userData.runs[framework] = {
            // Records whether this was their 1st, 2nd, or 3rd framework played
            runOrder: Object.keys(userData.runs).length + 1
        };
    }
    
    // Record the exact timestamp, framework-specific experience, and pre-scenarios
    userData.runs[framework].gameStartTimestamp = Date.now();
    userData.runs[framework].philosophyKnowledge = philosophyKnowledge;
    userData.runs[framework].time_framework_select = time_framework_select;
    userData.runs[framework].pre = scenarios;

    await saveParticipantData(userId, userData);
    
    res.redirect(`/game/index.html?userId=${userId}&framework=${framework}`);
});

// 4. Game Logs Hook
app.post('/api/gamelogs', async (req, res) => {
    const { userId, logs } = req.body;
    const userFile = path.join(RESULTS_DIR, `${userId}.json`);
    
    let userData = { runs: {} };
    if (fs.existsSync(userFile)) userData = JSON.parse(fs.readFileSync(userFile));
    
    // Use the framework reported by Kaplay logs, or fall back to the pre-questionnaire choice
    const framework = (logs && logs.framework) ? logs.framework : (userData.currentFramework || 'unknown');
    userData.currentFramework = framework;

    if (!userData.runs) userData.runs = {};
    if (!userData.runs[framework]) userData.runs[framework] = {};
    
    userData.runs[framework].gameLogs = logs;
    await saveParticipantData(userId, userData);
    res.json({ success: true });
});

// 5. Submit Post-Questionnaire & Loop Logic
app.post('/api/post_submit', async (req, res) => {
    const {
        userId,
        framework: bodyFw,
        samValence,
        samArousal,
        time_sam_feedback,
        time_cuq_feedback,
        ...restBody
    } = req.body;

    if (!userId || userId === 'undefined') {
        return res.redirect('/');
    }

    // Separate post_scenario_* answers from cuq_* answers
    const scenarioAnswers = {};
    const cuqAnswers = {};
    Object.keys(restBody).forEach(key => {
        if (key.startsWith('cuq_')) {
            cuqAnswers[key] = restBody[key];
        } else {
            scenarioAnswers[key] = restBody[key];
        }
    });

    const cuqScore = calculateCUQScore(cuqAnswers);

    const userFile = path.join(RESULTS_DIR, `${userId}.json`);
    let userData = { runs: {} };
    if (fs.existsSync(userFile)) userData = JSON.parse(fs.readFileSync(userFile));

    const framework = bodyFw || userData.currentFramework;

    if (!userData.runs) userData.runs = {};
    if (framework) {
        if (!userData.runs[framework]) userData.runs[framework] = {};
        userData.runs[framework].post = scenarioAnswers;
    }

    const feedbackData = {
        samValence: samValence ? Number(samValence) : null,
        samArousal: samArousal ? Number(samArousal) : null,
        cuqScore: cuqScore !== "" ? Number(cuqScore) : null,
        cuqResponses: cuqAnswers,
        time_sam_feedback,
        time_cuq_feedback
    };

    userData.finalFeedback = feedbackData;
    if (framework && userData.runs[framework]) {
        userData.runs[framework].feedback = feedbackData;
    }

    await saveParticipantData(userId, userData);

    // Check how many of the 3 valid frameworks have a completed post-questionnaire
    const completed = ['utilitarianism', 'deontological', 'virtue'].filter(
        fw => userData.runs[fw] && userData.runs[fw].post
    );
    
    let exploreButton = '';
    if (completed.length < 3) {
        exploreButton = `
            <a href="/pre_questionnaire.html?userId=${userId}" style="text-decoration: none;">
                <button type="button" class="btn-start" style="max-width: 550px; margin: 0 auto 20px auto; font-size: 16px; line-height: 1.8;">
                    EXPLORE A DIFFERENT ETHICAL PATH
                </button>
            </a>
        `;
    }

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>The Ethical Run - Complete</title>
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Silkscreen:wght@400;700&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <div class="form-group" style="text-align: center; margin-top: 100px;">
                <h1 class="title-finish" style="margin-bottom: 30px;">EXPERIMENT CONCLUDED</h1>
                <p style="color: #dddddd; margin-bottom: 40px;">
                    Simulation and feedback successfully recorded.<br><br>
                    Thank you for your vital contribution to this research.
                </p>
                ${exploreButton}
                <a href="/" style="text-decoration: none;">
                    <button type="button" class="btn-nav" style="max-width: 550px; margin: 0 auto; font-size: 16px; line-height: 1.8;">
                        INITIALIZE NEW PARTICIPANT
                    </button>
                </a>
            </div>
        </body>
        </html>
    `);
});

// 6. Secure AI Proxy Route (Hides GROQ_API_KEY from the browser)
app.post('/api/chat', async (req, res) => {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: { message: "Server missing GROQ_API_KEY environment variable." } });
    }

    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey.trim()}`,
                "Content-Type": "application/json",
                "User-Agent": "TheEthicalRun-ThesisServer/1.0"
            },
            body: JSON.stringify(req.body),
        });

        const data = await response.json();
        res.status(response.status).json(data);
    } catch (err) {
        res.status(500).json({ error: { message: err.message || "Failed to contact AI server." } });
    }
});

// 7. Admin Route to Download All Participant JSON Logs
app.get('/api/admin/export', (req, res) => {
    const adminPassword = process.env.ADMIN_KEY || "thesis2026";
    if (req.query.key !== adminPassword) {
        return res.status(403).send("Unauthorized: Invalid Admin Key");
    }

    if (!fs.existsSync(RESULTS_DIR)) {
        return res.json([]);
    }

    const files = fs.readdirSync(RESULTS_DIR).filter(file => file.endsWith('.json'));
    const allData = files.map(file => {
        const filePath = path.join(RESULTS_DIR, file);
        try {
            return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        } catch (e) {
            return { file, error: "Corrupted JSON" };
        }
    });

    res.setHeader('Content-Disposition', 'attachment; filename="all_participants_data.json"');
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(allData, null, 2));
});

// 8. Admin Route to Export Flattened CSV for Thesis Statistical Analysis (Excel / SPSS / Python)
app.get('/api/admin/export-csv', (req, res) => {
    const adminPassword = process.env.ADMIN_KEY || "thesis2026";
    if (req.query.key !== adminPassword) {
        return res.status(403).send("Unauthorized: Invalid Admin Key");
    }

    if (!fs.existsSync(RESULTS_DIR)) {
        return res.status(200).send("No data yet.");
    }

    // Correct answer values per framework in your questionnaire bank
    const targetValue = {
        utilitarianism: "utilitarianism",
        deontological: "deontology",
        virtue: "virtue"
    };

    const headers = [
        "userId", "timestamp", "framework",
        "age", "major", "aiFrequency", "frameworkExperience",
        "pre_s1", "pre_s2", "pre_s3", "pre_s4", "pre_score_total",
        "post_s1", "post_s2", "post_s3", "post_s4", "post_score_total",
        "learning_gain",
        "game_completed", "game_duration_sec", "batteries_collected", "answer_score", "hints_used", "chat_turns",
        "samValence", "samArousal", "cuqScore",
        "cuq_1", "cuq_2", "cuq_3", "cuq_4", "cuq_5", "cuq_6", "cuq_7", "cuq_8",
        "cuq_9", "cuq_10", "cuq_11", "cuq_12", "cuq_13", "cuq_14", "cuq_15", "cuq_16",
        "time_consent", "time_framework_select", "time_demographics",
        "time_pre_s1", "time_pre_s2", "time_pre_s3", "time_pre_s4", "time_pre_total",
        "time_post_s1", "time_post_s2", "time_post_s3", "time_post_s4", "time_post_total",
        "time_sam_feedback", "time_cuq_feedback"
    ];

    const rows = [headers.join(",")];
    const files = fs.readdirSync(RESULTS_DIR).filter(f => f.endsWith('.json'));

    files.forEach(file => {
        try {
            const u = JSON.parse(fs.readFileSync(path.join(RESULTS_DIR, file), 'utf-8'));
            const demo = u.demographics || {};
            const runs = u.runs || {};

            Object.keys(runs).forEach(fw => {
                const r = runs[fw];
                const pre = r.pre || {};
                const post = r.post || {};
                const game = r.gameLogs || {};
                const fb = r.feedback || u.finalFeedback || {};
                const expected = targetValue[fw];

                // Calculate Pre & Post accuracy scores (out of 4)
                const preAns = [
                    pre.pre_scenario_1 || pre.scenario_1,
                    pre.pre_scenario_2 || pre.scenario_2,
                    pre.pre_scenario_3 || pre.scenario_3,
                    pre.pre_scenario_4 || pre.scenario_4
                ];
                const postAns = [
                    post.post_scenario_1 || post.scenario_1,
                    post.post_scenario_2 || post.scenario_2,
                    post.post_scenario_3 || post.scenario_3,
                    post.post_scenario_4 || post.scenario_4
                ];

                const preScore = preAns.filter(a => a === expected).length;
                const postScore = postAns.filter(a => a === expected).length;
                const learningGain = (r.pre && r.post) ? (postScore - preScore) : "";

                const preTimeTotal = [
                    pre.time_pre_scenario_1, pre.time_pre_scenario_2,
                    pre.time_pre_scenario_3, pre.time_pre_scenario_4
                ].reduce((acc, v) => acc + (parseFloat(v) || 0), 0).toFixed(2);

                const postTimeTotal = [
                    post.time_post_scenario_1, post.time_post_scenario_2,
                    post.time_post_scenario_3, post.time_post_scenario_4
                ].reduce((acc, v) => acc + (parseFloat(v) || 0), 0).toFixed(2);

                const row = [
                    u.userId || file.replace('.json', ''),
                    u.createdAt || "",
                    fw,
                    demo.age || "",
                    demo.major || "",
                    demo.aiFrequency || "",
                    r.philosophyKnowledge || demo.philosophyKnowledge || "",
                    pre.pre_scenario_1 || pre.scenario_1 || "",
                    pre.pre_scenario_2 || pre.scenario_2 || "",
                    pre.pre_scenario_3 || pre.scenario_3 || "",
                    pre.pre_scenario_4 || pre.scenario_4 || "",
                    r.pre ? preScore : "",
                    post.post_scenario_1 || post.scenario_1 || "",
                    post.post_scenario_2 || post.scenario_2 || "",
                    post.post_scenario_3 || post.scenario_3 || "",
                    post.post_scenario_4 || post.scenario_4 || "",
                    r.post ? postScore : "",
                    learningGain,
                    r.gameLogs ? "true" : "false",
                    game.durationSeconds || "",
                    game.totalCollected ?? "",
                    game.successfulAnswerScoreTotal ?? "",
                    game.hintsUsed ?? "",
                    Array.isArray(game.chatLog) ? game.chatLog.length : "",
                    fb.samValence ?? "",
                    fb.samArousal ?? "",
                    fb.cuqScore ?? "",
                    ...(Array.from({ length: 16 }, (_, i) => (fb.cuqResponses && fb.cuqResponses[`cuq_${i + 1}`]) || "")),
                    demo.time_consent || "",
                    r.time_framework_select || pre.time_framework_select || "",
                    demo.time_demographics || "",
                    pre.time_pre_scenario_1 || "",
                    pre.time_pre_scenario_2 || "",
                    pre.time_pre_scenario_3 || "",
                    pre.time_pre_scenario_4 || "",
                    preTimeTotal,
                    post.time_post_scenario_1 || "",
                    post.time_post_scenario_2 || "",
                    post.time_post_scenario_3 || "",
                    post.time_post_scenario_4 || "",
                    postTimeTotal,
                    fb.time_sam_feedback || "",
                    fb.time_cuq_feedback || ""
                ].map(val => `"${String(val).replace(/"/g, '""')}"`);

                rows.push(row.join(","));
            });
        } catch (err) {
            console.error(`Error parsing ${file}:`, err);
        }
    });

    res.setHeader('Content-Disposition', 'attachment; filename="thesis_experiment_metrics.csv"');
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.send(rows.join("\n"));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});