/** @format */

import { UserThemeContext } from '@@context/UserThemeContext';
import { Dispatch, SetStateAction, useContext } from 'react';

const handleMouseEvent =
    (state: SetStateAction<boolean>) =>
    (setState: Dispatch<SetStateAction<boolean>>) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState(state);
    };

const toggleDrawer = handleMouseEvent((prev) => !prev);

const closeDrawer = handleMouseEvent(false);

const useColorThemeToggle = () => {
    const { setIsOpenThemeEditor } = useContext(UserThemeContext);

    return {
        handleToggle: toggleDrawer(setIsOpenThemeEditor),
        handleClose: closeDrawer(setIsOpenThemeEditor),
    };
};

export default useColorThemeToggle;
