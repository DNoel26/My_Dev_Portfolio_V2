/** @format */

import {
    ACTION_USER_THEME,
    IUserThemeState,
    TUserThemeAction,
} from '@@actions/userThemeActions';
import useClientStorage from '@@hooks/useClientStorage';
import useUserTheme from '@@hooks/useUserTheme';
import { CLIENT_STORAGE_ITEM_KEY, CSS_VARIABLE } from '@@lib/constants';
import { userThemeInitialState } from '@@reducers/userThemeReducer';
import {
    Dispatch,
    PropsWithChildren,
    ReactNode,
    createContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

/* eslint-disable @typescript-eslint/no-empty-function */
type TContext = {
    userThemeState: IUserThemeState;
    userThemeDispatch: Dispatch<TUserThemeAction>;
};

const { USER_THEME_PRIMARY, USER_THEME_SECONDARY } = CLIENT_STORAGE_ITEM_KEY;
const getRootPropertyValue = (root: Element, property: string) =>
    window.getComputedStyle(root).getPropertyValue(property);

export const UserThemeContext = createContext<TContext>({
    userThemeState: userThemeInitialState,
    userThemeDispatch: () => {},
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
    const { state: userThemeState, dispatch: userThemeDispatch, root } = useUserTheme();
    const value = useMemo(
        () => ({ userThemeState, userThemeDispatch }),
        [userThemeState, userThemeDispatch],
    );
    const [renderComponent, setRenderComponent] = useState<ReactNode | null>(null);

    const primaryItem = getUserThemePrimaryItem();
    const secondaryItem = getUserThemeSecondaryItem();
    const primaryItemStr = typeof primaryItem === 'string' ? primaryItem : '';
    const secondaryItemStr = typeof secondaryItem === 'string' ? secondaryItem : '';
    const Provider = useMemo(
        () => (
            <UserThemeContext.Provider value={value}>
                {children}
            </UserThemeContext.Provider>
        ),
        [value, children],
    );
    // initializes the color state handler
    useEffect(() => {
        if (root && (primaryItemStr || secondaryItemStr)) {
            const colorPrimary = primaryItemStr;
            const colorSecondary = secondaryItemStr;

            userThemeDispatch({
                type: ACTION_USER_THEME.UPDATE_ALL,
                payload: {
                    colorPrimary,
                    colorSecondary,
                },
            });
        }
    }, [root, userThemeState, primaryItemStr, secondaryItemStr, userThemeDispatch]);
    // update css variables on state change
    useEffect(() => {
        document.documentElement.style.setProperty(
            CSS_VARIABLE.COLOR_PRIMARY,
            userThemeState.colorPrimary,
        );
        document.documentElement.style.setProperty(
            CSS_VARIABLE.COLOR_SECONDARY,
            userThemeState.colorSecondary,
        );
    }, [userThemeState]);
    // prevent flashing while colors load to match state
    useEffect(() => {
        if (root) {
            if (userThemeState.isOriginalTheme) {
                setRenderComponent(Provider);
            } else if (
                userThemeState.colorPrimary !==
                getRootPropertyValue(root, CSS_VARIABLE.COLOR_PRIMARY)
            ) {
                setRenderComponent(null);
            } else if (
                userThemeState.colorSecondary !==
                getRootPropertyValue(root, CSS_VARIABLE.COLOR_SECONDARY)
            ) {
                setRenderComponent(null);
            } else {
                setRenderComponent(Provider);
            }
        }
    }, [root, userThemeState, Provider]);

    return renderComponent;
};

export default UserThemeProvider;
