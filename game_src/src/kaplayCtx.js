import kaplay from "kaplay";

const k = kaplay({
    width: 2980, 
    height: 1700,
    letterbox: true,
    pixelDensity: 1,
    background: [0, 0, 0],
    global: false,
    touchToMouse: true,
    buttons: {
        jump: {
            keyboard: ["space"],
            mouse: ["left"],
        },
    },
    debugKey: ["d"],
    debug: false,
});

export default k;
