import k from "../kaplayCtx.js";

const CLICK_VOLUME = 0.6;
const HINT_VOLUME = 0.7;
const SEND_VOLUME = 0.7;
const RECEIVE_VOLUME = 0.7;
const SATISFIED_VOLUME = 0.8;
const PORTAL_VOLUME = 0.7;

export function playClick() {
    k.play("click", {
        volume: CLICK_VOLUME,
    });
}

export function playHint() {
    k.play("hint", {
        volume: HINT_VOLUME,
    });
}

export function playSend() {
    k.play("send", {
        volume: SEND_VOLUME,
    });
}

export function playReceive() {
    k.play("receive", {
        volume: RECEIVE_VOLUME,
    });
}

export function playSatisfied() {
    k.play("satisfied", {
        volume: SATISFIED_VOLUME,
    });
}

export function playPortal() {
    k.play("portal", {
        volume: PORTAL_VOLUME,
    });
}
