import { Application } from "pixi.js";

export interface GameOptions {
    width?: number;
    height?: number;
    backgroundColor?: number;
}

export class Game {
    public app: Application;
    private options: GameOptions;

    constructor(options: GameOptions = {}) {
        this.options = options;
        this.app = new Application();
    }

    async start() {
        await this.app.init({
            width: this.options.width ?? 1280,
            height: this.options.height ?? 720,
            backgroundColor: this.options.backgroundColor ?? 0x000000,
        });

        document.body.appendChild(this.app.canvas);
    }
}