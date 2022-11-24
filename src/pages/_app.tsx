/** @format */

import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta charSet='UTF-8' />
                <meta name='viewport' content='initial-scale=1, width=device-width' />
                <meta name='description' content='Oil & Gas Engineering' />
                <link rel='icon' href='/favicon.ico' />
                <title>Darnell Noel | Web Developer</title>
            </Head>
            {/* eslint-disable react/jsx-props-no-spreading */}
            <Component {...pageProps} />
        </>
    );
}
