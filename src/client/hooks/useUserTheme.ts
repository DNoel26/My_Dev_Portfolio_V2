/** @format */

import { CSS_VARIABLE, NEXT_THEME } from '@@lib/constants';
import { userThemeInitialState, userThemeReducer } from '@@reducers/userThemeReducer';
import { useEffect, useReducer } from 'react';
import useNextTheme from './useNextTheme';
import useWindowCheck from './useWindowCheck';

const useUserTheme = () => {
    const root = useWindowCheck({
        handleEffect: () => document.querySelector(':root'),
    });
    const [state, dispatch] = useReducer(userThemeReducer, userThemeInitialState);
    const { setTheme, isDarkMode } = useNextTheme();

    useEffect(() => {
        if (state.isOriginalTheme && isDarkMode) {
            setTheme(NEXT_THEME.DARK);
        } else if (state.isOriginalTheme && !isDarkMode && isDarkMode !== null) {
            setTheme(NEXT_THEME.LIGHT);
        } else if (!state.isOriginalTheme && isDarkMode) {
            setTheme(NEXT_THEME.USER_DARK);
        } else if (!state.isOriginalTheme && !isDarkMode && isDarkMode !== null) {
            setTheme(NEXT_THEME.USER_LIGHT);
        }
    }, [state, isDarkMode, setTheme]);
    useEffect(() => {
        document.documentElement.style.setProperty(
            CSS_VARIABLE.COLOR_PRIMARY,
            state.colorPrimary,
        );
        document.documentElement.style.setProperty(
            CSS_VARIABLE.COLOR_SECONDARY,
            state.colorSecondary,
        );
    }, [state]);

    return { state, dispatch, root };
};

export default useUserTheme;
