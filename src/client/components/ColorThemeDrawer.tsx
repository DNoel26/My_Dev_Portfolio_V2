/** @format */

import { MuiDrawer } from '@@client';
import { UserThemeContext } from '@@context/UserThemeContext';
import useColorThemeToggle from '@@hooks/useColorThemeToggle';
import { useContext } from 'react';
import styles from './ColorThemeDrawer.module.scss';
import BodyContainer from './layouts/BodyContainer';
import ColorPicker from './ui/ColorPicker';

const ColorThemeDrawer = () => {
    const { isOpenThemeEditor } = useContext(UserThemeContext);
    const { handleToggle } = useColorThemeToggle();

    return (
        <MuiDrawer
            className={styles.drawer}
            anchor='bottom'
            open={isOpenThemeEditor}
            onClose={handleToggle}
        >
            <BodyContainer className={styles.drawer__container}>
                <div className={styles.drawer__item}>
                    <h4>Primary</h4>
                    <ColorPicker className={styles.drawer__color_picker} type='primary' />
                </div>
                <div className={styles.drawer__item}>
                    <h4>Secondary</h4>
                    <ColorPicker
                        className={styles.drawer__color_picker}
                        type='secondary'
                    />
                </div>
            </BodyContainer>
        </MuiDrawer>
    );
};

export default ColorThemeDrawer;
