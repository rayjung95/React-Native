import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import LoginScreen from '../screens/LoginScreen';
import LandingScreen from '../screens/LandingScreen';
import GuestConfirmationScreen from '../screens/GuestConfirmationScreen';
import UserCalendarScreen from '../screens/UserCalendarScreen';
import UserSettingScreen from '../screens/UserSettingScreen';




const LoginStack = createStackNavigator({
  Home: LoginScreen,
});

LoginStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LandingStack = createStackNavigator({
  Home: LandingScreen,
});

LandingStack.navigationOptions = {
  tabBarLabel: 'Landing',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const GuestConfirmationStack = createStackNavigator({
  Home: GuestConfirmationScreen,
});

GuestConfirmationStack.navigationOptions = {
  tabBarLabel: 'Guest Confirmation',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const UserCalendarStack = createStackNavigator({
  Home: UserCalendarScreen,
});

UserCalendarStack.navigationOptions = {
  tabBarLabel: 'User Calendar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const UserSettingStack = createStackNavigator({
  Home: UserSettingScreen,
});

UserSettingStack.navigationOptions = {
  tabBarLabel: 'User Setting',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};


export default createBottomTabNavigator({
  LoginStack,
  LandingStack,
  GuestConfirmationStack,
  UserCalendarStack,
  UserSettingStack,
});
