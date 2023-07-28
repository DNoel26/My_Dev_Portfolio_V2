/** @format */

import { Route } from 'nextjs-routes';

export type TApiInternal = Route['pathname'];
type TUrl = Record<string, TApiInternal>;

const API_VERS_PREFIX = '/api/v1';
const _PROJECTS: TApiInternal = `${API_VERS_PREFIX}/projects`;

const BASE = {
    PROJECTS: _PROJECTS,
} as const satisfies TUrl;

const PROJECTS = {
    INDEX: _PROJECTS,
    SAMPLE: `${_PROJECTS}/sample`,
    CORE: `${_PROJECTS}/core`,
} as const satisfies TUrl;

export const APP_ENDPOINT = { BASE, PROJECTS } as const;
