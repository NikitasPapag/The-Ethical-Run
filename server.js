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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});