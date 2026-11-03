import k from "../kaplayCtx.js";

const enemyTypes = [
    {sprite: "enemy1", anim: "walk"},
    {sprite: "enemy2", anim: "walk"},
];

export function makeEnemy(pos) {

    const enemyConfig = k.choose(enemyTypes);

    return k.add([
        k.sprite(enemyConfig.sprite, { anim: enemyConfig.anim }),
        k.area({shape: new k.Rect(k.vec2(-5, 20), 30, 30) }),
        k.scale(6),
        k.anchor("center"),
        k.pos(pos),
        k.offscreen(),
        "enemy",
    ]);
}  