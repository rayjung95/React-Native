import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar, StyleSheet} from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import RendevousNavigator from './navigation/RendevousNavigator'

import GuestHostProfile from './components/GuestHostProfile';
import NoScroll from './components/NoScroll';
import GuestsList from './components/GuestsList';

export default class App extends React.Component {
  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
          <RendevousNavigator />
        </View>
      );
    }
  }
}