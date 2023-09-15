import React, {createContext, ReactNode, useState} from 'react';

type ThemeMode = {
  themeMode: string;
  toggleThemeMode: (mode: string) => void;
};

interface Props {
  children: ReactNode;
}

export const ThemeModeContext = createContext<ThemeMode>({
  themeMode: 'light',
  toggleThemeMode: () => {},
});

const ThemeModeProvidor = ({children}: Props) => {
  const [themeMode, setThemeMode] = useState('light');

  const toggleThemeMode = (mode: string) => {
    if (mode === themeMode) {
      return;
    }
    setThemeMode(mode);
  };

  return (
    <ThemeModeContext.Provider value={{themeMode, toggleThemeMode}}>
      {children}
    </ThemeModeContext.Provider>
  );
};

export default ThemeModeProvidor;
