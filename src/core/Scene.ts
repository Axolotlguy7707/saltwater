import { Container } from "pixi.js";

export abstract class Scene extends Container {
    create(): void {

    }

    update(_delta: number): void {

    }

    destroy(): void {
        super.destroy();
    }
}