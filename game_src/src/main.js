import k from "./kaplayCtx.js";
import prologue from "./scenes/prologue.js";
import game from "./scenes/game.js";
import gameover from "./scenes/gameover.js";
import mainMenu from "./scenes/mainMenu.js";
import scenario from "./scenes/scenario.js";
import credits from "./scenes/credits.js";
import help from "./scenes/help.js";
import leaderboard from "./scenes/leaderboard.js";
import completed from "./scenes/completed.js";

k.loadSprite("sound-on", "graphics/sound-on.png");
k.loadSprite("sound-off", "graphics/sound-off.png");
k.loadSprite("background", "graphics/background.png");
k.loadSprite("platform", "graphics/platform.png");
k.loadSprite("player-idle", "graphics/player-idle.png", {
    sliceX: 8,
    sliceY: 1,
    anims: {
        idle: {from: 0, to: 7, loop: true, speed: 20},
    },
});
k.loadSprite("player-run", "graphics/player-run.png", {
    sliceX: 8,
    sliceY: 1,
    anims: {
        run: {from: 0, to: 7, loop: true, speed: 20},
    },
});
k.loadSprite("player-jump", "graphics/player-jump.png", {
    sliceX: 11,
    sliceY: 1,
    anims: {
        jump: {from: 0, to: 10, loop: true, speed: 10},
    },
});
k.loadSprite("enemy1", "graphics/enemy1walk.png", {
    sliceX: 8,
    sliceY: 1,
    anims: {
        walk: {frames: [7, 6, 5, 4, 3, 2, 1, 0], loop: true, speed: 8},
    },
});
k.loadSprite("enemy2", "graphics/enemy2walk.png", {
    sliceX: 6,
    sliceY: 1,
    anims: {
        walk: {frames: [5, 4, 3, 2, 1, 0], loop: true, speed: 8},
    },
});
k.loadSprite("battery", "graphics/battery.png", {
    sliceX: 10,
    sliceY: 6,
    anims: {
        fluid: {from: 0, to: 59, loop: true, speed: 10},
    },
});
k.loadSprite("portal", "graphics/portal.png", {
    sliceX: 3,
    sliceY: 2,
    anims: {
        swirl: {from: 0, to: 5, loop: true, speed: 10},
    },
});
k.loadSprite("portal-reversed", "graphics/portal-reversed.png", {
    sliceX: 3,
    sliceY: 2,
    anims: {
        swirl: {frames: [5, 4, 3, 2 , 1, 0], loop: true, speed: 10},
    },
});

k.loadFont("mania", "fonts/mania.ttf");

k.loadSound("ambiance", "audio/ambiance.mp3");
k.loadSound("click", "audio/click.wav");
k.loadSound("battery", "audio/battery.wav");
k.loadSound("collide", "audio/collide.wav");
k.loadSound("jump", "audio/jump.wav");
k.loadSound("portal", "audio/portal.wav");
k.loadSound("completed", "audio/completed.wav");
k.loadSound("gameover", "audio/gameover.wav");
k.loadSound("hint", "audio/hint.wav");
k.loadSound("send", "audio/send.wav");
k.loadSound("receive", "audio/receive.wav");
k.loadSound("satisfied", "audio/satisfied.wav");

k.setData("saved-score", 0);
k.setData("successful-answer-score-total", 0);
k.setData("current-answer-score", 0);
k.setData("last-answer-score-gain", 0);
if (k.getData("is-muted") === undefined) {
    k.setData("is-muted", false);
}
k.setVolume(k.getData("is-muted") ? 0 : 1);

k.scene("prologue", prologue);
k.scene("main-menu", mainMenu);
k.scene("game", game);
k.scene("gameover", gameover);
k.scene("scenario", scenario);
k.scene("credits", credits);
k.scene("help", help);
k.scene("leaderboard", leaderboard);
k.scene("completed", completed);

k.go("prologue");
