/** @format */

import { Route } from 'nextjs-routes';

export type TRoutePathname = Route['pathname'];
export type TRouteHash = Route['hash'];
type TUrl = Record<string, TRoutePathname>;

const _PROJECTS: TRoutePathname = '/projects';
const _PLAY: TRoutePathname = '/play';

export const ANCHOR_TAG = {
    HOME_PAGE: {
        INTRO: 'intro',
        EXPERIENCE: 'experience',
        TRAITS: 'traits',
        SERVICES: 'services',
        SKILLS: 'skills',
    } as const,
    APP: { SCROLL_TOP: 'top', CONTACT: 'contact' } as const,
} as const;

const BASE = {
    HOME: `/`,
    ABOUT: '/about',
    PROJECTS: _PROJECTS,
    PLAY: _PLAY,
} as const satisfies TUrl;

const PROJECTS = {
    INDEX: _PROJECTS,
    SAMPLE: `${_PROJECTS}/sample`,
    CORE: `${_PROJECTS}/core`,
} as const satisfies TUrl;

const PLAY = {
    INDEX: _PLAY,
} as const satisfies TUrl;

export const APP_URL = { BASE, PROJECTS, PLAY } as const;

export const EXTERNAL_URL = {
    LINKEDIN: 'https://www.linkedin.com/in/darnellnoel1990/',
    GITHUB: 'https://github.com/DNoel26',
    WHATSAPP:
        'https://api.whatsapp.com/send/?phone=18684808781&text=Hi%2C+I+just+checked+out+your+portfolio&type=phone_number&app_absent=0',
} as const;
