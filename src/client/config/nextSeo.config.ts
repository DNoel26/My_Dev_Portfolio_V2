/** @format */

import { DefaultSeoProps } from 'next-seo';

const title =
    'Software Developer | Full Stack Web Developer | Darnell Noel | Trinidad & Tobago';
const description =
    'Portfolio for Software Developer based in Trinidad. ' +
    'Get in contact to have your business website or app designed and developed with modern tools.';
const url = 'https://www.darnellnoel.dev/';
const imgUrl1 = `${url}images/darnell_nicholas_noel_profile_pic.jpg`;

const configSEO: DefaultSeoProps = {
    title,
    defaultTitle: title,
    description,
    canonical: url,
    openGraph: {
        url,
        title,
        description,
        type: 'website',
        images: [
            { url: imgUrl1, alt: 'Profile picture of Darnell Noel', type: 'image/jpeg' },
        ],
        siteName: "Darnell Noel's Software Developer Portfolio",
        profile: {
            firstName: 'Darnell',
            lastName: 'Noel',
            gender: 'male',
        },
    },
};

export default configSEO;
