/** @format */

import { Route } from 'nextjs-routes';

export type TApiInternal = Route['pathname'];
type TUrl = Record<string, TApiInternal>;

const API_VERS_PREFIX = '/api/v1';
const _RECAPTCHA: TApiInternal = `${API_VERS_PREFIX}/recaptcha`;

const BASE = {
    RECAPTCHA: _RECAPTCHA,
} as const satisfies TUrl;

export const APP_ENDPOINT = { BASE } as const;

export const EXTERNAL_ENDPOINT = {
    FORMSPREE:
        typeof process !== 'undefined' && process.env.NODE_ENV === 'production'
            ? 'https://formspree.io/f/xwkdqpbr'
            : 'https://formspree.io/f/mbjvoayd',
} as const;
