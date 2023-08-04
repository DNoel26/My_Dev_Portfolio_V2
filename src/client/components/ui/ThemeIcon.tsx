/** @format */

import {
    MuiIconModeNightOutlined,
    MuiIconWbSunnyOutlined,
    MuiPendingOutlinedIcon,
} from '@@components/icons';
import useNextTheme from '@@hooks/useNextTheme';

const ThemeIcon = () => {
    const { isDarkMode, isThemeResolved } = useNextTheme();
    if (!isThemeResolved) return <MuiPendingOutlinedIcon />;
    if (isDarkMode) return <MuiIconWbSunnyOutlined />;
    return <MuiIconModeNightOutlined />;
};

export default ThemeIcon;
