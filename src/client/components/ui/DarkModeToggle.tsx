/** @format */

import { MuiIconButton, MuiTooltip, MuiZoom } from '@@client';
import { MuiIconNightlightRound, MuiIconWbSunny } from '@@components/icons';
import useNextTheme from '@@hooks/useNextTheme';
import { TDefaultPropsWithChildren } from '@@types/client/props.types';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import styles from './DarkModeToggle.module.scss';

interface IProps {
    isActive: boolean | null;
}

const msTooltipDelay = 100;

const DarkModeIconBtn = (props: TDefaultPropsWithChildren<IProps>) => {
    const { children, isActive } = props;
    const { nextTheme, toggleTheme } = useNextTheme();

    return (
        <MuiTooltip
            title={!isActive && `Switch to ${nextTheme} mode`}
            TransitionComponent={MuiZoom}
            enterDelay={msTooltipDelay}
            enterNextDelay={msTooltipDelay}
        >
            <MuiIconButton
                className={clsx(
                    styles.toggle__btn,
                    isActive
                        ? styles['toggle__btn--disabled']
                        : styles['toggle__btn--enabled'],
                )}
                disabled={isActive || isActive === null}
                onClick={() => toggleTheme()}
            >
                {children}
            </MuiIconButton>
        </MuiTooltip>
    );
};

const DarkModeToggle = () => {
    const { isDarkMode } = useNextTheme();
    const [isReady, setIsReady] = useState(false);
    useEffect(() => {
        if (isDarkMode !== null) {
            setIsReady(true);
        }
    }, [isDarkMode]);

    return (
        <div className={clsx(styles.toggle, isReady && styles['toggle--ready'])}>
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
