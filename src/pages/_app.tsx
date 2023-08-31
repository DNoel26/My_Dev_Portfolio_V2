/** @format */

import PageProvider from '@@context/PageProvider';
import { NEXT_THEME } from '@@lib/constants/app';
import '@@styles/globals.css';
import '@@styles/sass/globals.scss';
import { DEFAULT_THEME } from '@@theme';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
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
        </ErrorBoundary>
    );
}
