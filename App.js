import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GuestHostProfile from './components/GuestHostProfile';
import NoScroll from './components/NoScroll';
import GuestsList from './components/GuestsList';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <NoScroll/>
      </View>
    );
  }
}