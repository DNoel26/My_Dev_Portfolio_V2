/** @format */

import { MuiIconButton, MuiTooltip, MuiZoom } from '@@client';
import { MuiIconNightlightRound, MuiIconWbSunny } from '@@components/icons';
import useNextTheme from '@@hooks/useNextTheme';
import { TDefaultPropsWithChildren } from '@@types/client/props.types';
import clsx from 'clsx';
import styles from './DarkModeToggle.module.scss';

interface IProps {
    isActive: boolean;
}

const DarkModeIconBtn = (props: TDefaultPropsWithChildren<IProps>) => {
    const { children, isActive } = props;
    const { nextTheme, toggleTheme } = useNextTheme();
    const msTooltipDelay = 100;

    return (
        <MuiTooltip
            title={!isActive && `Switch to ${nextTheme} mode`}
            TransitionComponent={MuiZoom}
            enterDelay={msTooltipDelay}
            enterNextDelay={msTooltipDelay}
        >
            <MuiIconButton
                className={clsx(
                    styles.btn,
                    isActive ? styles['btn--disabled'] : styles['btn--enabled'],
                )}
                disabled={isActive}
                onClick={() => toggleTheme()}
            >
                {children}
            </MuiIconButton>
        </MuiTooltip>
    );
};

const DarkModeToggle = () => {
    const { isDarkMode } = useNextTheme();

    if (isDarkMode === null) return null;

    return (
        <div className={styles.btn__wrapper}>
            <DarkModeIconBtn isActive={!isDarkMode}>
                <MuiIconWbSunny />
            </DarkModeIconBtn>
            <DarkModeIconBtn isActive={isDarkMode}>
                <MuiIconNightlightRound />
            </DarkModeIconBtn>
        </div>
    );
};

export default DarkModeToggle;
