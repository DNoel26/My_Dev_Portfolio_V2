/** @format */

export const ACTION_USER_THEME = {
    UPDATE_PRIMARY: 'UPDATE_PRIMARY',
    UPDATE_SECONDARY: 'UPDATE_SECONDARY',
    UPDATE_ALL: 'UPDATE_ALL',
    MATCH: 'MATCH',
    SWAP: 'SWAP',
    RESET: 'RESET',
    UPDATE_MESSAGE: 'UPDATE_MESSAGE',
} as const;

const {
    UPDATE_PRIMARY,
    UPDATE_SECONDARY,
    UPDATE_ALL,
    MATCH,
    SWAP,
    RESET,
    UPDATE_MESSAGE,
} = ACTION_USER_THEME;

export interface IUserThemeState {
    colorPrimaryOriginal: string;
    colorSecondaryOriginal: string;
    colorPrimary: string;
    colorSecondary: string;
    isOriginalTheme: boolean;
    message: string;
}

export type TUserThemeAction =
    | {
          type: typeof UPDATE_PRIMARY | typeof UPDATE_SECONDARY | typeof UPDATE_MESSAGE;
          payload: string;
      }
    | {
          type: typeof UPDATE_ALL;
          payload: Pick<IUserThemeState, 'colorPrimary' | 'colorSecondary'>;
      }
    | {
          type: typeof MATCH | typeof SWAP | typeof RESET;
      };
