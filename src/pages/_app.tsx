/** @format */

import PageProvider from '@@context/PageProvider';
import { NEXT_THEME } from '@@lib/constants/app';
import '@@styles/sass/globals.scss';
import { DEFAULT_THEME } from '@@theme';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Script from 'next/script';
import { CSSProperties } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
const themes = Object.values(NEXT_THEME);
const errorBoundaryStyle: CSSProperties = {
    height: '100vh',
    width: '100%',
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
};

console.log('App loaded!');

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ErrorBoundary
            fallback={<div style={errorBoundaryStyle}>Sorry, something went wrong!</div>}
        >
            <NextThemeProvider
                attribute='class'
                disableTransitionOnChange
                themes={themes}
                defaultTheme={DEFAULT_THEME}
                enableSystem={false}
            >
                <PageProvider>
                    <Component {...pageProps} />
                </PageProvider>
            </NextThemeProvider>
            <Script
                src='https://www.googletagmanager.com/gtag/js?id=G-R6JXV4BMKQ'
                strategy='lazyOnload'
            />
            <Script
                src='https://www.googletagmanager.com/gtag/js?id=G-R6JXV4BMKQ'
                strategy='lazyOnload'
            />
            <Script src='../scripts/index.js' strategy='lazyOnload' />
        </ErrorBoundary>
    );
}
