import { Theme } from './theme';

export class ThemeManager {
    private themes: Theme[] = [];
    private theme: Theme | null = null;

    private constructor() {}
    public static init() {
        return new ThemeManager();
    }

    public addTheme(theme: Theme) {
        this.themes.push(theme);
    }
    public get(name: string, callback: (theme: Theme) => void) {
        this.themes.forEach((e) => {
            if (e.name === name) {
                return callback(e);
            } else {
                return;
            }
        });
    }

    public setTheme(name: string) {
        return this.get(name, (e: Theme) => {
            this.theme = e;
        });
    }

    public current(): Theme | null {
        if (this.theme === null && this.themes.length > 0) {
            this.theme = this.themes[0];
        }

        return this.theme;
    }
}
