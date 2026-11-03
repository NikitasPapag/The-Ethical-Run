import k from "../kaplayCtx.js";
import { startAmbiance } from "../audio/ambiance.js";
import { playClick } from "../audio/click.js";

export default function leaderboard() {
    startAmbiance();

    // LEADERBOARD TITLE (Bigger)
    k.add([
        k.text("LEADERBOARD", { font: "mania", size: 120 }), 
        k.anchor("center"),
        k.pos(k.center().x, k.center().y - 450), // Moved up a bit to fit
    ]);

    const startY = k.center().y - 200;
    const scoreColumnX = k.center().x + 700;
    
    // COLUMNS (HEADERS) - Much bigger and spaced out
    k.add([ k.text("FRAMEWORK", { font: "mania", size: 70 }), k.anchor("left"), k.pos(k.center().x - 850, startY) ]);
    k.add([ k.text("BATTERIES", { font: "mania", size: 70 }), k.anchor("center"), k.pos(k.center().x - 150, startY) ]);
    k.add([ k.text("PROGRESS", { font: "mania", size: 70 }), k.anchor("center"), k.pos(k.center().x + 300, startY) ]);
    k.add([ k.text("SCORE", { font: "mania", size: 70 }), k.anchor("center"), k.pos(scoreColumnX, startY) ]);

    // The frameworks and their colors
    const frameworks = [
        { id: "utilitarianism", name: "UTILITARIANISM", r: 100, g: 0, b: 0 },
        { id: "deontological", name: "DEONTOLOGY", r: 0, g: 100, b: 0 },
        { id: "virtue", name: "VIRTUE ETHICS", r: 0, g: 0, b: 100 }
    ];

    // DRAW THE 3 LINES
    frameworks.forEach((fw, idx) => {
        const yPos = startY + 160 + (idx * 150); // Bigger spacing between rows

        // 🟢 FIXED: We add "|| 0" here. If the score doesn't exist yet, it defaults to 0 instead of null!
        const fwScore = k.getData(`best-score-${fw.id}`) || 0;
        const fwAnswerScore = k.getData(`best-answer-score-${fw.id}`) || 0;
        const fwProgress = k.getData(`best-progress-${fw.id}`) || 0;
        const isCompletedPath = fwProgress >= 4;
        const rowTextColor = isCompletedPath ? k.rgb(255, 215, 0) : k.rgb(255, 255, 255);

        const fwProgressPercent = Math.min(100, fwProgress * 25) + "%";
        const fwAnswerScorePercent = Math.min(100, fwAnswerScore) + "%";

        // Row Colored Box (Bigger)
        k.add([
            k.rect(1800, 130, { radius: 10 }),
            k.anchor("center"),
            k.pos(k.center().x, yPos),
            k.color(fw.r, fw.g, fw.b),
            k.outline(6, k.WHITE)
        ]);

        // Row Values (Bigger)
        k.add([ k.text(fw.name, { font: "mania", size: 65 }), k.anchor("left"), k.pos(k.center().x - 850, yPos), k.color(rowTextColor) ]);
        k.add([ k.text(`${fwScore}`, { font: "mania", size: 70 }), k.anchor("center"), k.pos(k.center().x - 150, yPos), k.color(rowTextColor) ]);
        k.add([ k.text(fwProgressPercent, { font: "mania", size: 70 }), k.anchor("center"), k.pos(k.center().x + 300, yPos), k.color(rowTextColor) ]);
        k.add([ k.text(fwAnswerScorePercent, { font: "mania", size: 70 }), k.anchor("center"), k.pos(scoreColumnX, yPos), k.color(rowTextColor) ]);
    });

    // BACK TO MAIN MENU BUTTON (Bigger)
    const menuBtn = k.add([
        k.rect(600, 140, { radius: 8 }),
        k.pos(k.center().x, k.height() - 300),
        k.anchor("center"),
        k.color(0, 0, 0),
        k.outline(8, k.WHITE),
        k.area()
    ]);

    menuBtn.add([
        k.text("MAIN MENU", { font: "mania", size: 80 }),
        k.anchor("center"),
        k.color(255, 255, 255)
    ]);

    menuBtn.onClick(() => {
        playClick();
        k.go("main-menu"); 
    });

    k.onTouchStart((pos) => {
        if (menuBtn.hasPoint(pos)) {
            playClick();
            k.go("main-menu");
        }
    });
}
