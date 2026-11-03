import k from "../kaplayCtx.js";
import { stopAmbiance } from "../audio/ambiance.js";

export default function prologue() {
  stopAmbiance();
  let hasStarted = false;

  k.add([
      k.text(
        `
          This is a game made by NikitasPapag for his thesis project
        `,
        { font: "mania", size: 42 }
      ),
    ]);

  k.add([
    k.text(
      `
      In a dystopian city, where evil machines have taken control, 
      a young scholar goes on a run. His quest is to collect 
      batteries to keep his AI companion and himself alive. 
      On his run, he reminisces his academic lifestyle and
      questions the former use of AI in his university, still 
      hoping for a portal out of this cruel world.
      `,
      { font: "mania", size: 80 }),
    k.anchor("center"),
        k.pos(k.center().x, k.center().y - 150),

  ]);

  k.add([
    k.text("Press Space/Click/Touch to Start The Game", {
      font: "mania", size: 60,}),
    k.anchor("center"),
    k.pos(k.center().x, 1300),
  ]);

  const startGame = () => {
    if (hasStarted) return;
    hasStarted = true;
    k.go("main-menu");
  };

  k.onButtonPress("jump", startGame);
  k.onMousePress(startGame);
  k.onTouchStart(startGame);
}
