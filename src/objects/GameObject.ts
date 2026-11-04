import { Sprite as PixiSprite, Texture, Assets } from "pixi.js";
/**
 * The Base Class for Every Object in Saltwater
 */
export class GameObject extends PixiSprite {
    constructor(texture: Texture = Texture.WHITE) {
        super(texture);
    }

    public static fromPath(path: string): GameObject {
        const obj = new GameObject();

        Assets.load(path).then(texture => {
            obj.texture = texture;
        });

        return obj;
    }

    public update(_delta: number): void {

    }
}