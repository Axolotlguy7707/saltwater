import { Sprite as PixiSprite, Texture } from "pixi.js";
/**
 * The Base Class for Every Object in Saltwater
 */
export class GameObject extends PixiSprite {
    constructor(texture: Texture = Texture.WHITE) {
        super(texture);
    }

    public update(_delta: number): void {

    }
}