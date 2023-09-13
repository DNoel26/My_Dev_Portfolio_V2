/** @format */

import { MuiButton, MuiButtonProps } from '@@client';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { Replace } from 'type-fest';

import styles from './Button.module.scss';

/* eslint-disable react/jsx-props-no-spreading */
type ClassNameVariant = Extract<
    keyof typeof styles,
    'btn--default' | 'btn--outlined' | 'btn--text'
>;
interface CustomProps {
    customIcon?: ReactNode;
    customVariant?: Replace<ClassNameVariant, 'btn--', ''>;
}
type Props = CustomProps & MuiButtonProps;

const Button = (props: Props) => {
    const {
        customIcon,
        children,
        customVariant = 'default',
        className,
        ...restProps
    } = props;

    return (
        <MuiButton
            className={clsx(styles.btn, styles[`btn--${customVariant}`], className)}
            startIcon={customIcon}
            {...restProps}
        >
            {children}
        </MuiButton>
    );
};

export default Button;
