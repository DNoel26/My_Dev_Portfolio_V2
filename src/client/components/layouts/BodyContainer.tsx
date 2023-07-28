/** @format */

import { MuiContainer, MuiContainerProps } from '@@client';
import { TDefaultPropsWithChildren } from '@@types/client/props.types';
import clsx from 'clsx';
import { ElementType } from 'react';
import styles from './BodyContainer.module.scss';

type TProps<Type extends ElementType> = MuiContainerProps<Type, { component?: Type }>;

const BodyContainer = <Type extends ElementType>(
    props: TDefaultPropsWithChildren<TProps<Type>>,
) => {
    const { children, className, ...restProps } = props;

    return (
        <MuiContainer
            className={clsx(styles.container, className)}
            maxWidth='xl'
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...restProps}
        >
            {children}
        </MuiContainer>
    );
};

export default BodyContainer;
