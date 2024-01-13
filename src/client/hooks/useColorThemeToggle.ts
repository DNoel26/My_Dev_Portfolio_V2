/** @format */

import {  useUserThemeContext } from '@@context/UserThemeContext';
import { closeDrawer, toggleDrawer } from '@@lib/utils/client/handlers';

const useColorThemeToggle = () => {
    const { setIsOpenThemeEditor } = useUserThemeContext();

    return {
        handleToggle: toggleDrawer(setIsOpenThemeEditor),
        handleClose: closeDrawer(setIsOpenThemeEditor),
    };
};

export default useColorThemeToggle;
