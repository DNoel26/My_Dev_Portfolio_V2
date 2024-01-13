/** @format */

import {  useUserThemeContext } from '@@context/UserThemeContext';
import { NEXT_THEME } from '@@lib/constants';
import useNextTheme from './useNextTheme';

const useUserThemeChange = () => {
    const { setTheme, isDarkMode } = useNextTheme();
    const { userThemeState } = useUserThemeContext();

    const handleChangeTheme = () => {
        if (userThemeState.isOriginalTheme && isDarkMode) {
            setTheme(NEXT_THEME.LIGHT);
        } else if (userThemeState.isOriginalTheme && !isDarkMode && isDarkMode !== null) {
            setTheme(NEXT_THEME.DARK);
        } else if (!userThemeState.isOriginalTheme && isDarkMode) {
            setTheme(NEXT_THEME.USER_LIGHT);
        } else if (
            !userThemeState.isOriginalTheme &&
            !isDarkMode &&
            isDarkMode !== null
        ) {
            setTheme(NEXT_THEME.USER_DARK);
        }
    };

    return handleChangeTheme;
};
export default useUserThemeChange;
