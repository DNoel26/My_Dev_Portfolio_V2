/** @format */

import { UserThemeContext } from '@@context/UserThemeContext';
import { CSS_VARIABLE } from '@@lib/constants';
import {
    handleBgSvgColorChangeDark,
    handleBgSvgColorChangeLight,
} from '@@lib/utils/client/img';
import { cssExports } from '@@styles/exports';
import { useContext, useEffect, useMemo, useState } from 'react';
import useMediaQuery from './useMediaQuery';

const useBgSvgChanger = () => {
    const { userThemeState } = useContext(UserThemeContext);
    const matchesSmTabletToLaptop = useMediaQuery(
        `(min-width: ${cssExports['breakpoint-sm-tablet']}) and (max-width: ${cssExports['breakpoint-lg-laptop']})`,
    );
    const matchesSmMobileToSmTablet = useMediaQuery(
        `(min-width: ${cssExports['breakpoint-xxs-mobile']}) and (max-width: ${cssExports['breakpoint-sm-tablet']})`,
    );
    const bgColorObj = useMemo(
        () => ({
            colorPrimary: userThemeState.colorPrimary,
            colorSecondary: userThemeState.colorSecondary,
        }),
        [userThemeState],
    );
    const _bgUrlDark = `url("${handleBgSvgColorChangeDark(bgColorObj)}")`;
    const _bgUrlLight = `url("${handleBgSvgColorChangeLight(bgColorObj)}")`;
    const [bgUrlDark, setBgUrlDark] = useState(_bgUrlDark);
    const [bgUrlLight, setBgUrlLight] = useState(_bgUrlLight);
    useEffect(() => {
        let size;
        if (matchesSmTabletToLaptop) {
            size = { width: 1280, height: 720 };
        } else if (matchesSmMobileToSmTablet) {
            size = { width: 640, height: 480 };
        }
        setBgUrlDark(`url("${handleBgSvgColorChangeDark(bgColorObj, size)}")`);
        setBgUrlLight(`url("${handleBgSvgColorChangeLight(bgColorObj, size)}")`);
    }, [matchesSmTabletToLaptop, matchesSmMobileToSmTablet, bgColorObj]);
    useEffect(() => {
        document.documentElement.style.setProperty(CSS_VARIABLE.BG_IMG_DARK, bgUrlDark);
        document.documentElement.style.setProperty(CSS_VARIABLE.BG_IMG_LIGHT, bgUrlLight);
    }, [bgUrlDark, bgUrlLight]);
};

export default useBgSvgChanger;
