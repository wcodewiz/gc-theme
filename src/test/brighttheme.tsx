import { Theme } from '../clazzes/theme';

export class BrightTheme extends Theme {
    constructor() {
        super('light', { backgroundColor: 'white', color: 'black' }, { backgroundColor: 'white', color: 'black' });
    }
}
