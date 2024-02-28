# gc-theme

a react global theme manager **note** follow the proceedings

**DarkTheme.tsx**

```
import { Theme } from '../clazzes/theme';

export class DarkTheme extends Theme {
    constructor() {
        super('dark', { backgroundColor: 'red', color: 'white' }, { backgroundColor: 'blue', color: 'white' });
    }
}

```

**LightTheme.tsx**

```
import { Theme } from '../clazzes/theme';

export class BrightTheme extends Theme {
    constructor() {
        super('light', { backgroundColor: 'white', color: 'black' }, { backgroundColor: 'white', color: 'black' });
    }
}

```

**index.tsx**

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkTheme } from '../test/darktheme';
import ThemeBox from '../ThemeBox';
import { BrightTheme } from '../test/brighttheme';

const themes = [new DarkTheme(), new BrightTheme()];

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/* @ts-ignore */}
        <ThemeBox themes={themes} current="dark">
            <App />
        </ThemeBox>
    </React.StrictMode>
);

```

**App.tsx**

```
/* @ts-ignore */
import React, { FunctionComponent, useContext, useEffect } from 'react';
import { ThemeNameState, ThemeState } from '../ThemeBox';
import { Theme } from '../clazzes/theme';

const App = () => {
    //@ts-ignore
    const { theme } = useContext(ThemeState);
    //@ts-ignore
    const { setThemeName } = useContext(ThemeNameState);

    return (
        <>
            {/* @ts-ignore */}
            <div onClick={() => setThemeName('light')}>Hello Light {(theme as Theme)?.body.backgroundColor}</div>
            {/* @ts-ignore */}
            <div onClick={() => setThemeName('dark')}>Hello Dark {(theme as Theme)?.body.backgroundColor}</div>
        </>
    );
};

export default App;

```

## Arthur

**Samuel Clinton**
