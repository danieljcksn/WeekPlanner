// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from '../screens/Welcome';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import LanguageContextProvider from '../contexts/LanguageContext';
import ChooseLanguage from '../screens/ChooseLanguage';

const Stack = createNativeStackNavigator();

export default function AuthenticationRoute() {
  return (
    <LanguageContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="ChooseLanguage" component={ChooseLanguage} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </LanguageContextProvider>
  );
}
