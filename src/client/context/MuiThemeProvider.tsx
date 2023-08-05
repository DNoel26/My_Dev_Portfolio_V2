/** @format */

import { NEXT_THEME } from '@@lib/constants';
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
    const [muiTheme, setMuiTheme] = useState(appTheme[DEFAULT_THEME]);
    useEffect(() => {
        if (resolvedTheme === NEXT_THEME.LIGHT || resolvedTheme === NEXT_THEME.DARK) {
            setMuiTheme(appTheme[resolvedTheme]);
        }
        if (resolvedTheme === NEXT_THEME.USER_LIGHT) {
            setMuiTheme(appTheme.light);
        }
        if (resolvedTheme === NEXT_THEME.USER_DARK) {
            setMuiTheme(appTheme.dark);
        }
    }, [resolvedTheme]);

    return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
