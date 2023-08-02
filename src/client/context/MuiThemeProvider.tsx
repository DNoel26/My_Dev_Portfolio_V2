/** @format */

import { DEFAULT_THEME, darkTheme, lightTheme } from '@@theme';
import { TDefaultPropsWithChildren } from '@@types/client/props.types';
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const appTheme = {
    light: lightTheme,
    dark: darkTheme,
} as const;

// TODO: create theme dynamically with state and update primary / secondary based
// on root style changes
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
