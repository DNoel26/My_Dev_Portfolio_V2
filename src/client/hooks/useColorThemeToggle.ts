/** @format */

import { UserThemeContext } from '@@context/UserThemeContext';
import { closeDrawer, toggleDrawer } from '@@lib/utils/client/handlers';
import { useContext } from 'react';

const useColorThemeToggle = () => {
    const { setIsOpenThemeEditor } = useContext(UserThemeContext);

    return {
        handleToggle: toggleDrawer(setIsOpenThemeEditor),
        handleClose: closeDrawer(setIsOpenThemeEditor),
    };
};

export default useColorThemeToggle;
