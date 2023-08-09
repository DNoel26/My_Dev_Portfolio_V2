/** @format */

import { ACTION_USER_THEME } from '@@actions/userThemeActions';
import { UserThemeContext } from '@@context/UserThemeContext';
import { TDefaultProps } from '@@types/client/props.types';
import { useContext } from 'react';
import { IColor, ColorPicker as PaletteColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/css';

/* eslint-disable react/jsx-props-no-spreading */
interface IProps extends TDefaultProps {
    type: 'primary' | 'secondary';
}

const ColorPicker = (props: IProps) => {
    const { type, className } = props;
    const { userThemeState, userThemeDispatch } = useContext(UserThemeContext);
    const [color, setColor] = useColor(
        type === 'primary' ? userThemeState.colorPrimary : userThemeState.colorSecondary,
    );
    const handleColorChange = (_color: IColor) => {
        const action =
            type === 'primary'
                ? ACTION_USER_THEME.UPDATE_PRIMARY
                : ACTION_USER_THEME.UPDATE_SECONDARY;
        userThemeDispatch({ type: action, payload: _color.hex });
    };

    return (
        <div className={className}>
            <PaletteColorPicker
                hideAlpha
                height={50}
                color={color}
                onChange={(_color) => {
                    setColor(_color);
                    handleColorChange(_color);
                }}
            />
        </div>
    );
};

export default ColorPicker;
