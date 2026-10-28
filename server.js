require('dotenv').config();

const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;
const RESULTS_DIR = path.join(__dirname, 'data', 'results');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

if (!fs.existsSync(RESULTS_DIR)) {
    fs.mkdirSync(RESULTS_DIR, { recursive: true });
}

// 1. Landing Page: Generate ID and start loop
app.get('/', (req, res) => {
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
app.post('/api/pre_submit', (req, res) => {
    const { 
        userId, 
        framework, 
        age, 
        major, 
        philosophyKnowledge, 
        aiFrequency, 
        time_consent, 
        time_demographics, 
        ...scenarios 
    } = req.body;
    
    const userFile = path.join(RESULTS_DIR, `${userId}.json`);
    
    let userData = { runs: {} };
    if (fs.existsSync(userFile)) userData = JSON.parse(fs.readFileSync(userFile));

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
    userData.runs[framework].pre = scenarios;

    fs.writeFileSync(userFile, JSON.stringify(userData, null, 2));
    
    res.redirect(`/game/index.html?userId=${userId}&framework=${framework}`);
});

// 4. Game Logs Hook
app.post('/api/gamelogs', (req, res) => {
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
    fs.writeFileSync(userFile, JSON.stringify(userData, null, 2));
    res.json({ success: true });
});

// 5. Submit Post-Questionnaire & Loop Logic
app.post('/api/post_submit', (req, res) => {
    const {
        userId,
        framework: bodyFw,
        teachingEffectiveness,
        aiNaturalness,
        gameEnjoyment,
        time_feedback,
        ...scenarioAnswers
    } = req.body;

    // Safety guard: never write to undefined.json
    if (!userId || userId === 'undefined') {
        return res.redirect('/');
    }

    const userFile = path.join(RESULTS_DIR, `${userId}.json`);
    let userData = { runs: {} };
    if (fs.existsSync(userFile)) userData = JSON.parse(fs.readFileSync(userFile));

    const framework = bodyFw || userData.currentFramework;

    if (!userData.runs) userData.runs = {};
    if (framework) {
        if (!userData.runs[framework]) userData.runs[framework] = {};
        userData.runs[framework].post = scenarioAnswers;
    }

    // Save feedback both inside the specific framework run AND at root level
    if (teachingEffectiveness || aiNaturalness || gameEnjoyment) {
        const feedbackData = {
            teachingEffectiveness,
            aiNaturalness,
            gameEnjoyment,
            time_feedback
        };
        userData.finalFeedback = feedbackData;
        if (framework && userData.runs[framework]) {
            userData.runs[framework].feedback = feedbackData;
        }
    }

    fs.writeFileSync(userFile, JSON.stringify(userData, null, 2));

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
        "gameEnjoyment", "teachingEffectiveness", "aiNaturalness",
        "time_demographics", "time_pre_total", "time_post_total", "time_feedback"
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
                const preAns = [pre.scenario_1, pre.scenario_2, pre.scenario_3, pre.scenario_4];
                const postAns = [post.scenario_1, post.scenario_2, post.scenario_3, post.scenario_4];
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
                    pre.scenario_1 || "", pre.scenario_2 || "", pre.scenario_3 || "", pre.scenario_4 || "",
                    r.pre ? preScore : "",
                    post.scenario_1 || "", post.scenario_2 || "", post.scenario_3 || "", post.scenario_4 || "",
                    r.post ? postScore : "",
                    learningGain,
                    r.gameLogs ? "true" : "false",
                    game.durationSeconds || "",
                    game.totalCollected ?? "",
                    game.successfulAnswerScoreTotal ?? "",
                    game.hintsUsed ?? "",
                    Array.isArray(game.chatLog) ? game.chatLog.length : "",
                    fb.gameEnjoyment || "",
                    fb.teachingEffectiveness || "",
                    fb.aiNaturalness || "",
                    demo.time_demographics || "",
                    preTimeTotal,
                    postTimeTotal,
                    fb.time_feedback || ""
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