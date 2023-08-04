/** @format */

import {
    ACTION_USER_THEME,
    IUserThemeState,
    TUserThemeAction,
} from '@@actions/userThemeActions';
import useClientStorage from '@@hooks/useClientStorage';
import useUserTheme from '@@hooks/useUserTheme';
import { CLIENT_STORAGE_ITEM_KEY, CSS_VAR_USER_THEME } from '@@lib/constants';
import { userThemeInitialState } from '@@reducers/userThemeReducer';
import { Dispatch, PropsWithChildren, createContext, useEffect, useMemo } from 'react';

/* eslint-disable @typescript-eslint/no-empty-function */
type TContext = {
    state: IUserThemeState;
    dispatch: Dispatch<TUserThemeAction>;
};

const { USER_THEME_PRIMARY, USER_THEME_SECONDARY } = CLIENT_STORAGE_ITEM_KEY;
const { UPDATE_ALL } = ACTION_USER_THEME;
const getRootPropertyValue = (root: Element, property: string) =>
    window.getComputedStyle(root).getPropertyValue(property);

export const UserThemeContext = createContext<TContext>({
    state: userThemeInitialState,
    dispatch: () => {},
});

const UserThemeProvider = ({ children }: PropsWithChildren) => {
    const { getItem: getUserThemePrimaryItem } = useClientStorage(
        'local',
        USER_THEME_PRIMARY,
    );
    const { getItem: getUserThemeSecondaryItem } = useClientStorage(
        'local',
        USER_THEME_SECONDARY,
    );
    const userTheme = useUserTheme();
    const { state: userThemeState, dispatch: userThemeDispatch, root } = userTheme;
    const value = useMemo(
        () => ({ state: userThemeState, dispatch: userThemeDispatch }),
        [userThemeState, userThemeDispatch],
    );
    const isStateInitialized =
        !!userThemeState.colorPrimary &&
        !!userThemeState.colorPrimaryOriginal &&
        !!userThemeState.colorSecondary &&
        !!userThemeState.colorSecondaryOriginal;
    const primaryItem = getUserThemePrimaryItem();
    const secondaryItem = getUserThemeSecondaryItem();
    useEffect(() => {
        if (root && !isStateInitialized) {
            const colorPrimaryOriginal = getRootPropertyValue(
                root,
                CSS_VAR_USER_THEME.COLOR_PRIMARY_ORIGINAL,
            );
            const colorPrimary =
                (typeof primaryItem === 'string' && primaryItem) ||
                getRootPropertyValue(root, CSS_VAR_USER_THEME.COLOR_PRIMARY);
            const colorSecondaryOriginal = getRootPropertyValue(
                root,
                CSS_VAR_USER_THEME.COLOR_SECONDARY_ORIGINAL,
            );
            const colorSecondary =
                (typeof secondaryItem === 'string' && secondaryItem) ||
                getRootPropertyValue(root, CSS_VAR_USER_THEME.COLOR_SECONDARY);
            const isOriginalTheme =
                colorPrimary === colorPrimaryOriginal &&
                colorSecondary === colorSecondaryOriginal &&
                !colorPrimaryOriginal;

            userThemeDispatch({
                type: UPDATE_ALL,
                payload: {
                    colorPrimaryOriginal,
                    colorPrimary,
                    colorSecondaryOriginal,
                    colorSecondary,
                    isOriginalTheme,
                },
            });
        }
    }, [
        root,
        userThemeDispatch,
        isStateInitialized,
        userThemeState,
        primaryItem,
        secondaryItem,
    ]);

    return (
        <UserThemeContext.Provider value={value}>{children}</UserThemeContext.Provider>
    );
};

export default UserThemeProvider;
