import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Profile from '../screens/Profile';
import Notifications from '../screens/Notifications';
import Schedule from '../screens/Schedule';
import colors from '../styles/colors';
import LanguageContextProvider from '../contexts/LanguageContext';

const Tab = createBottomTabNavigator();

export default function MainRoute() {
  return (
    <LanguageContextProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused}) => {
              let iconColor = '',
                iconName = '';
              iconColor = focused ? colors.default_blue : colors.gray;
              if (route.name === 'Home') {
                iconName = 'home';
                return <Icon name={iconName} size={35} color={iconColor} />;
              } else if (route.name === 'Settings') {
                iconName = 'settings';
              } else if (route.name === 'Schedule') {
                iconName = 'calendar';
              } else if (route.name === 'Notifications') {
                iconName = 'bell';
              } else {
                iconName = 'smile';
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={27} color={iconColor} />;
            },
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: colors.light_gray,
              height: 70,
            },
          })}>
          <Tab.Screen name="Settings" component={Settings} />
          <Tab.Screen name="Schedule" component={Schedule} />
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Notifications" component={Notifications} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </LanguageContextProvider>
  );
}
