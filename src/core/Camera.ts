import { GameObject } from "../objects/GameObject";

export class Camera {
    public x: number = 0;
    public y: number = 0;
    public zoom: number = 1;

    private target?: GameObject;

    public follow(target: GameObject): void {
        this.target = target;
    }

    public update(_delta: number): void {
        if (this.target) {
            this.x = this.target.x;
            this.y = this.target.y;
        }
    }
}