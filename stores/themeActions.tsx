import {lightTheme, darkTheme} from '../src/constants';

export const TOGGLE_THEME_BEGIN = 'TOGGLE_THEME_BEGIN';
export const TOGGLE_THEME_SUCCESS = 'TOGGLE_THEME_SUCCESS';
export const TOGGLE_THEME_FAILURE = 'TOGGLE_THEME_FAILURE';

export const toggleThemeBegin = () => ({
  type: TOGGLE_THEME_BEGIN,
});

export const toggleThemeSuccess = (selectedTheme: { name: string; backgroundColor1: string; backgroundColor2: string; backgroundColor3: string; backgroundColor4: string; backgroundColor5: string; backgroundColor6: string; backgroundColor7: string; backgroundColor8: string; backgroundColor9: string; backgroundColor10: string; backgroundColor11: string; backgroundColor12: string; backgroundColor13: string; backgroundColor14: string; backgroundColor15: string; backgroundColor16: string; backgroundColor17: string; lineDivider: string; borderColor1: string; borderColor2: string; textColor: string; textColor2: string; textColor3: string; textColor4: string; textColor5: string; textColor6: any; textColor7: string; tintColor: string; dotColor1: string; dotColor2: string; }) => ({
  type: TOGGLE_THEME_SUCCESS,
  payload: {selectedTheme},
});

export const toggleThemeFailure = (error: { error: string; }) => ({
  type: TOGGLE_THEME_FAILURE,
  payload: {error},
});

export function toggleTheme(themeType: any) {
  return (dispatch: (arg0: { type: string; payload?: { selectedTheme: any; } | { error: any; }; }) => void) => {
    dispatch(toggleThemeBegin());

    switch (themeType) {
      case 'dark':
        dispatch(toggleThemeSuccess(darkTheme));
        break;
      case 'light':
        dispatch(toggleThemeSuccess(lightTheme));
        break;
      default:
        dispatch(toggleThemeFailure({error: 'Invalid theme type'}));
        break;
    }
  };
}
