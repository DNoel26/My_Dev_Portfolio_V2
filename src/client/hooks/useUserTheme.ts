/** @format */

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
        // if (state.isOriginalTheme && isDarkMode) {
        //     setTheme(NEXT_THEME.DARK);
        // } else if (state.isOriginalTheme && !isDarkMode && isDarkMode !== null) {
        //     setTheme(NEXT_THEME.LIGHT);
        // } else if (!state.isOriginalTheme && isDarkMode) {
        //     setTheme(NEXT_THEME.USER_DARK);
        // } else if (!state.isOriginalTheme && !isDarkMode && isDarkMode !== null) {
        //     setTheme(NEXT_THEME.USER_LIGHT);
        // }
        console.log(state, isDarkMode, 'useUserTheme');
    }, [state, isDarkMode, setTheme]);

    return { state, dispatch, root };
};

export default useUserTheme;
