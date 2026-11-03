import k from "../kaplayCtx.js";
import { stopAmbiance } from "../audio/ambiance.js";
import { playClick } from "../audio/click.js";

export default function gameover() {
    stopAmbiance();

    // 1. Setup Framework and Colors
    const fwId = k.getData("selected-framework", "utilitarianism"); 

    const frameworks = [
        { id: "utilitarianism", name: "UTILITARIANISM", r: 100, g: 0, b: 0 },
        { id: "deontological", name: "DEONTOLOGY", r: 0, g: 100, b: 0 },
        { id: "virtue", name: "VIRTUE ETHICS", r: 0, g: 0, b: 100 }
    ];

    const fw = frameworks.find(f => f.id === fwId) || frameworks[0];
    
    // 2. Fetch Stats
    let bestScore = k.getData(`best-score-${fw.id}`) || 0;
    let bestAnswerScore = k.getData(`best-answer-score-${fw.id}`) || 0;
    let bestProgress = k.getData(`best-progress-${fw.id}`) || 0;

    const currentScore = k.getData("current-score") || 0;
    const currentAnswerScore = k.getData("current-answer-score") || 0;
    const currentProgress = k.getData("scenario-progress") || 0;

    // 3. Update Best Run (highest progress wins, then higher answer score as tie-breaker)
    const isBetterRun =
        currentProgress > bestProgress ||
        (currentProgress === bestProgress && currentAnswerScore > bestAnswerScore) ||
        (currentProgress === bestProgress && currentAnswerScore === bestAnswerScore && currentScore > bestScore);

    if (isBetterRun) {
        k.setData(`best-score-${fw.id}`, currentScore);
        k.setData(`best-answer-score-${fw.id}`, currentAnswerScore);
        k.setData(`best-progress-${fw.id}`, currentProgress);
        bestScore = currentScore;
        bestAnswerScore = currentAnswerScore;
        bestProgress = currentProgress;
    }

    const currentProgressPercent = Math.min(100, currentProgress * 25) + "%";
    const bestProgressPercent = Math.min(100, bestProgress * 25) + "%";
    const currentAnswerScorePercent = Math.min(100, currentAnswerScore) + "%";
    const bestAnswerScorePercent = Math.min(100, bestAnswerScore) + "%";

    // --- UI DRAWING ---

    // GAME OVER TITLE
    k.add([
        k.text("GAME OVER", { font: "mania", size: 150 }),
        k.anchor("center"),
        k.pos(k.center().x, k.center().y - 450),
    ]);

    // FRAMEWORK SUBTITLE
    k.add([
        k.text(`${fw.name} RUN`, { font: "mania", size: 80 }),
        k.color(fw.r + 155, fw.g + 155, fw.b + 155),
        k.anchor("center"),
        k.pos(k.center().x, k.center().y - 320),
    ]);

    const startY = k.center().y - 100;
    const scoreColumnX = k.center().x + 700;
    
    // COLUMNS (HEADERS)
    k.add([ k.text("TYPE", { font: "mania", size: 70 }), k.anchor("left"), k.pos(k.center().x - 850, startY) ]);
    k.add([ k.text("BATTERIES", { font: "mania", size: 70 }), k.anchor("center"), k.pos(k.center().x - 150, startY) ]);
    k.add([ k.text("PROGRESS", { font: "mania", size: 70 }), k.anchor("center"), k.pos(k.center().x + 300, startY) ]);
    k.add([ k.text("SCORE", { font: "mania", size: 70 }), k.anchor("center"), k.pos(scoreColumnX, startY) ]);

    // --- ROW 1: CURRENT RUN ---
    const currentY = startY + 160;
    
    k.add([
        k.rect(1800, 130, { radius: 10 }),
        k.anchor("center"),
        k.pos(k.center().x, currentY),
        k.color(50, 50, 50),
        k.outline(6, k.WHITE)
    ]);

    k.add([ k.text("CURRENT", { font: "mania", size: 65 }), k.anchor("left"), k.pos(k.center().x - 850, currentY) ]);
    k.add([ k.text(`${currentScore}`, { font: "mania", size: 70 }), k.anchor("center"), k.pos(k.center().x - 150, currentY) ]);
    k.add([ k.text(`${currentProgressPercent}`, { font: "mania", size: 70 }), k.anchor("center"), k.pos(k.center().x + 300, currentY) ]);
    k.add([ k.text(currentAnswerScorePercent, { font: "mania", size: 70 }), k.anchor("center"), k.pos(scoreColumnX, currentY) ]);

    // --- ROW 2: BEST RUN ---
    const bestY = currentY + 150;

    k.add([
        k.rect(1800, 130, { radius: 10 }),
        k.anchor("center"),
        k.pos(k.center().x, bestY),
        k.color(fw.r, fw.g, fw.b),
        k.outline(6, k.WHITE)
    ]);

    k.add([ k.text("BEST", { font: "mania", size: 65 }), k.anchor("left"), k.pos(k.center().x - 850, bestY) ]);
    k.add([ k.text(`${bestScore}`, { font: "mania", size: 70 }), k.anchor("center"), k.pos(k.center().x - 150, bestY) ]);
    k.add([ k.text(`${bestProgressPercent}`, { font: "mania", size: 70 }), k.anchor("center"), k.pos(k.center().x + 300, bestY) ]);
    k.add([ k.text(bestAnswerScorePercent, { font: "mania", size: 70 }), k.anchor("center"), k.pos(scoreColumnX, bestY) ]);

    // --- RETRY BUTTON (Red) ---
    const retryBtn = k.add([
        k.rect(600, 140, { radius: 8 }),
        k.pos(k.center().x - 340, k.height() - 300),
        k.anchor("center"),
        k.color(140, 20, 20), // Red
        k.outline(8, k.WHITE),
        k.area()
    ]);

    retryBtn.add([
        k.text("RETRY", { font: "mania", size: 80 }),
        k.anchor("center"),
        k.color(255, 255, 255)
    ]);

    // --- CONTINUE BUTTON (Green - Replaces Main Menu & Questionnaire) ---
    const continueBtn = k.add([
        k.rect(600, 140, { radius: 8 }),
        k.pos(k.center().x + 340, k.height() - 300),
        k.anchor("center"),
        k.color(20, 120, 50), // Green
        k.outline(8, k.WHITE),
        k.area()
    ]);

    continueBtn.add([
        k.text("CONTINUE", { font: "mania", size: 80 }),
        k.anchor("center"),
        k.color(255, 255, 255)
    ]);

    // --- DOWNLOAD LOG BUTTON ---
    const downloadLogBtn = k.add([
        k.rect(420, 100, { radius: 8 }),
        k.pos(k.width() - 470, 50),
        k.color(30, 80, 130),
        k.outline(8, k.WHITE),
        k.area(),
    ]);
    downloadLogBtn.add([
        k.text("DOWNLOAD LOG", { font: "mania", size: 48 }),
        k.anchor("center"),
        k.pos(210, 50),
        k.color(255, 255, 255),
    ]);

    let hasManuallyDownloadedLog = false;
    const downloadLog = () => {
        if (hasManuallyDownloadedLog) return;
        hasManuallyDownloadedLog = true;
        exportRunLog("GAMEOVER", true);
        k.setData("run-chat-log", []);
    };

    let isContinuing = false;
    const goToQuestionnaire = async () => {
        if (isContinuing) return;
        isContinuing = true;

        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get("userId") || "anonymous";
        const currentFw = k.getData("selected-framework") || "utilitarianism";

        // Push game logs to the server
        try {
            await fetch("/api/gamelogs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId: userId,
                    logs: {
                        result: "GAMEOVER",
                        runDate: new Date().toLocaleString(),
                        unixTimestamp: Date.now(),
                        framework: currentFw,
                        batteriesCollected: k.getData("total-collected") || 0,
                        scenariosCompleted: k.getData("scenario-progress") || 0,
                        score: k.getData("current-answer-score", 0) || 0,
                        hintsUsed: k.getData("hints-used") || 0,
                        chatHistory: k.getData("run-chat-log") || []
                    }
                })
            });
        } catch (err) {
            console.error("Failed to sync logs to server:", err);
        }

        // Clean up run state for the next framework run
        k.setData("run-chat-log", []);
        k.setData("hints-used", 0);
        k.setData("scenario-progress", 0);
        k.setData("successful-answer-score-total", 0);
        k.setData("current-answer-score", 0);
        k.setData("last-answer-score-gain", 0);
        k.setData("total-collected", 0);
        k.setData("log-downloaded", false);

        // Redirect directly to the post-questionnaire
        setTimeout(() => {
            window.location.href = `/post_questionnaire.html?userId=${encodeURIComponent(userId)}&framework=${encodeURIComponent(currentFw)}`;
        }, 150);    };

    function retryRun() {
        const existingLog = k.getData("run-chat-log") || [];
        existingLog.push({
            sender: "System (Run Retry)",
            message: `--- PLAYER RETRIED AFTER GAME OVER (Progress: ${currentProgress}/4, Score: ${currentAnswerScorePercent}, Batteries: ${currentScore}) ---`,
            timestamp: Date.now(),
        });
        k.setData("run-chat-log", existingLog);

        k.setData("scenario-progress", 0);
        k.setData("successful-answer-score-total", 0);
        k.setData("current-answer-score", 0);
        k.setData("last-answer-score-gain", 0);
        k.setData("saved-score", 0);
        k.setData("total-batteries", 0);
        k.setData("return-reward", false);
        k.setData("log-downloaded", false);

        k.go("game");
    }

    retryBtn.onClick(() => {
        playClick();
        retryRun();
    });

    continueBtn.onClick(() => {
        playClick();
        goToQuestionnaire();
    });

    downloadLogBtn.onClick(() => {
        playClick();
        downloadLog();
    });

    k.onTouchStart((pos) => {
        if (retryBtn.hasPoint(pos)) {
            playClick();
            retryRun();
        }
        if (continueBtn.hasPoint(pos)) {
            playClick();
            goToQuestionnaire();
        }
        if (downloadLogBtn.hasPoint(pos)) {
            playClick();
            downloadLog();
        }
    });

    // --- DATABASE LOGGING SYSTEM ---
    const exportRunLog = (runResult, forceDownload = false) => {
        if (k.getData("log-downloaded") && !forceDownload) return; 

        const runData = {
            result: runResult,
            runDate: new Date().toLocaleString(),
            unixTimestamp: Date.now(),
            framework: k.getData("selected-framework") || "Unknown",
            batteriesCollected: k.getData("total-collected") || 0,
            scenariosCompleted: k.getData("scenario-progress") || 0,
            score: k.getData("current-answer-score", 0) || 0,
            successfulAnswerScoreTotal: k.getData("successful-answer-score-total", 0) || 0,
            hintsUsed: k.getData("hints-used") || 0,
            chatHistory: k.getData("run-chat-log") || []
        };

        const jsonString = JSON.stringify(runData, null, 4);
        const blob = new Blob([jsonString], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement("a");
        a.href = url;
        a.download = `ethical_game_log_${runResult}_${Date.now()}.json`; 
        
        document.body.appendChild(a);
        a.click();
        
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        k.setData("log-downloaded", true); 
    };
}