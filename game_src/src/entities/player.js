import k from "../kaplayCtx.js";

export function makePlayer(pos) {
    const player = k.add([
        k.sprite("player-run", {anim: "run"}),
        k.scale(8),
        k.area(),
        k.anchor("center"),
        k.pos(pos),
        k.body({jumpForce: 2200}),
        {  
            batteryCollectUI: null,

            currentAnim: "run",

            setControls() {
                k.onButtonPress("jump", () => {
                    if (this.isGrounded()) {
                        this.use(k.sprite("player-jump"));
                        this.play("jump");
                        this.currentAnim = "jump";
                        this.jump();
                    }
                });
            },
            setEvents() {

            },

        update() {
                if (this.isGrounded()) {
                    if (this.currentAnim !== "run") {
                         this.use(k.sprite("player-run"));
                         this.play("run");
                         this.currentAnim = "run";
                    }
                }    
            }
        },
    ]);
    
   player.batteryCollectUI = player.add([
    k.text("", {font: "mania", size:16}),
    k.color(255, 255, 0),
    k.anchor("center"),
    k.pos(30, -10),
   ]);

    return player;
}
