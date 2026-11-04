import { Container } from "pixi.js";
import { GameObject } from "../objects/GameObject";
import { Camera } from "./Camera";

export abstract class Scene extends Container {
    camera: Camera = new Camera();

    create(): void {

    }

    update(_delta: number): void {
        //for (const child of this.children) {
        //    if (child instanceof GameObject) {
        //        child.update(_delta);
        //    }
        //}

        this.camera.update(_delta);

        this.x = -this.camera.x;
        this.y = -this.camera.y;
    }

    destroy(): void {
        super.destroy();
    }
}