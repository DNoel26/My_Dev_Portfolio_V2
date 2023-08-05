/** @format */

import { MuiIconButton, MuiTooltip, MuiZoom } from '@@client';
import {
    MuiIconModeNight,
    MuiIconModeNightOutlined,
    MuiIconWbSunny,
    MuiIconWbSunnyOutlined,
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

const TOOLTIP_DELAY_IN_MS = 500;

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
            <MuiIconButton
                className={clsx(
                    styles.toggle__btn,
                    isActive
                        ? styles['toggle__btn--disabled']
                        : styles['toggle__btn--enabled'],
                )}
                disabled={isActive || isActive === null}
                onClick={handleChangeTheme}
            >
                {children}
            </MuiIconButton>
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
            )}
        >
            <ThemeIconBtn isActive={!isDarkMode} showInactiveIcon={showInactiveIcon}>
                {!isDarkMode ? <MuiIconWbSunny /> : <MuiIconWbSunnyOutlined />}
            </ThemeIconBtn>
            <ThemeIconBtn isActive={isDarkMode} showInactiveIcon={showInactiveIcon}>
                {isDarkMode ? <MuiIconModeNight /> : <MuiIconModeNightOutlined />}
            </ThemeIconBtn>
        </div>
    );
};

export default ThemeToggle;
