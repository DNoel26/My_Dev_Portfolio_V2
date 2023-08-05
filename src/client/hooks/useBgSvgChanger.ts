/** @format */

import { UserThemeContext } from '@@context/UserThemeContext';
import {
    handleBgSvgColorChangeDark,
    handleBgSvgColorChangeLight,
} from '@@lib/utils/client/img';
import { useContext } from 'react';
import useNextTheme from './useNextTheme';

const useBgSvgChanger = () => {
    const { userThemeState } = useContext(UserThemeContext);
    const { isDarkMode } = useNextTheme();
    const { isOriginalTheme } = userThemeState;
    const bgColorObj = {
        colorPrimary: userThemeState.colorPrimary,
        colorSecondary: userThemeState.colorSecondary,
    };
    let bgUrl = '';
    if (isDarkMode) {
        bgUrl = `url("${handleBgSvgColorChangeDark(bgColorObj)}")`;
    } else {
        bgUrl = `url("${handleBgSvgColorChangeLight(bgColorObj)}")`;
    }
    const bgStyleObj = bgUrl ? { backgroundImage: `${bgUrl} !important` } : {};

    return { bgUrl, bgStyleObj, isOriginalTheme };
};

export default useBgSvgChanger;
