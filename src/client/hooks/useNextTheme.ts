/** @format */

import { NEXT_THEME } from '@@lib/constants';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type TAppTheme = typeof NEXT_THEME.DARK | typeof NEXT_THEME.LIGHT;

const useNextTheme = () => {
    const themeHandler = useTheme();
    const { resolvedTheme, setTheme } = themeHandler;
    const [isDarkMode, setIsDarkMode] = useState<null | boolean>(null);
    const [nextTheme, setNextTheme] = useState<null | TAppTheme>(null);
    const [isThemeResolved, setIsThemeResolved] = useState(false);
    useEffect(() => {
        if (resolvedTheme) {
            if (
                resolvedTheme === NEXT_THEME.DARK ||
                resolvedTheme === NEXT_THEME.USER_DARK
            ) {
                setIsDarkMode(true);
                setNextTheme(NEXT_THEME.LIGHT);
            } else if (
                resolvedTheme === NEXT_THEME.LIGHT ||
                resolvedTheme === NEXT_THEME.USER_LIGHT
            ) {
                setIsDarkMode(false);
                setNextTheme(NEXT_THEME.DARK);
            }
            setIsThemeResolved(true);
        }
    }, [resolvedTheme]);

    const toggleTheme = () => !!nextTheme && setTheme(nextTheme);

    return {
        isDarkMode,
        nextTheme,
        resolvedTheme,
        isThemeResolved,
        toggleTheme,
        setTheme,
    };
};

export default useNextTheme;
