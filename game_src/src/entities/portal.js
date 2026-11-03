import k from "../kaplayCtx.js";

export function makePortal(pos, sceneToLoad) {
    return k.add([
        k.sprite("portal", { anim: "swirl" }),
        k.area({shape: new k.Rect(k.vec2(0, 10), 20, 20) }),
        k.scale(16),
        k.anchor("center"),
        k.pos(pos),
        k.offscreen(),
        k.layer("obj"),
        "portal",
        { targetScene: sceneToLoad },   
    ]);
}