/** @format */

/* cSpell:disable */

/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-console */

// Hotjar Tracking Code for https://www.darnellnoel.dev
export const hotjarScript = (function (h, o, t, j, a, r) {
    h.hj =
        h.hj ||
        function () {
            (h.hj.q = h.hj.q || []).push(arguments);
        };
    h._hjSettings = { hjid: 3619010, hjsv: 6 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
