import k from "../kaplayCtx.js";
import { makePlayer } from "../entities/player.js";
import { startAmbiance } from "../audio/ambiance.js";
import { playClick } from "../audio/click.js";
import { ensureBackTrap } from "../utils/history.js";

export default function mainMenu() {
    startAmbiance();

    if (!k.getData("battery-score")) k.setData("battery-score", 0);
    if (k.getData("is-muted") === undefined) k.setData("is-muted", false);
    
    // Automatically set the framework from the URL (provided by pre_questionnaire.html)
    const urlParams = new URLSearchParams(window.location.search);
    const urlFw = urlParams.get("framework") || "utilitarianism";
    k.setData("selected-framework", urlFw);
    
    const bgPieceWidth = 2980;
    const bgPieces = [
        k.add([k.sprite("background"), k.pos(0, 0), k.scale(1), k.opacity(1)]),
        k.add([k.sprite("background"), k.pos(bgPieceWidth, 0), k.scale(1), k.opacity(1)]),
    ];

    const platformWidth = 596;
    const platform = [
        k.add([k.sprite("platform"), k.pos(0, 1300), k.scale(5)]),
        k.add([k.sprite("platform"), k.pos(platformWidth * 5, 1300), k.scale(5)]),
    ];

    k.add([
        k.rect(k.width(), 600),
        k.opacity(0),
        k.area(),
        k.pos(0, 1550),
        k.body({ isStatic: true }),
    ]);

    const soundBtnScale = 0.6;
    const soundBtn = k.add([
        k.sprite(k.getData("is-muted") ? "sound-off" : "sound-on"),
        k.pos(30, 50),
        k.anchor("topleft"),
        k.scale(soundBtnScale),
        k.area(),
        k.fixed(),
        k.z(200),
    ]);

    const updateSoundButtonIcon = () => {
        soundBtn.unuse("sprite");
        soundBtn.use(k.sprite(k.getData("is-muted") ? "sound-off" : "sound-on"));
    };

    soundBtn.onClick(() => {
        const nextMuted = !k.getData("is-muted");
        k.setData("is-muted", nextMuted);
        k.setVolume(nextMuted ? 0 : 1);
        updateSoundButtonIcon();
    });

    // --- MAIN UI CONTAINER ---
    const uiContainer = k.add([ k.pos(0,0) ]);

    uiContainer.add([
        k.text("THE ETHICAL RUN", { font: "mania", size: 148}), 
        k.pos(k.center().x, 450), 
        k.anchor("center"),
    ]);

    const startText = uiContainer.add([
        k.text("Press Space/Click/Touch to Play", { font: "mania", size: 60}),
        k.pos(k.center().x, k.center().y - 300),
        k.anchor("center"),
        k.opacity(1)
    ]);

    startText.onUpdate(() => {
        startText.opacity = k.wave(0.3, 1, k.time() * 3); 
    });
    
    // Credits Button
    const creditsBtn = uiContainer.add([
        k.rect(400, 120), 
        k.pos(k.width() - 20, k.height() - 20),
        k.anchor("botright"),
        k.opacity(0), 
        k.area(), 
    ]);
    creditsBtn.add([
        k.text("CREDITS", { font: "mania", size: 80 }),
        k.anchor("botright"),
        k.pos(-20, -20) 
    ]);
    creditsBtn.onClick(() => {
        playClick();
        k.go("credits");
    });

    // Help Button
    const helpBtn = uiContainer.add([
        k.rect(300, 120), 
        k.pos(20, k.height() - 20),
        k.anchor("botleft"),
        k.opacity(0), 
        k.area(), 
    ]);
    helpBtn.add([
        k.text("HELP", { font: "mania", size: 80 }),
        k.anchor("botleft"),
        k.pos(20, -20) 
    ]);
    helpBtn.onClick(() => {
        playClick();
        k.go("help");
    });

    // Leaderboard Button
    const leaderboardBtn = uiContainer.add([
        k.rect(500, 120), 
        k.pos(k.width() / 2, k.height() - 20),
        k.anchor("bot"),
        k.opacity(0), 
        k.area(), 
    ]);
    leaderboardBtn.add([
        k.text("LEADERBOARD", { font: "mania", size: 80 }),
        k.anchor("bot"),
        k.pos(0, -20) 
    ]);
    leaderboardBtn.onClick(() => {
        playClick();
        k.go("leaderboard");
    });

    const player = makePlayer(k.vec2(300, 1430));
    player.jump = () => {}; 

    // --- GAME START LOGIC ---
    function startGame() {
        playClick();
        k.setData("run-chat-log", []);
        k.setData("hints-used", 0);
        k.setData("log-downloaded", false);
        k.setData("scenario-progress", 0); 
        k.setData("successful-answer-score-total", 0);
        k.setData("current-answer-score", 0);
        k.setData("last-answer-score-gain", 0);
        k.setData("saved-score", 0);
        k.setData("total-batteries", 0);
        k.setData("total-collected", 0);
        k.setData("return-reward", false);
        k.setData("used-scenarios-by-framework", {});
        k.go("game");
    }

    k.onKeyPress("space", startGame);

    k.onMousePress(() => {
        if (
            creditsBtn.isHovering() ||
            helpBtn.isHovering() ||
            leaderboardBtn.isHovering() ||
            soundBtn.isHovering()
        ) {
            return; 
        }
        startGame();
    });

    k.onTouchStart((id, pos) => {
        if (
            creditsBtn.hasPoint(pos) ||
            helpBtn.hasPoint(pos) ||
            leaderboardBtn.hasPoint(pos) ||
            soundBtn.hasPoint(pos)
        ) {
            return; 
        }
        startGame();
    });

    ensureBackTrap();

    const goBackToMenu = () => {
        k.go("main-menu"); 
    };

    k.onKeyPress("escape", goBackToMenu);

    const handleMobileBack = () => {
        goBackToMenu();
    };
    window.addEventListener("popstate", handleMobileBack);

    k.onSceneLeave(() => {
        window.removeEventListener("popstate", handleMobileBack);
    });

    // Background loop
    k.onUpdate(() => {
        if (bgPieces[1].pos.x < 0) {
            bgPieces[0].moveTo(bgPieces[1].pos.x + bgPieceWidth, 0);
            bgPieces.push(bgPieces.shift());
        }
        bgPieces[0].move(-100,0);
        bgPieces[1].moveTo(bgPieces[0].pos.x + bgPieceWidth, 0);

        if (platform[1].pos.x < 0) {
            platform[0].moveTo(platform[1].pos.x + platform[1].width * 5, 1300);
            platform.push(platform.shift());
        }
        platform[0].move(-3000,0);
        platform[1].moveTo(platform[0].pos.x + platform[1].width * 5, 1300);
    });
}