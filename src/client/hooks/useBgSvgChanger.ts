/** @format */

import { UserThemeContext } from '@@context/UserThemeContext';
import { CSS_VARIABLE } from '@@lib/constants';
import {
    handleBgSvgColorChangeDark,
    handleBgSvgColorChangeLight,
} from '@@lib/utils/client/img';
import { useContext, useEffect, useMemo } from 'react';

const useBgSvgChanger = () => {
    const { userThemeState } = useContext(UserThemeContext);
    const bgColorObj = useMemo(
        () => ({
            colorPrimary: userThemeState.colorPrimary,
            colorSecondary: userThemeState.colorSecondary,
        }),
        [userThemeState],
    );
    const bgUrlDark = `url("${handleBgSvgColorChangeDark(bgColorObj)}")`;
    const bgUrlLight = `url("${handleBgSvgColorChangeLight(bgColorObj)}")`;
    useEffect(() => {
        document.documentElement.style.setProperty(CSS_VARIABLE.BG_IMG_DARK, bgUrlDark);
        document.documentElement.style.setProperty(CSS_VARIABLE.BG_IMG_LIGHT, bgUrlLight);
    }, [bgUrlDark, bgUrlLight]);
};

export default useBgSvgChanger;
