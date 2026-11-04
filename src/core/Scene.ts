import { Container } from "pixi.js";
import { GameObject } from "../objects/GameObject";

export abstract class Scene extends Container {
    create(): void {

    }

    update(_delta: number): void {
        for (const child of this.children) {
            if (child instanceof GameObject) {
                child.update(_delta);
            }
        }
    }

    destroy(): void {
        super.destroy();
    }
}