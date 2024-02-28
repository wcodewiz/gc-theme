import { ThemeStyle } from './style';

export abstract class Theme {
    public name: string;
    public body: ThemeStyle;
    public text: ThemeStyle;
    public button?: ThemeStyle;
    public anchor?: ThemeStyle;
    public card?: ThemeStyle;
    public heading?: ThemeStyle;
    public switch?: ThemeStyle;

    public backdrop?: ThemeStyle;
    public dialogBackdrop?: ThemeStyle;
    public alertBackdrop?: ThemeStyle;
    public menuBackdrop?: ThemeStyle;
    public dropdownBackdrop?: ThemeStyle;
    public normalBackdrop?: ThemeStyle;

    public container?: ThemeStyle;
    public input?: ThemeStyle;
    public checkbox?: ThemeStyle;
    public progress?: ThemeStyle;
    public slider?: ThemeStyle;
    public menu?: ThemeStyle;
    public form?: ThemeStyle;
    public img?: ThemeStyle;
    public success?: ThemeStyle;
    public danger?: ThemeStyle;
    public warning?: ThemeStyle;
    public info?: ThemeStyle;

    constructor(name: string, body: ThemeStyle, text: ThemeStyle) {
        this.name = name;
        this.body = body;
        this.text = text;
    }
}
