import k from "../kaplayCtx.js";

export function makeBattery(pos) {
    return k.add([
        k.sprite("battery", {anim: "fluid"}),
        k.area(),
        k.scale(7),
        k.anchor("center"),
        k.pos(pos),
        k.offscreen(),
        "battery",
    ]);
}