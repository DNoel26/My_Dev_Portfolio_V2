/** @format */

import { MuiIconButton, MuiTooltip, MuiZoom } from '@@client';
import {
    MuiIconModeNightIcon,
    MuiIconModeNightOutlinedIcon,
    MuiIconWbSunnyIcon,
    MuiIconWbSunnyOutlinedIcon,
} from '@@components/icons';
import useNextTheme from '@@hooks/useNextTheme';
import useUserThemeChange from '@@hooks/useUserThemeChange';
import { TDefaultPropsWithChildren } from '@@types/client/props.types';
import clsx from 'clsx';

import styles from './ThemeToggle.module.scss';

interface IProps {
    showInactiveIcon?: boolean;
}
interface IIconBtnProps extends IProps {
    isActive: boolean | null;
}

const TOOLTIP_DELAY_IN_MS = 300;

const ThemeIconBtn = (props: TDefaultPropsWithChildren<IIconBtnProps>) => {
    const { children, isActive, showInactiveIcon = true } = props;
    const handleChangeTheme = useUserThemeChange();
    const { tooltipText } = useNextTheme();

    if (isActive && !showInactiveIcon) {
        return null;
    }

    return (
        <MuiTooltip
            title={!isActive && tooltipText}
            TransitionComponent={MuiZoom}
            enterDelay={TOOLTIP_DELAY_IN_MS}
            enterNextDelay={TOOLTIP_DELAY_IN_MS}
        >
            <span>
                <MuiIconButton
                    className={clsx(
                        styles.toggle__btn,
                        isActive
                            ? styles['toggle__btn--disabled']
                            : styles['toggle__btn--enabled'],
                    )}
                    disabled={isActive || isActive === null}
                    // TODO: fix tab focusing twice on this element
                    tabIndex={isActive ? -1 : undefined}
                    onClick={handleChangeTheme}
                >
                    {children}
                </MuiIconButton>
            </span>
        </MuiTooltip>
    );
};

const ThemeToggle = ({ showInactiveIcon = true }: IProps) => {
    const { isDarkMode, isThemeResolved } = useNextTheme();

    return (
        <div
            className={clsx(
                styles.toggle,
                isThemeResolved && styles['toggle--theme-resolved'],
                !showInactiveIcon && styles['toggle--hide-inactive'],
            )}
        >
            <ThemeIconBtn isActive={!isDarkMode} showInactiveIcon={showInactiveIcon}>
                {!isDarkMode ? <MuiIconWbSunnyIcon /> : <MuiIconWbSunnyOutlinedIcon />}
            </ThemeIconBtn>
            <ThemeIconBtn isActive={isDarkMode} showInactiveIcon={showInactiveIcon}>
                {isDarkMode ? <MuiIconModeNightIcon /> : <MuiIconModeNightOutlinedIcon />}
            </ThemeIconBtn>
        </div>
    );
};

export default ThemeToggle;
