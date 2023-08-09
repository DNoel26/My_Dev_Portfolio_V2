/** @format */

import { MuiContainer, MuiContainerProps } from '@@client';
import { TDefaultPropsWithChildren } from '@@types/client/props.types';
import clsx from 'clsx';
import { ElementType } from 'react';
import styles from './BodyContainer.module.scss';

/* eslint-disable react/jsx-props-no-spreading */
// extends needed to set component prop without TS error
type TProps<Type extends ElementType> = MuiContainerProps<Type, { component?: Type }>;

const BodyContainer = <Type extends ElementType>(
    props: TDefaultPropsWithChildren<TProps<Type>>,
) => {
    const { children, className, ...restProps } = props;

    return (
        <MuiContainer
            className={clsx(styles.container, className)}
            maxWidth='xl'
            {...restProps}
        >
            {children}
        </MuiContainer>
    );
};

export default BodyContainer;
