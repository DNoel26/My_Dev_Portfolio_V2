/** @format */

/* eslint-disable func-names */
(function () {
    if (typeof window !== 'undefined') {
        const { head } = document;
        const tidioScript = document.createElement('script');
        tidioScript.setAttribute(
            'src',
            '//code.tidio.co/edv8badlavwvekyo42tfkxyp6frut7yq.js',
        );
        head.appendChild(tidioScript);
        console.log('Tidio chat loaded!');
    }
})();
