export class Input {
    private static keys = new Set<string>();
    private static justPressedKeys = new Set<string>();

    public static init() {
        window.addEventListener("keydown", (e) => {
            if (!this.keys.has(e.code)) {
                this.justPressedKeys.add(e.code);
            }

            this.keys.add(e.code);
        });

        window.addEventListener("keyup", (e) => {
            this.keys.delete(e.code);
        });
    }

    /**
     * Detects if the key is currently being pressed
     * @param key 
     * @returns If the key was pressed or not
     */
    public static pressed(key: string): boolean {
        return this.keys.has(key);
    }
    /**
     * Detects if the key was just pressed
     * @param key The key code
     * @returns If the key was pressed or not
     */
    public static justPressed(key: string): boolean {
        return this.justPressedKeys.has(key);
    }

    public static update() {
        this.justPressedKeys.clear();
    }
}