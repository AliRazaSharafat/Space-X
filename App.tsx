import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import 'react-native-gesture-handler';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Colors as ThemeColors} from './src/constants/Colors';
import ThemeModeProvidor from './src/context/themeMode';
import AppNavigator from './src/navigator/navigator';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      primary: string;
      secondary: string;
      light: string;
      error: string;
      warning: string;
    }

    interface Theme {
      myOwnProperty: boolean;
    }
  }
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const theme = {
    ...DefaultTheme,
    myOwnProperty: true,
    colors: {
      ...DefaultTheme.colors,
      primary: ThemeColors.primary,
      secondary: ThemeColors.secondary,
      light: ThemeColors.light,
      warning: ThemeColors.warning,
      error: ThemeColors.error,
    },
  };

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ThemeModeProvidor>
        <PaperProvider theme={theme}>
          <AppNavigator />
        </PaperProvider>
      </ThemeModeProvidor>
    </>
  );
};

export default App;
