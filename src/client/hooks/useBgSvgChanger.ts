/** @format */

import { UserThemeContext } from '@@context/UserThemeContext';
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
        document.documentElement.style.setProperty('--bg-img-dark', bgUrlDark);
        document.documentElement.style.setProperty('--bg-img-light', bgUrlLight);
    }, [bgUrlDark, bgUrlLight]);
};

export default useBgSvgChanger;
