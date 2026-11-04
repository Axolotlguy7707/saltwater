import { Sprite as PixiSprite, Texture, Assets } from "pixi.js";
/**
 * The Base Class for Every Object in Saltwater
 */
export class GameObject extends PixiSprite {
    constructor(x: number = 0, y: number = 0, texture: Texture = Texture.WHITE) {
        super(texture);

        this.x = x;
        this.y = y;
    }

    public loadGraphic(path: string): void {
        Assets.load(path).then(texture => {
            this.texture = texture;
        });
    }

    public update(_delta: number): void {

    }
}