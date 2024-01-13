/** @format */

import useBgSvgChanger from '@@hooks/useBgSvgChanger';
import { NEXT_THEME } from '@@lib/constants';
import { DEFAULT_THEME } from '@@theme';
import { TDefaultPropsWithChildren } from '@@types/client/props.types';
import { PaletteMode } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useTheme } from 'next-themes';
import {  useEffect, useMemo, useState } from 'react';
import {  useUserThemeContext } from './UserThemeContext';

// TODO: create theme dynamically with state and update primary / secondary based
// on root style changes
const MuiThemeProvider = ({ children }: TDefaultPropsWithChildren) => {
    const { resolvedTheme } = useTheme();
    const { userThemeState } = useUserThemeContext();
    const [mode, setMode] = useState<PaletteMode>(DEFAULT_THEME);
    const muiTheme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: userThemeState.colorPrimary,
                    },
                    secondary: {
                        main: userThemeState.colorSecondary,
                    },
                },
                typography: { fontFamily: 'inherit' },
            }),
        [mode, userThemeState],
    );
    useEffect(() => {
        if (resolvedTheme === NEXT_THEME.LIGHT || resolvedTheme === NEXT_THEME.DARK) {
            setMode(resolvedTheme);
        }
        if (resolvedTheme === NEXT_THEME.USER_LIGHT) {
            setMode('light');
        }
        if (resolvedTheme === NEXT_THEME.USER_DARK) {
            setMode('dark');
        }
    }, [resolvedTheme]);
    // can be called in any context provider below UserThemeContext
    // to set the css bg variables (for smoother rendering)
    useBgSvgChanger();

    return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
