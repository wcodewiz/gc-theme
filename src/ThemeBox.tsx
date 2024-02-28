//@ts-ignore
import React, { FunctionComponent, ReactNode, useState, createContext, useEffect } from 'react';
import { Theme } from './clazzes/theme';
import { ThemeManager } from './clazzes/thememanager';

interface ThemeBoxProps {
    children: ReactNode;
    themes: Theme[];
    current: string;
}
const manager = ThemeManager.init();
export const ThemeState = createContext<Theme | null>(null);
export const ThemeNameState = createContext<string | null>(null);

const ThemeBox: FunctionComponent<ThemeBoxProps> = ({ ...props }) => {
    const name = localStorage.getItem('theme');
    const [theme, setTheme] = useState<Theme | null>(null);
    const [themeName, setThemeName] = useState(name ?? props.current);

    //@ts-ignore
    useEffect(() => {
        localStorage.setItem('theme', themeName);
        props.themes.forEach((e) => manager.addTheme(e));
        manager.setTheme(themeName);
        setTheme(manager.current());
    }, [themeName]);

    //@ts-ignore
    return (
        <>
            {/* @ts-ignore */}
            <ThemeNameState.Provider value={{ themeName, setThemeName }}>
                {/* @ts-ignore */}
                <ThemeState.Provider value={{ theme, setTheme }}>{props.children}</ThemeState.Provider>
            </ThemeNameState.Provider>
        </>
    );
};

export default ThemeBox;
