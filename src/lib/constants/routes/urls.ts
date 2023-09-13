/** @format */

import { Route } from 'nextjs-routes';

export type TRoutePathname = Route['pathname'];
export type TRouteHash = Route['hash'];
type TUrl = Record<string, TRoutePathname>;

export const ANCHOR_TAG = {
    HOME_PAGE: {
        INTRO: 'intro',
        ABOUT: 'about',
        EXPERIENCE: 'experience',
        TRAITS: 'traits',
        SERVICES: 'services',
        SKILLS: 'skills',
        PROJECTS: 'projects',
    } as const,
    APP: { SCROLL_TOP: 'top', CONTACT: 'contact', BOTTOM: 'bottom' } as const,
} as const;

const BASE = {
    HOME: `/`,
} as const satisfies TUrl;

export const APP_URL = { BASE } as const;

export const EXTERNAL_URL = {
    LINKEDIN: 'https://www.linkedin.com/in/darnellnoel1990/',
    GITHUB: 'https://github.com/DNoel26',
    WHATSAPP:
        'https://api.whatsapp.com/send/?phone=18684808781&text=Hi%2C+I+just+checked+out+your+portfolio&type=phone_number&app_absent=0',
} as const;

// TODO: Review and include
// https://wa.me/18684808781?text=Hi,%20I%20just%20checked%20out%20your%20portfolio
