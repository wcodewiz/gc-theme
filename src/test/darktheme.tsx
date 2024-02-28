import { Theme } from '../clazzes/theme';

export class DarkTheme extends Theme {
    constructor() {
        super('dark', { backgroundColor: 'red', color: 'white' }, { backgroundColor: 'blue', color: 'white' });
    }
}
