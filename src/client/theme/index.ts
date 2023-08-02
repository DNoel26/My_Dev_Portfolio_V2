/** @format */

import { Theme } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import { baseDarkTheme } from './dark';
import { baseLightTheme } from './light';

const base = {} as Theme;

export const lightTheme = createTheme(deepmerge(baseLightTheme, base));

export const darkTheme = createTheme(deepmerge(baseDarkTheme, base));

export const DEFAULT_THEME = 'dark';
