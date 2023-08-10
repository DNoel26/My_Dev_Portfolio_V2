/** @format */

import { ACTION_USER_THEME } from '@@actions/userThemeActions';
import { MuiDrawer } from '@@client';
import { UserThemeContext } from '@@context/UserThemeContext';
import useColorThemeToggle from '@@hooks/useColorThemeToggle';
import { useContext } from 'react';
import styles from './ColorThemeDrawer.module.scss';
import BodyContainer from './layouts/BodyContainer';
import Button from './ui/Button';
import ColorPicker from './ui/ColorPicker';

const ColorThemeDrawer = () => {
    const { isOpenThemeEditor, userThemeDispatch } = useContext(UserThemeContext);
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
                    <Button
                        onClick={() =>
                            userThemeDispatch({ type: ACTION_USER_THEME.RESET })
                        }
                    >
                        Reset Colors
                    </Button>
                </div>
                <div className={styles.drawer__item}>
                    <h4>Secondary</h4>
                    <ColorPicker
                        className={styles.drawer__color_picker}
                        type='secondary'
                    />
                    <Button
                        onClick={() =>
                            userThemeDispatch({ type: ACTION_USER_THEME.SWAP })
                        }
                    >
                        Swap Colors
                    </Button>
                </div>
            </BodyContainer>
        </MuiDrawer>
    );
};

export default ColorThemeDrawer;
