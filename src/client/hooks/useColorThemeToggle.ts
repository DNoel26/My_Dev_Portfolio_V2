/** @format */

import { UserThemeContext } from '@@context/UserThemeContext';
import { Dispatch, SetStateAction, useContext } from 'react';

const toggleDrawer =
    (setOpen: Dispatch<SetStateAction<boolean>>) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setOpen((prev) => !prev);
    };

const useColorThemeToggle = () => {
    const { setIsOpenThemeEditor } = useContext(UserThemeContext);

    return { handleToggle: toggleDrawer(setIsOpenThemeEditor) };
};

export default useColorThemeToggle;
