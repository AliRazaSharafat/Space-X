import {useContext} from 'react';
import {ThemeModeContext} from 'src/context/themeMode';

export function useThemeMode() {
  return useContext(ThemeModeContext);
}
