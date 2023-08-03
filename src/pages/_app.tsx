/** @format */

import PageProvider from '@@context/PageProvider';
import '@@styles/globals.css';
import '@@styles/sass/globals.scss';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { ErrorBoundary } from 'react-error-boundary';

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
export default function App({ Component, pageProps }: AppProps) {
    console.log('App Loaded!');

    return (
        <ErrorBoundary fallback={<div>Sorry, something went wrong!</div>}>
            <NextThemeProvider attribute='class' disableTransitionOnChange>
                <PageProvider>
                    <Component {...pageProps} />
                </PageProvider>
            </NextThemeProvider>
        </ErrorBoundary>
    );
}
