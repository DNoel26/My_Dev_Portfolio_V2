/** @format */

import { MuiSpeedDial, MuiSpeedDialAction, MuiSpeedDialIcon } from '@@client';
import ThemeIcon from '@@components/ui/ThemeIcon';
import { UserThemeContext } from '@@context/UserThemeContext';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import { useContext, useState } from 'react';
import styles from './SpeedDial.module.scss';

const actions = [
    { icon: <ThemeIcon />, name: 'Switch theme' },
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
];

const SpeedDial = () => {
    const { state: userThemeState, dispatch: userThemeDispatch } =
        useContext(UserThemeContext);
    const [isOpen, setIsOpen] = useState(false);

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
                {actions.map((action) => (
                    <MuiSpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        tooltipPlacement='bottom'
                        onClick={() => {
                            if (action.name === 'Copy') {
                                userThemeDispatch({
                                    type: 'RESET',
                                });
                            }
                            if (action.name === 'Save') {
                                userThemeDispatch({
                                    type: 'UPDATE_ALL',
                                    payload: {
                                        ...userThemeState,
                                        colorPrimary: 'red',
                                        colorSecondary: 'yellow',
                                    },
                                });
                            }

                            return null;
                        }}
                    />
                ))}
            </MuiSpeedDial>
        </div>
    );
};

export default SpeedDial;
