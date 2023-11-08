/** @format */

import { DefaultSeoProps } from 'next-seo';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const version = publicRuntimeConfig?.version;

const title = `Web Developer in Trinidad | Web Designer | Darnell Noel | ${new Date().getFullYear()}`;
const description =
    'Darnell Noel is a full stack web developer in Trinidad & Tobago who enjoys ' +
    'designing and building accessible and modern websites and web applications.';
const url = 'https://www.darnellnoel.dev/';
const imgUrl1 = `${url}images/darnell_nicholas_noel_profile_pic.jpg`;

const configSEO: DefaultSeoProps = {
    title,
    defaultTitle: title,
    description,
    canonical: url,
    additionalMetaTags: [
        { name: 'author', content: 'Darnell Nicholas Noel' },
        { name: 'version', content: version },
    ],
    openGraph: {
        url,
        title,
        description,
        type: 'website',
        images: [
            { url: imgUrl1, alt: 'Profile picture of Darnell Noel', type: 'image/jpeg' },
        ],
        siteName: "Darnell Noel's Web Developer Portfolio",
        profile: {
            firstName: 'Darnell',
            lastName: 'Noel',
            gender: 'male',
        },
    },
};

export default configSEO;
