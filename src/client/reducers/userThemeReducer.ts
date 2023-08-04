/** @format */

import { setStorageItem } from '@@hooks/useClientStorage';
import { CLIENT_STORAGE_ITEM_KEY } from '@@lib/constants';
import { Reducer } from 'react';
import {
    ACTION_USER_THEME,
    IUserThemeState,
    TUserThemeAction,
} from '../actions/userThemeActions';

const { USER_THEME_PRIMARY, USER_THEME_SECONDARY } = CLIENT_STORAGE_ITEM_KEY;
const { UPDATE_PRIMARY, UPDATE_SECONDARY, UPDATE_ALL, RESET } = ACTION_USER_THEME;

export const userThemeInitialState: IUserThemeState = {
    colorPrimaryOriginal: '',
    colorSecondaryOriginal: '',
    colorPrimary: '',
    colorSecondary: '',
    isOriginalTheme: false,
};

export const userThemeReducer: Reducer<IUserThemeState, TUserThemeAction> = (
    state,
    action,
) => {
    const storage = localStorage;
    switch (action.type) {
        case UPDATE_PRIMARY: {
            setStorageItem(storage, USER_THEME_PRIMARY, action.payload);

            const isOriginalTheme =
                action.payload === state.colorPrimaryOriginal &&
                state.colorSecondary === state.colorSecondaryOriginal &&
                !!state.colorPrimaryOriginal &&
                !!state.colorSecondaryOriginal;
            return { ...state, colorPrimary: action.payload, isOriginalTheme };
        }
        case UPDATE_SECONDARY: {
            setStorageItem(storage, USER_THEME_SECONDARY, action.payload);

            const isOriginalTheme =
                state.colorPrimary === state.colorPrimaryOriginal &&
                action.payload === state.colorSecondaryOriginal &&
                !!state.colorPrimaryOriginal &&
                !!state.colorSecondaryOriginal;
            return { ...state, colorSecondary: action.payload, isOriginalTheme };
        }
        case UPDATE_ALL: {
            setStorageItem(storage, USER_THEME_PRIMARY, action.payload.colorPrimary);
            setStorageItem(storage, USER_THEME_SECONDARY, action.payload.colorSecondary);

            const isOriginalTheme =
                action.payload.colorPrimary === action.payload.colorPrimaryOriginal &&
                action.payload.colorSecondary === action.payload.colorSecondaryOriginal &&
                !!action.payload.colorPrimaryOriginal &&
                !!action.payload.colorSecondaryOriginal;
            return { ...state, ...action.payload, isOriginalTheme };
        }
        case RESET: {
            storage.removeItem(USER_THEME_PRIMARY);
            storage.removeItem(USER_THEME_SECONDARY);

            return {
                ...state,
                colorPrimary: state.colorPrimaryOriginal,
                colorSecondary: state.colorSecondaryOriginal,
            };
        }
        default: {
            return state;
        }
    }
};
