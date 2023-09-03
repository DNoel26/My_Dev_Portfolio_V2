/** @format */

/* cSpell:disable */

/* eslint-disable func-names */
/* eslint-disable no-console */
(function () {
    if (typeof window !== 'undefined') {
        const { head } = document;
        setTimeout(() => {
            const googleScript = document.createElement('script');
            googleScript.setAttribute('src', '/scripts/google.js');
            head.appendChild(googleScript);
        }, 1000);
        setTimeout(() => {
            const hjScript = document.createElement('script');
            hjScript.setAttribute('src', '/scripts/hotjar.js');
            head.appendChild(hjScript);
        }, 1200);
        setTimeout(() => {
            const tidioScript = document.createElement('script');
            tidioScript.setAttribute('src', '/scripts/tidio.js');
            head.appendChild(tidioScript);
        }, 5000);
    }
})();
