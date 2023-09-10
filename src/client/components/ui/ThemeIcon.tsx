/** @format */

import {
    MuiIconModeNightOutlinedIcon,
    MuiIconWbSunnyOutlinedIcon,
    MuiPendingOutlinedIcon,
} from '@@components/icons';
import useNextTheme from '@@hooks/useNextTheme';

const ThemeIcon = () => {
    const { isDarkMode, isThemeResolved } = useNextTheme();
    if (!isThemeResolved) return <MuiPendingOutlinedIcon />;
    if (isDarkMode) return <MuiIconWbSunnyOutlinedIcon />;
    return <MuiIconModeNightOutlinedIcon />;
};

export default ThemeIcon;
