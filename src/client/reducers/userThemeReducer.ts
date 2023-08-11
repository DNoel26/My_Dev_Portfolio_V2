/** @format */

import { setStorageItem } from '@@hooks/useClientStorage';
import { CLIENT_STORAGE_ITEM_KEY, ERROR_MSG, SUCCESS_MSG } from '@@lib/constants';
import { SATURATION_LEVEL_MIN } from '@@lib/constants/app';
import { cssExports } from '@@styles/exports';
import { Reducer } from 'react';
import { ColorService } from 'react-color-palette';
import {
    ACTION_USER_THEME,
    IUserThemeState,
    TUserThemeAction,
} from '../actions/userThemeActions';

const { USER_THEME_PRIMARY, USER_THEME_SECONDARY } = CLIENT_STORAGE_ITEM_KEY;
const {
    UPDATE_PRIMARY,
    UPDATE_SECONDARY,
    UPDATE_ALL,
    MATCH,
    SWAP,
    RESET,
    UPDATE_MESSAGE,
} = ACTION_USER_THEME;

export const userThemeInitialState: IUserThemeState = {
    colorPrimaryOriginal: cssExports.colorPrimary,
    colorSecondaryOriginal: cssExports.colorSecondary,
    colorPrimary: cssExports.colorPrimary,
    colorSecondary: cssExports.colorSecondary,
    isOriginalTheme: true,
    message: '',
};

export const userThemeReducer: Reducer<IUserThemeState, TUserThemeAction> = (
    state,
    action,
) => {
    const storage = localStorage;
    const message = '';
    switch (action.type) {
        case UPDATE_PRIMARY: {
            setStorageItem(storage, USER_THEME_PRIMARY, action.payload);

            const isOriginalTheme =
                action.payload === userThemeInitialState.colorPrimaryOriginal &&
                state.colorSecondary === userThemeInitialState.colorSecondaryOriginal;
            return { ...state, colorPrimary: action.payload, isOriginalTheme, message };
        }
        case UPDATE_SECONDARY: {
            setStorageItem(storage, USER_THEME_SECONDARY, action.payload);

            const isOriginalTheme =
                state.colorPrimary === userThemeInitialState.colorPrimaryOriginal &&
                action.payload === userThemeInitialState.colorSecondaryOriginal;
            return { ...state, colorSecondary: action.payload, isOriginalTheme, message };
        }
        case UPDATE_ALL: {
            setStorageItem(storage, USER_THEME_PRIMARY, action.payload.colorPrimary);
            setStorageItem(storage, USER_THEME_SECONDARY, action.payload.colorSecondary);

            const isOriginalTheme =
                action.payload.colorPrimary ===
                    userThemeInitialState.colorPrimaryOriginal &&
                action.payload.colorSecondary ===
                    userThemeInitialState.colorSecondaryOriginal;
            return { ...state, ...action.payload, isOriginalTheme, message };
        }
        case MATCH: {
            const colorSecondary = state.colorPrimary;
            setStorageItem(storage, USER_THEME_SECONDARY, colorSecondary);

            const isOriginalTheme = false;
            return {
                ...state,
                colorSecondary,
                isOriginalTheme,
                message: SUCCESS_MSG.COLOR_MATCH,
            };
        }
        case SWAP: {
            const colorPrimary = state.colorSecondary;
            const colorSecondary = state.colorPrimary;
            const colorPrimaryHsv = ColorService.convert('hex', colorPrimary);
            // prevents low saturation on primary color swap
            if (colorPrimaryHsv.hsv.s < SATURATION_LEVEL_MIN) {
                return {
                    ...state,
                    message: ERROR_MSG.COLOR_MIN_SECONDARY,
                };
            }
            setStorageItem(storage, USER_THEME_PRIMARY, colorPrimary);
            setStorageItem(storage, USER_THEME_SECONDARY, colorSecondary);

            const isOriginalTheme = false;
            return {
                ...state,
                colorPrimary,
                colorSecondary,
                isOriginalTheme,
                message: SUCCESS_MSG.COLOR_SWAP,
            };
        }
        case RESET: {
            storage.removeItem(USER_THEME_PRIMARY);
            storage.removeItem(USER_THEME_SECONDARY);

            return { ...userThemeInitialState, message: SUCCESS_MSG.COLOR_RESET };
        }
        case UPDATE_MESSAGE: {
            return { ...state, message: action.payload };
        }
        default: {
            return state;
        }
    }
};
