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
