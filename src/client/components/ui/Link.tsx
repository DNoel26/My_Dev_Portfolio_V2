/** @format */

import { NextLink } from '@@client';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { ComponentProps, useEffect } from 'react';

/* eslint-disable react/jsx-props-no-spreading */
type TLink = ComponentProps<typeof NextLink>;

const Link = (props: TLink) => {
    const { className, children, href, ...restProps } = props;
    const router = useRouter();
    const customClassName = clsx(className);
    const hrefHash = typeof href === 'object' && href.hash;
    useEffect(() => {
        const handleRouteChange = () => {
            if (typeof window !== 'undefined' && !!hrefHash) {
                window.scrollTo({ top: 0 });
            }
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        router.events.on('hashChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
            router.events.off('hashChangeComplete', handleRouteChange);
        };
    }, [hrefHash, router.events]);

    return (
        <NextLink className={customClassName} scroll={false} href={href} {...restProps}>
            {children}
        </NextLink>
    );
};

export default Link;
