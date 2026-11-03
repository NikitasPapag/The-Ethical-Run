import k from "../kaplayCtx.js";
import { startAmbiance } from "../audio/ambiance.js";
import { playClick } from "../audio/click.js";

export default function credits() {
    startAmbiance();

    k.add([
        k.text("HELP", { font: "mania", size: 120 }),
        k.anchor("center"),
        k.pos(k.center().x, 140),
    ]);

    const viewportX = 160;
    const viewportY = 260;
    const viewportWidth = k.width() - 180;
    const viewportHeight = k.height() - 620;
    const helpTextPaddingX = 60;
    const helpTextWidth = viewportWidth - helpTextPaddingX * 2;

    const textViewport = k.add([
        k.rect(viewportWidth, viewportHeight),
        k.pos(viewportX, viewportY),
        k.color(0, 0, 0),
        k.area(),
        k.mask(),
    ]);

    const helpText = textViewport.add([
        k.text(
            `
The purpose of this game is for the player to become familiar with 
different frameworks of ethics (utilitarianism, deontology, virtue ethics) 
and to apply them in various scenarios throughout the game. 

For the first portion of the game, the player will try to collect as many 
batteries as possible, while avoiding and killing enemies, pressing only 
Space/Click/Touch. Colliding with an enemy will damage the player's health.

After passing through a portal, a chatbot will appear and the player will
then have to interact with it, by discussing a random ethical dilemma on the
specific framework of ethics that was chosen at the beginning of the game.
The role of the chatbot is to guide the player, through conversation, and make
sure that the ethical dilemma and the applied framework is well understood.

If the chatbot is not satisfied with the player's answers, it will ask more
questions or ask the player to explain their reasoning. If the player finds
it difficult to understand the ethical dilemma or the framework, batteries
can be redeemed for hints through the specific button.

When the chatbot is satisfied with the answers, the player will be rewarded
and able to continue his run, in order to collect more batteries and face more
ethical dilemmas.

The game ends when the player has completed the necessary scenarios in each 
ethical path. Progress and high scores can be tracked in the LEADERBOARD.
            `,
            { font: "mania", size: 72, width: helpTextWidth },
        ),
        k.pos(helpTextPaddingX, 0),
    ]);

    const maxScrollTop = 0;
    const minScrollTop = Math.min(0, viewportHeight - helpText.height);

    const clampTextPosition = () => {
        if (helpText.pos.y > maxScrollTop) helpText.pos.y = maxScrollTop;
        if (helpText.pos.y < minScrollTop) helpText.pos.y = minScrollTop;
    };

    const scrollHelpText = (deltaY) => {
        if (minScrollTop === 0) return;
        helpText.pos.y += deltaY;
        clampTextPosition();
    };

    k.onScroll((delta) => {
        scrollHelpText(-Math.sign(delta.y) * 80);
    });

    let isTouchScrolling = false;
    let lastTouchY = 0;

    k.onTouchStart((pos) => {
        isTouchScrolling = textViewport.hasPoint(pos);
        lastTouchY = pos.y;
    });

    k.onTouchMove((pos) => {
        if (!isTouchScrolling) return;
        const dragDelta = pos.y - lastTouchY;
        lastTouchY = pos.y;
        scrollHelpText(dragDelta);
    });

    k.onTouchEnd(() => {
        isTouchScrolling = false;
    });

// BACK TO MAIN MENU BUTTON
    const menuBtn = k.add([
        k.rect(500, 120, { radius: 8 }),
        k.pos(k.center().x, k.height() - 200),
        k.anchor("center"),
        k.color(0, 0, 0),
        k.outline(6, k.WHITE),
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
