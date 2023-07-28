/** @format */

import { DEFAULT_THEME, darkTheme } from '@@theme/dark';
import { lightTheme } from '@@theme/light';
import { TDefaultPropsWithChildren } from '@@types/client/props.types';
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const appTheme = {
    light: lightTheme,
    dark: darkTheme,
} as const;

const MuiThemeProvider = ({ children }: TDefaultPropsWithChildren) => {
    const { resolvedTheme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState(appTheme[DEFAULT_THEME]);
    useEffect(() => {
        if (resolvedTheme === 'light' || resolvedTheme === 'dark') {
            setCurrentTheme(appTheme[resolvedTheme]);
        }
    }, [resolvedTheme]);

    return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
