/** @format */

import { MuiIconButton } from '@@client';
import useColorThemeToggle from '@@hooks/useColorThemeToggle';
import { MuiPaletteOutlinedIcon } from './icons';

const ColorThemeToggle = () => {
    const { handleToggle } = useColorThemeToggle();

    return (
        <MuiIconButton aria-label='Change Colors' onClick={handleToggle}>
            <MuiPaletteOutlinedIcon />
        </MuiIconButton>
    );
};

export default ColorThemeToggle;
