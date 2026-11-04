import { Application } from "pixi.js";
import type { Scene } from "./Scene";
import { Input } from "./Input";

export interface GameOptions {
    width?: number;
    height?: number;
    backgroundColor?: number;
}
/**
 * The main Saltwater game instance.
 * Handles the Pixi application, update loop, and scene management.
 */
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

        Input.init();

        document.body.appendChild(this.app.canvas);

        // The Update loop
        this.app.ticker.add((ticker) => {
            this.currentScene?.update(ticker.deltaTime);

            Input.update();
        });
    }

    /**
     * Switches scenes
     * @param scene The Scene to switch to
     */
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