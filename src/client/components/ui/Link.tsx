/** @format */

import { NextLink } from '@@client';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { ComponentProps, useEffect } from 'react';

/* eslint-disable react/jsx-props-no-spreading */
type TNextLink = ComponentProps<typeof NextLink> & { isExternal?: false };
type THtmlLink = JSX.IntrinsicElements['a'] & { isExternal: true };
type TLink = TNextLink | THtmlLink;

const Link = (props: TLink) => {
    const { className, children, href, isExternal, ...restProps } = props;
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

    if (isExternal) {
        return (
            <a
                className={customClassName}
                href={href}
                target='_blank'
                referrerPolicy='no-referrer'
                rel='noopener noreferrer'
                {...restProps}
            >
                {children}
            </a>
        );
    }

    return (
        <NextLink className={customClassName} scroll={false} href={href} {...restProps}>
            {children}
        </NextLink>
    );
};

export default Link;
