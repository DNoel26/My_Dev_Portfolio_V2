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
            const hotjarScript = document.createElement('script');
            hotjarScript.setAttribute('src', '/scripts/hotjar.js');
            head.appendChild(hotjarScript);
        }, 1200);

        setTimeout(() => {
            const tidioScript = document.createElement('script');
            tidioScript.setAttribute(
                'src',
                '//code.tidio.co/edv8badlavwvekyo42tfkxyp6frut7yq.js',
            );
            head.appendChild(tidioScript);
            console.log('Tidio chat loaded!');
        }, 5000);
    }
})();
