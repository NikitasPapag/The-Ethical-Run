import k from "../kaplayCtx.js";
import { makePlayer } from "../entities/player.js";
import { makeEnemy } from "../entities/enemy.js";
import { makeBattery } from "../entities/battery.js";
import { makePortal } from "../entities/portal.js";
import { startAmbiance } from "../audio/ambiance.js";
import { playClick } from "../audio/click.js";
import { ensureBackTrap } from "../utils/history.js";

export default function game() {
    startAmbiance();
    const JUMP_VOLUME = 0.15;
    const BATTERY_VOLUME = 0.15;
    const COLLIDE_VOLUME = 0.2;
    const PORTAL_VOLUME = 0.25;
    const GAMEOVER_VOLUME = 0.2;
    const PORTAL_TRANSITION_DELAY_SECONDS = 0.08;

    k.setGravity(4800);
    let isSceneActive = true;
    let isTransitioning = false;

    const spawnWaitHandles = new Set();
    let speedLoopHandle = null;
    let flashLoop = null;

    const BASE_GAME_SPEED = 600;
    const GAME_SPEED_STEP = 40;
    const GAME_SPEED_LOOP_SECONDS = 1.2;
    const MAX_GAME_SPEED = 2200;

    // --- ESCAPE / SWIPE BACK TO MENU ---
    
    // 1. Trick the mobile browser by adding a dummy page to its history
    ensureBackTrap();

    // 2. Define exactly what happens when they try to leave
    const goBackToMenu = () => {
        if (!isSceneActive || isTransitioning) return;
        isTransitioning = true;
        k.go("main-menu"); 
    };

    // 3. Listen for PC players pressing Escape
    k.onKeyPress("escape", goBackToMenu);

    // 4. Listen for Mobile players swiping back or pressing the Android back button
    const handleMobileBack = () => {
        goBackToMenu();
    };
    window.addEventListener("popstate", handleMobileBack);

    // 5. CRITICAL SAFETY: Remove the listener when the scene ends 
    // so we don't accidentally stack up multiple back buttons!
    k.onSceneLeave(() => {
        isSceneActive = false;
        window.removeEventListener("popstate", handleMobileBack);
        for (const handle of spawnWaitHandles) {
            handle.cancel();
        }
spawnWaitHandles.clear();
        if (speedLoopHandle) speedLoopHandle.cancel();
        if (flashLoop) flashLoop.cancel();
    });

    const bgPieceWidth = 2980;
    const bgPieces = [
        k.add([k.sprite("background"),k.pos(0, 0), k.scale(1), k.opacity(1)]),
        k.add([k.sprite("background"), k.pos(bgPieceWidth, 0), k.scale(1), k.opacity(1)]),
    ];

const platformWidth = 596;
    const scaledPlatformWidth = platformWidth * 5;
    const platform = [
        k.add([k.sprite("platform"), k.pos(0, 1300), k.scale(5)]),
        k.add([k.sprite("platform"), k.pos(scaledPlatformWidth, 1300), k.scale(5)]),
    ];

    // --- SCORE & PROGRESS STATE ---
    let score = k.getData("saved-score", 0);
    let totalBatteries = k.getData("total-batteries", 0);
    const progress = k.getData("scenario-progress", 0);
    const answerScorePercent = Math.min(100, k.getData("current-answer-score", 0) || 0);
    let scoreMultiplier = 0;

    const percentProgress = Math.min(100, progress * 25);

    // ==========================================
    // 🎨 VISUAL UI BARS (PROGRESS & HEALTH)
    // ==========================================
    
    const barWidth = 500;
    const barHeight = 70;
    const barX = k.width() - barWidth - 40;
    const leftHudX = 35;
    const hudRowGap = 30;
    
    // 1. PROGRESS BAR
    const barY = 45;
    const scoreText = k.add([
        k.text(`BATTERIES: ${score}`, { font: "mania", size: 100 }),
        k.pos(leftHudX, barY - 10),
    ]);

    k.add([
        k.text("PROGRESS:", { font: "mania", size: 100 }),
        k.pos(barX - 440, barY - 10),
        k.color(255, 255, 255)
    ]);

    k.add([
        k.rect(barWidth, barHeight, { radius: 10 }),
        k.pos(barX, barY),
        k.color(0, 0, 0),
        k.outline(4, k.WHITE)
    ]);

    const fillWidth = (percentProgress / 100) * barWidth;
    if (fillWidth > 0) {
        k.add([
            k.rect(fillWidth, barHeight, { radius: 10 }),
            k.pos(barX, barY),
            k.color(0, 200, 0) 
        ]);
    }

    // 2. HEALTH BAR
    const MAX_HEALTH = 5;
    let health = MAX_HEALTH;
    const healthBarY = barY + barHeight + hudRowGap; 

    k.add([
        k.text(`SCORE: ${answerScorePercent}%`, { font: "mania", size: 100 }),
        k.pos(leftHudX, healthBarY - 10),
        k.color(255, 255, 255)
    ]);

    k.add([
        k.text("HEALTH:", { font: "mania", size: 100 }),
        k.pos(barX - 350, healthBarY - 10),
        k.color(255, 255, 255)
    ]);

    k.add([
        k.rect(barWidth, barHeight, { radius: 10 }),
        k.pos(barX, healthBarY),
        k.color(0, 0, 0),
        k.outline(4, k.WHITE)
    ]);

    // The Gold Fill that shrinks when damaged
    const healthFill = k.add([
        k.rect(barWidth, barHeight, { radius: 10 }),
        k.pos(barX, healthBarY),
        k.color(255, 215, 0) 
    ]);

    // ==========================================

    const player = makePlayer(k.vec2(300, 1500));
    player.setControls();

    function showBatteryUI(textToDisplay) {
        // Spawn a brand new text object right above the player
        const floater = k.add([
            k.text(textToDisplay, { font: "mania", size: 120 }),
            k.pos(player.pos.x, player.pos.y - 50),
            k.anchor("center"),
            k.color(255, 255, 0),
            k.opacity(1),
            k.move(k.UP, 150), // Makes it constantly drift upwards!
        ]);

        // Fade it out over 1 second, then destroy it so it doesn't leak memory
        k.tween(1, 0, 1, (val) => floater.opacity = val, k.easings.easeOutQuad).onEnd(() => {
            floater.destroy();
        });
    }

function showAnswerScoreUI(scoreGainPercent) {
        if (!scoreGainPercent) return;
        
        // Spawn a brand new text object offset slightly from the player
        const floater = k.add([
            k.text(`+${scoreGainPercent}% SCORE`, { font: "mania", size: 120 }),
            k.pos(player.pos.x + 60, player.pos.y - 90), // Offset so it doesn't cover battery text
            k.anchor("center"),
            k.color(0, 220, 255),
            k.opacity(1),
            k.move(k.UP, 150),
        ]);

        // Fade it out over 1.2 seconds, then destroy it
        k.tween(1, 0, 1.2, (val) => floater.opacity = val, k.easings.easeOutQuad).onEnd(() => {
            floater.destroy();
        });
    }
    // ==========================================

    let isGameOver = false;

    const originalJump = player.jump;
    player.jump = (...args) => {
        if (isGameOver) return;
        k.play("jump", { volume: JUMP_VOLUME });
        originalJump.apply(player, args);
    };

    const isReturningFromScenario = k.getData("return-reward", false);

    let gameSpeed = BASE_GAME_SPEED; 

    // --- GAMESPEED & RETURN LOGIC ---
    if (isReturningFromScenario) {
        score += 100;
        totalBatteries += 100; 
        k.setData("total-batteries", totalBatteries); 

        scoreText.text = `BATTERIES: ${score}`;
        
        // Using the new helper function
        showBatteryUI("+100");
        showAnswerScoreUI(k.getData("last-answer-score-gain", 0) || 0);

        k.setData("return-reward", false); 
        k.setData("last-answer-score-gain", 0);
        k.setData("saved-score", score); 
        
        if (progress >= 4) { 
            isTransitioning = true;
            k.setData("current-score", totalBatteries); 
            k.setData("saved-score", 0);
            k.setData("total-batteries", 0);
            k.setData("game-speed", BASE_GAME_SPEED); 
            k.go("completed"); 
            return; 
        }
        
        const savedSpeed = k.getData("game-speed", BASE_GAME_SPEED); 
        gameSpeed = BASE_GAME_SPEED + ((savedSpeed - BASE_GAME_SPEED) / 2);
        gameSpeed = Math.min(gameSpeed, MAX_GAME_SPEED);
        
    } else {
        gameSpeed = BASE_GAME_SPEED;
        k.setData("game-speed", BASE_GAME_SPEED);
    }
    
    speedLoopHandle = k.loop(GAME_SPEED_LOOP_SECONDS, () => {
        if (!isGameOver) {
            gameSpeed = Math.min(MAX_GAME_SPEED, gameSpeed + GAME_SPEED_STEP);
        }
    });

    // ==========================================
    // ⚔️ ENEMY COLLISION & HEALTH DAMAGE
    // ==========================================
    player.onCollide("enemy", (enemy) => {
        if (isGameOver || isTransitioning) return;

        if (!player.isGrounded()) {
            k.destroy(enemy);
            player.play("jump");
            player.jump();
            
            let pointsEarned;

            if (percentProgress >= 75) {
                pointsEarned = 10;
                showBatteryUI("+10");
            } else {
                scoreMultiplier += 1;
                pointsEarned = 10 * scoreMultiplier;

                if (scoreMultiplier === 1) showBatteryUI("+10");
                if (scoreMultiplier > 1) showBatteryUI(`x${scoreMultiplier}`);
            }

            score += pointsEarned;
            totalBatteries += pointsEarned;
            k.setData("total-batteries", totalBatteries);
            k.setData("total-collected", (k.getData("total-collected", 0) || 0) + pointsEarned);
            k.play("battery", { volume: BATTERY_VOLUME });

            scoreText.text = `BATTERIES: ${score}`;
            return;
        }
        
        // TAKE DAMAGE LOGIC
        k.destroy(enemy); 
        health -= 1;
        k.play("collide", { volume: COLLIDE_VOLUME });
        k.shake(10); 

        // 🟢 SAFE DAMAGE FLASH EFFECT (Crash-proof)
        if (flashLoop) {
            flashLoop.cancel();
            flashLoop = null;
        }
        let flashCount = 0;
        const currentLoop = k.loop(0.1, () => {
            player.opacity = player.opacity === 1 ? 0.3 : 1;
            flashCount++;
            
            if (flashCount > 4) {
                player.opacity = 1;
                currentLoop.cancel();
                if (flashLoop === currentLoop) {
                    flashLoop = null;
                }
            }
        });
        flashLoop = currentLoop;
        healthFill.width = (health / MAX_HEALTH) * barWidth;

    if (health <= 0) {
            isGameOver = true;
            k.play("gameover", { volume: GAMEOVER_VOLUME });

            player.paused = true;
            for (const entity of [...k.get("enemy"), ...k.get("battery"), ...k.get("portal")]) {
                entity.paused = true;
            }
            
            const triggerGameOver = () => {
                if (isTransitioning) return;
                isTransitioning = true;
                k.wait(0.2, () => {
                    k.setData("current-score", totalBatteries);
                    k.setData("saved-score", 0);
                    k.setData("total-batteries", 0); 
                    k.setData("game-speed", BASE_GAME_SPEED);
                    k.go("gameover");
                });
            };

            if (score < 100) {
                triggerGameOver();
                return;
            }

            // --- REVIVE POPUP UI ---
            const reviveModal = k.add([
                k.pos(0, 0),
                k.fixed(),
                k.z(300),
            ]);

            reviveModal.add([
                k.rect(1200, 650, { radius: 20 }),
                k.pos(k.center().x, k.center().y),
                k.anchor("center"),
                k.color(20, 20, 40),
                k.opacity(0.95),
                k.outline(8, k.WHITE),
            ]);

            reviveModal.add([
                k.text("OUT OF HEALTH!", { font: "mania", size: 110 }),
                k.pos(k.center().x, k.center().y - 180),
                k.anchor("center"),
                k.color(255, 50, 50),
            ]);

            reviveModal.add([
                k.text("REVIVE FOR 100 BATTERIES?", { font: "mania", size: 65 }),
                k.pos(k.center().x, k.center().y - 50),
                k.anchor("center"),
                k.color(255, 215, 0),
            ]);

            const makeModalBtn = (label, xOffset, r, g, b) => {
                const btn = reviveModal.add([
                    k.rect(480, 140, { radius: 10 }),
                    k.pos(k.center().x + xOffset, k.center().y + 140),
                    k.anchor("center"),
                    k.color(r, g, b),
                    k.outline(6, k.WHITE),
                    k.area(),
                ]);
                btn.add([
                    k.text(label, { font: "mania", size: 54 }),
                    k.anchor("center"),
                    k.color(255, 255, 255),
                ]);
                return btn;
            };

            const giveUpBtn = makeModalBtn("GIVE UP", -270, 130, 30, 30);
            const reviveBtn = makeModalBtn("REVIVE", 270, 20, 120, 50);

            let reviveTouchHandle = null;

            const handleRevive = () => {
                if (!isGameOver || isTransitioning) return;
                if (reviveTouchHandle) reviveTouchHandle.cancel();
                playClick();

                score -= 100;
                k.setData("saved-score", score);
                scoreText.text = `BATTERIES: ${score}`;
                showBatteryUI("-100");

                health = MAX_HEALTH;
                healthFill.width = barWidth;

                for (const activeEnemy of k.get("enemy")) {
                    k.destroy(activeEnemy);
                }

                player.paused = false;
                for (const entity of [...k.get("battery"), ...k.get("portal")]) {
                    entity.paused = false;
                }

                // Close popup and unpause
                reviveModal.destroy();
                isGameOver = false;
            };

            const handleGiveUp = () => {
                if (isTransitioning) return;
                if (reviveTouchHandle) reviveTouchHandle.cancel();
                playClick();
                reviveModal.destroy();
                triggerGameOver();
            };

            reviveBtn.onClick(handleRevive);
            giveUpBtn.onClick(handleGiveUp);

            reviveTouchHandle = k.onTouchStart((pos) => {
                if (reviveBtn.hasPoint(pos)) handleRevive();
                else if (giveUpBtn.hasPoint(pos)) handleGiveUp();
            });
        }
    });
    
    // ==========================================

    player.onCollide("battery", (battery) => {
        if (isGameOver || isTransitioning) return;
        k.destroy(battery);
        score++;
        totalBatteries++; 
        k.setData("total-batteries", totalBatteries);
        k.setData("total-collected", (k.getData("total-collected", 0) || 0) + 1);
        k.play("battery", { volume: BATTERY_VOLUME });

        scoreText.text = `BATTERIES: ${score}`;
        showBatteryUI("+1 ");
    });

    player.onCollide("portal", () => {
        if (isGameOver || isTransitioning) return;
        isTransitioning = true;
        k.play("portal", { volume: PORTAL_VOLUME });
        k.setData("saved-score", score);
        k.setData("game-speed", gameSpeed);
        k.wait(PORTAL_TRANSITION_DELAY_SECONDS, () => {
            k.go("scenario");
        });
    });

    const OFFSCREEN_CULL_X = -400;
    const MAX_ENEMIES = 12;
    const MAX_BATTERIES = 14;
    const MAX_PORTALS = 2;
    const scheduleSpawn = (delay, callback) => {
        let handle = null;
        handle = k.wait(delay, () => {
            spawnWaitHandles.delete(handle);
            if (!isSceneActive || isTransitioning) return;
            if (isGameOver) {
                scheduleSpawn(0.5, callback);
                return;
            }
            callback();
        });
        spawnWaitHandles.add(handle);
    };

    const spawnEnemy = () => {
        if (k.get("enemy").length < MAX_ENEMIES) {
            makeEnemy(k.vec2(3200, 1200));
        }
        scheduleSpawn(k.rand(0.5, 2.5), spawnEnemy);
    };

    spawnEnemy();

    const [minBatteryWait, maxBatteryWait] =
        percentProgress < 50 ? [0.5, 1.5] :
        percentProgress < 75 ? [1.5, 3] :
        [2, 4];

    const spawnBattery = () => {
        if (k.get("battery").length < MAX_BATTERIES) {
            makeBattery(k.vec2(3200, 1400));
        }
        scheduleSpawn(k.rand(minBatteryWait, maxBatteryWait), spawnBattery);
    };

    spawnBattery();

    const spawnPortal = () => {
        if (k.get("portal").length < MAX_PORTALS) {
            makePortal(k.vec2(3200, 1300));
        }
        scheduleSpawn(k.rand(20, 25), spawnPortal);
    };

    const initialPortalWaitTime = k.rand(18, 22);
    scheduleSpawn(initialPortalWaitTime, spawnPortal);

    k.add([
        k.rect(2980, 600),
        k.opacity(0),
        k.area(),
        k.pos(0, 1550),
        k.body({ isStatic: true }),
    ]);

const moveAndCull = (tag, speed) => {
        for (const entity of k.get(tag)) {
            entity.move(-speed, 0);
            if (entity.pos.x < OFFSCREEN_CULL_X) {
                k.destroy(entity);
            }
        }
    };

    k.onUpdate(() => {
        if (!isSceneActive || isGameOver) return; 

        if (player.isGrounded()) {
            scoreMultiplier = 0;
        }

        moveAndCull("enemy", gameSpeed + 300);
        moveAndCull("battery", gameSpeed);
        moveAndCull("portal", gameSpeed);

        if (bgPieces[1].pos.x < 0) {
            bgPieces[0].moveTo(bgPieces[1].pos.x + bgPieceWidth, 0);
            bgPieces.push(bgPieces.shift());
        }

        bgPieces[0].move(-100, 0);
        bgPieces[1].moveTo(bgPieces[0].pos.x + bgPieceWidth, 0);

        if (platform[1].pos.x < 0) {
            platform[0].moveTo(platform[1].pos.x + scaledPlatformWidth, 1300);
            platform.push(platform.shift());
        }

        platform[0].move(-gameSpeed, 0);
        platform[1].moveTo(platform[0].pos.x + scaledPlatformWidth, 1300);
    });}
