/** @format */

export const ACTION_USER_THEME = {
    UPDATE_PRIMARY: 'UPDATE_PRIMARY',
    UPDATE_SECONDARY: 'UPDATE_SECONDARY',
    UPDATE_ALL: 'UPDATE_ALL',
    RESET: 'RESET',
} as const;

const { UPDATE_PRIMARY, UPDATE_SECONDARY, UPDATE_ALL, RESET } = ACTION_USER_THEME;

export interface IUserThemeState {
    colorPrimaryOriginal: string;
    colorSecondaryOriginal: string;
    colorPrimary: string;
    colorSecondary: string;
    isOriginalTheme: boolean;
}

export type TUserThemeAction =
    | {
          type: typeof UPDATE_PRIMARY | typeof UPDATE_SECONDARY;
          payload: string;
      }
    | {
          type: typeof UPDATE_ALL;
          payload: IUserThemeState;
      }
    | {
          type: typeof RESET;
      };
