/** @format */

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type TAppTheme = 'dark' | 'light';

const useNextTheme = () => {
    const themeHandler = useTheme();
    const { resolvedTheme, setTheme } = themeHandler;
    const [isDarkMode, setIsDarkMode] = useState<null | boolean>(null);
    const [nextTheme, setNextTheme] = useState<null | TAppTheme>(null);
    useEffect(() => {
        if (resolvedTheme) {
            if (resolvedTheme === 'dark') {
                setIsDarkMode(true);
                setNextTheme('light');
            } else if (resolvedTheme === 'light') {
                setIsDarkMode(false);
                setNextTheme('dark');
            }
        }
    }, [resolvedTheme]);
    const toggleTheme = () => !!nextTheme && setTheme(nextTheme);

    return { isDarkMode, nextTheme, resolvedTheme, toggleTheme };
};

export default useNextTheme;
