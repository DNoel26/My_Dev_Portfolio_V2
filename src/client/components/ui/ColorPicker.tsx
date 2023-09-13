/** @format */

import { ACTION_USER_THEME } from '@@actions/userThemeActions';
import { UserThemeContext } from '@@context/UserThemeContext';
import { ERROR_MSG } from '@@lib/constants';
import { SATURATION_LEVEL_MIN } from '@@lib/constants/app';
import { TDefaultProps } from '@@types/client/props.types';
import clsx from 'clsx';
import { useContext, useEffect, useState } from 'react';
import {
    ColorService,
    IColor,
    ColorPicker as PaletteColorPicker,
    useColor,
} from 'react-color-palette';
import 'react-color-palette/css';

import styles from './ColorPicker.module.scss';

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
    const [errMsg, setErrMsg] = useState('');
    useEffect(() => {
        if (type === 'primary') {
            if (color.hsv.s <= SATURATION_LEVEL_MIN) {
                setErrMsg(ERROR_MSG.COLOR_MIN_PRIMARY);
            } else {
                setErrMsg('');
            }
        }
        if (type === 'secondary') {
            if (color.hsv.s < SATURATION_LEVEL_MIN) {
                setErrMsg(ERROR_MSG.COLOR_MIN_SECONDARY);
            } else {
                setErrMsg('');
            }
        }
    }, [type, color]);

    const handleColorChange = (_color: IColor) => {
        const action =
            type === 'primary'
                ? ACTION_USER_THEME.UPDATE_PRIMARY
                : ACTION_USER_THEME.UPDATE_SECONDARY;
        userThemeDispatch({ type: action, payload: _color.hex });
    };

    return (
        <div className={clsx(styles.color_picker, className)}>
            <PaletteColorPicker
                hideAlpha
                height={50}
                color={color}
                onChange={(_color) => {
                    if (type === 'primary' && _color.hsv.s < SATURATION_LEVEL_MIN) {
                        const validatedColor = ColorService.convert('hsv', {
                            ..._color.hsv,
                            s: SATURATION_LEVEL_MIN,
                        });
                        setColor(validatedColor);
                        handleColorChange(validatedColor);
                        return;
                    }
                    setColor(_color);
                    handleColorChange(_color);
                }}
            />
            {/* use &nbsp; to allow element to take space with no error message */}
            <p className={styles.color_picker__error}>{errMsg}&nbsp;</p>
        </div>
    );
};

export default ColorPicker;
