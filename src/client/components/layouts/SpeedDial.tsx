/** @format */

import { MuiSpeedDial, MuiSpeedDialAction, MuiSpeedDialIcon } from '@@client';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import styles from './SpeedDial.module.scss';

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
];

const SpeedDial = () => {
    return (
        <div>
            <MuiSpeedDial
                className={styles.speed_dial}
                ariaLabel='SpeedDial basic example'
                sx={{ position: 'fixed', bottom: 80, right: 6 }}
                icon={<MuiSpeedDialIcon />}
                direction='left'
            >
                {actions.map((action) => (
                    <MuiSpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </MuiSpeedDial>
        </div>
    );
};

export default SpeedDial;
