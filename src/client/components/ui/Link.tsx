/** @format */

import { NextLink } from '@@client';
import clsx from 'clsx';
import { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

/* eslint-disable react/jsx-props-no-spreading */
type TNextLink = LinkProps & { isExternal?: false };
type THtmlLink = JSX.IntrinsicElements['a'] & { isExternal: true };
type TLink = TNextLink | THtmlLink;

const Link = (props: TLink) => {
    const { className, children, href, isExternal, ...restProps } = props;
    const router = useRouter();
    const customClassName = clsx(className);
    useEffect(() => {
        const handleRouteChange = (e: unknown) => {
            if (typeof e === 'string') {
                if (typeof window !== 'undefined' && e.indexOf('/#', 0) === -1) {
                    window.scrollTo({ top: 0 });
                } else {
                    const anchor = document.querySelector(e.replace('/', ''));
                    anchor?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            }
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        router.events.on('hashChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
            router.events.off('hashChangeComplete', handleRouteChange);
        };
    }, [href, router]);

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
                {children || href?.replace(/^https?:\/\//, '')}
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
