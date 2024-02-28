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
