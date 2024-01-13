/** @format */

import { ACTION_USER_THEME } from '@@actions/userThemeActions';
import { MuiSpeedDial, MuiSpeedDialAction, MuiSpeedDialIcon } from '@@client';
import {
    MuiFormatColorResetOutlinedIcon,
    MuiMergeOutlinedIcon,
    MuiPaletteOutlinedIcon,
    MuiSwapHorizontalCircleOutlinedIcon,
} from '@@components/icons';
import ThemeIcon from '@@components/ui/ThemeIcon';
import {  useUserThemeContext } from '@@context/UserThemeContext';
import useNextTheme from '@@hooks/useNextTheme';
import useUserThemeChange from '@@hooks/useUserThemeChange';
import {  useMemo, useState } from 'react';
import styles from './SpeedDial.module.scss';

const SpeedDial = () => {
    const {
        userThemeDispatch,
        setIsOpenThemeEditor,
        canMatchColors,
        canSwapColors,
        canResetColors,
    } = useUserThemeContext();
    const handleChangeTheme = useUserThemeChange();
    const { tooltipText } = useNextTheme();
    const [isOpen, setIsOpen] = useState(false);

    const actions = useMemo(
        () => [
            {
                icon: <ThemeIcon />,
                name: tooltipText,
                handleAction: handleChangeTheme,
            },
            {
                icon: <MuiPaletteOutlinedIcon />,
                name: 'Change Colors',
                handleAction: () => setIsOpenThemeEditor((prev) => !prev),
            },
            {
                icon: canSwapColors ? <MuiSwapHorizontalCircleOutlinedIcon /> : null,
                name: 'Swap Colors',
                handleAction: () =>
                    userThemeDispatch({
                        type: ACTION_USER_THEME.SWAP,
                    }),
            },
            {
                icon: canMatchColors ? <MuiMergeOutlinedIcon /> : null,
                name: 'Match Colors',
                handleAction: () =>
                    userThemeDispatch({
                        type: ACTION_USER_THEME.MATCH,
                    }),
            },
            {
                icon: canResetColors ? <MuiFormatColorResetOutlinedIcon /> : null,
                name: 'Reset Colors',
                handleAction: () =>
                    userThemeDispatch({
                        type: ACTION_USER_THEME.RESET,
                    }),
            },
        ],
        [
            tooltipText,
            userThemeDispatch,
            handleChangeTheme,
            setIsOpenThemeEditor,
            canMatchColors,
            canResetColors,
            canSwapColors,
        ],
    );

    return (
        <div>
            <MuiSpeedDial
                className={styles.speed_dial}
                ariaLabel='SpeedDial basic example'
                sx={{ position: 'fixed', bottom: 80, right: 6 }}
                icon={<MuiSpeedDialIcon />}
                direction='left'
                onClick={() => setIsOpen((prev) => !prev)}
                open={isOpen}
            >
                {actions.map((action) => {
                    if (!action.icon) return null;

                    return (
                        <MuiSpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            tooltipPlacement='bottom'
                            onClick={() =>
                                action.handleAction ? action.handleAction() : null
                            }
                        />
                    );
                })}
            </MuiSpeedDial>
        </div>
    );
};

export default SpeedDial;
