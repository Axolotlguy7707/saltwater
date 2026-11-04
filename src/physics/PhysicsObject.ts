import { Body, Vec2, World } from "planck";
import { GameObject } from "../objects/GameObject";

export class PhysicsObject extends GameObject {
    body?: Body;

    constructor(world: World, x: number, y: number) {
        super(x, y);

        this.body = world.createBody({
            type: "dynamic",
            position: new Vec2(x, y)
        })
    }

    override update(_delta: number): void {
        const pos = this.body?.getPosition();

        this.x = pos!.x;
        this.y = pos!.y;
    }
}