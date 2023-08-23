/** @format */

/* cSpell:disable */

/* eslint-disable func-names */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-console */

// Google tag (gtag.js)
export const GOOGLE_TAG_MANAGER_SRC =
    'https://www.googletagmanager.com/gtag/js?id=G-R6JXV4BMKQ';

export const googleTagManagerScript = (function () {
    if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        const gtag = function () {
            dataLayer.push(arguments);
        };
        gtag('js', new Date());
        gtag('config', 'G-R6JXV4BMKQ');
        console.log('Gtag loaded!');
    }
})();
