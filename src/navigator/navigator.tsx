// // import { Rockets } from './../screens/rockets/index';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useColorScheme} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Button} from '../components';
import {Colors} from '../constants';
import {
  Capsules,
  Cores,
  Crew,
  Dragons,
  Home,
  HomeScreenOptions,
  LandPads,
  LaunchPads,
  Payloads,
  Roadster,
  Rockets,
  Ships,
  Starlinks,
} from '../screens';

const Stack = createNativeStackNavigator();

const defaultNavOptions = {
  drawerActiveBackgroundColor: Colors.primary,
  drawerActiveTintColor: 'white',
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: 'white',
};

const AppDrawer = () => {
  const DrawerNavigator = createDrawerNavigator();
  const theme = useTheme();

  return (
    <DrawerNavigator.Navigator
      screenOptions={{
        ...defaultNavOptions,
        headerRight: () => <Button mode="contained">Login</Button>,
      }}>
      <DrawerNavigator.Screen
        name="Home"
        component={Home}
        options={HomeScreenOptions}
      />
      <DrawerNavigator.Screen name="Capsules" component={Capsules} />
      <DrawerNavigator.Screen name="Cores" component={Cores} />
      <DrawerNavigator.Screen name="Crew" component={Crew} />
      <DrawerNavigator.Screen name="Dragons" component={Dragons} />
      <DrawerNavigator.Screen name="LandPads" component={LandPads} />
      <DrawerNavigator.Screen name="LaunchPads" component={LaunchPads} />
      <DrawerNavigator.Screen name="Payloads" component={Payloads} />
      <DrawerNavigator.Screen name="Roadster" component={Roadster} />
      <DrawerNavigator.Screen name="Rockets" component={Rockets} />
      <DrawerNavigator.Screen name="Ships" component={Ships} />
      <DrawerNavigator.Screen name="Starlinks" component={Starlinks} />
    </DrawerNavigator.Navigator>
  );
};

const MainStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="AppDrawer" component={AppDrawer} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <MainStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
