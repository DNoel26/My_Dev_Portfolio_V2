/** @format */

import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='en' style={{ scrollBehavior: 'smooth' }}>
            <Head>
                <link rel='shortcut icon' href='/favicon.ico' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
