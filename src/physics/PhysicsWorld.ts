import { World } from "planck";

export class PhysicsWorld {
    public world!: World;

    constructor() {
        this.world = new World();
    }

    public update(deltaSeconds: number): void {
        this.world.step(deltaSeconds / 1000);
    }
}