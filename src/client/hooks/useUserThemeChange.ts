/** @format */

import { UserThemeContext } from '@@context/UserThemeContext';
import { NEXT_THEME } from '@@lib/constants';
import { useContext } from 'react';
import useNextTheme from './useNextTheme';

const useUserThemeChange = () => {
    const { setTheme, isDarkMode } = useNextTheme();
    const { state } = useContext(UserThemeContext);

    const handleChangeTheme = () => {
        if (state.isOriginalTheme && isDarkMode) {
            setTheme(NEXT_THEME.LIGHT);
        } else if (state.isOriginalTheme && !isDarkMode && isDarkMode !== null) {
            setTheme(NEXT_THEME.DARK);
        } else if (!state.isOriginalTheme && isDarkMode) {
            setTheme(NEXT_THEME.USER_LIGHT);
        } else if (!state.isOriginalTheme && !isDarkMode && isDarkMode !== null) {
            setTheme(NEXT_THEME.USER_DARK);
        }
    };

    return handleChangeTheme;
};
export default useUserThemeChange;
