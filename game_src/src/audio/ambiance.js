import k from "../kaplayCtx.js";

const AMBIANCE_VOLUME = 1;
let ambianceHandle = null;

export function startAmbiance() {
    if (ambianceHandle) {
        ambianceHandle.loop = true;
        ambianceHandle.volume = AMBIANCE_VOLUME;
        ambianceHandle.paused = false;
        return ambianceHandle;
    }

    ambianceHandle = k.play("ambiance", {
        loop: true,
        volume: AMBIANCE_VOLUME,
    });

    return ambianceHandle;
}

export function stopAmbiance() {
    if (!ambianceHandle) return;
    ambianceHandle.stop();
    ambianceHandle = null;
}
