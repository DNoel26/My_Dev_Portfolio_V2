/** @format */

/* eslint-disable func-names */
/* eslint-disable no-console */
(function () {
    if (typeof window !== 'undefined') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                const script = document.createElement('script');
                script.setAttribute(
                    'src',
                    '//code.tidio.co/edv8badlavwvekyo42tfkxyp6frut7yq.js',
                );
                const { head } = document;
                head.appendChild(script);
                console.log('Tidio chat loaded!');
            }, 5000);
        });
    }
})();
