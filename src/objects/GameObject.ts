import { Sprite as PixiSprite, Texture, Assets } from "pixi.js";
/**
 * The Base Class for Every Object in Saltwater
 */
export class GameObject extends PixiSprite {
    constructor(texture: Texture = Texture.WHITE) {
        super(texture);
    }

    public static async fromPath(path: string): Promise<GameObject> {
        const texture = await Assets.load(path);

        return new GameObject(texture);
    }

    public update(_delta: number): void {

    }
}