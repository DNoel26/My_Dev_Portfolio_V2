/** @format */

import { NextLink } from '@@client';
import clsx from 'clsx';
import { ComponentProps } from 'react';

/* eslint-disable react/jsx-props-no-spreading */
type TLink = ComponentProps<typeof NextLink>;

const Link = (props: TLink) => {
    const { className, children, ...rest } = props;
    const customClassName = clsx(className);
    return (
        <NextLink className={customClassName} scroll={false} {...rest}>
            {children}
        </NextLink>
    );
};

export default Link;
