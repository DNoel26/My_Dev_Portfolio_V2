/** @format */

import { ACTION_USER_THEME } from '@@actions/userThemeActions';
import { MuiDrawer } from '@@client';
import { useUserThemeContext } from '@@context/UserThemeContext';
import useColorThemeToggle from '@@hooks/useColorThemeToggle';
import useUserThemeChange from '@@hooks/useUserThemeChange';
import BodyContainer from './layouts/BodyContainer';
import Button from './ui/Button';
import CloseButton from './ui/CloseButton';
import ColorPicker from './ui/ColorPicker';

import styles from './ColorThemeDrawer.module.scss';

const ColorThemeDrawer = () => {
    const {
        isOpenThemeEditor,
        userThemeDispatch,
        canResetColors,
        canMatchColors,
        canSwapColors,
    } = useUserThemeContext();
    const handleChangeTheme = useUserThemeChange();
    const { handleClose } = useColorThemeToggle();

    return (
        <MuiDrawer
            className={styles.drawer}
            anchor='bottom'
            open={isOpenThemeEditor}
            onClose={handleClose}
        >
            <BodyContainer className={styles.drawer__container}>
                <CloseButton onClick={handleClose} />
                <div className={styles.drawer__item}>
                    <h4>Primary</h4>
                    <ColorPicker className={styles.drawer__color_picker} type='primary' />
                    <div className={styles.drawer__btn_container}>
                        <Button onClick={handleChangeTheme}>Switch Theme</Button>
                        <Button
                            onClick={() =>
                                userThemeDispatch({ type: ACTION_USER_THEME.SWAP })
                            }
                            disabled={!canSwapColors}
                        >
                            Swap Colors
                        </Button>
                    </div>
                </div>
                <div className={styles.drawer__item}>
                    <h4>Secondary</h4>
                    <ColorPicker
                        className={styles.drawer__color_picker}
                        type='secondary'
                    />
                    <div className={styles.drawer__btn_container}>
                        <Button
                            onClick={() =>
                                userThemeDispatch({ type: ACTION_USER_THEME.RESET })
                            }
                            disabled={!canResetColors}
                        >
                            Reset Colors
                        </Button>
                        <Button
                            onClick={() =>
                                userThemeDispatch({ type: ACTION_USER_THEME.MATCH })
                            }
                            disabled={!canMatchColors}
                        >
                            Match Colors
                        </Button>
                    </div>
                </div>
            </BodyContainer>
        </MuiDrawer>
    );
};

export default ColorThemeDrawer;
