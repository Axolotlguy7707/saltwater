import { Application } from "pixi.js";
import type { Scene } from "./Scene";

export interface GameOptions {
    width?: number;
    height?: number;
    backgroundColor?: number;
}

export class Game {
    public app: Application;
    private options: GameOptions;

    private currentScene?: Scene;

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

    public switchScene(scene: Scene) {
        if (this.currentScene) {
            this.app.stage.removeChild(this.currentScene);
            this.currentScene.destroy();
        }

        this.currentScene = scene;

        this.currentScene.create();

        this.app.stage.addChild(this.currentScene);
    }
}