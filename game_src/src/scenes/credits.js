import k from "../kaplayCtx.js";
import { startAmbiance } from "../audio/ambiance.js";
import { playClick } from "../audio/click.js";

export default function credits() {
    startAmbiance();

k.add([
        k.text("CREDITS", { font: "mania", size: 120 }), 
        k.anchor("center"),
        k.pos(k.center().x, k.center().y - 650), // Moved up a bit to fit
    ]);

k.add([
    k.text(
      `
      Game made by Nikitas Papangelopoulos
      Inspired by Sonic (c) SEGA
      Basic code by freeCodeCamp.org
      Background by HungryJapaneseStudents
      Player character design by Foozle
      Enemy characters design by Craftpix.net
      Battery design by Ruxar
      Portal design by Pixelnauta
      Sound button design by Josh017891
      Sound effects by Kronbits, Chequered Ink and Hove Audio
      Music by alkakrab
      Font by SpeedySpikes of Sonic Paradox
      `,
      { font: "mania", size: 72 }),
    k.anchor("center"),
        k.pos(k.center().x, k.center().y - 50),

  ]);

// BACK TO MAIN MENU BUTTON
    const menuBtn = k.add([
        k.rect(500, 120, { radius: 8 }),
        k.pos(k.center().x, k.height() - 250),
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
