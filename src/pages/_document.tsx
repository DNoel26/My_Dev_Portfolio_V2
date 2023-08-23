/** @format */

import { Head, Html, Main, NextScript } from 'next/document';
import { GOOGLE_TAG_MANAGER_SRC } from 'public/scripts/google';
import { TIDIO_SRC } from 'public/scripts/tidio';

export default function Document() {
    return (
        <Html lang='en' style={{ scrollBehavior: 'smooth' }}>
            <Head>
                <script src={GOOGLE_TAG_MANAGER_SRC} async />
                <script src={TIDIO_SRC} async />
                <script type='module' src='/scripts/google.js' async />
                <script type='module' src='/scripts/hotjar.js' async />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
