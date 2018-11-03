import React from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import DateTimeComponent from './DateTimeComponent';
import Layout from '../constants/Layout';
import { Icon } from 'react-native-elements'

const SCREEN_HEIGHT = Layout.window.height;
const SCREEN_WIDTH = Layout.window.width;

export default class EventCreationComponent extends React.Component {
  static navigationOptions = {
    header: null,
  };

  closeComponent = () => {
    this.props.close();
  }

  onPressEvent = () => {
    Alert.alert(
      '',
      'By accepting the terms you accept all liabilities and repercussions done to you or by you at any event in connection / relation through Rendevous presently or in the future.',
      [
        { text: 'Accept', onPress: () => console.log('Ask me later pressed') },
        { text: 'Deny', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
      ],
      { cancelable: false }
    )
  }
  render() {
    return (
      <View style={styles.outer}>
        {/* <View style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT * (592 / 493), }}> */}
        <View style={{ backgroundColor: 'transparent', width: SCREEN_WIDTH, height: SCREEN_HEIGHT * (99 / 592) }}></View>
        <TouchableOpacity onPress={() => this.closeComponent()} style={{ width: SCREEN_WIDTH * (38 / 360), height: SCREEN_WIDTH * (38 / 360), backgroundColor: '#f2f3f4', borderTopLeftRadius: SCREEN_HEIGHT * (16 / 592), borderTopRightRadius: SCREEN_HEIGHT * (16 / 592) }}>
          <View
            style={{
              flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', borderTopLeftRadius: SCREEN_HEIGHT * (16 / 592), borderTopRightRadius: SCREEN_HEIGHT * (16 / 592)
            }}>
            <Image style={{ width: SCREEN_WIDTH * (21 / 360), height: SCREEN_HEIGHT * (6.33 / 592) }} source={require('../assets/Icons/down_arrow/down_arrow.png')} />
          </View>
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ width: SCREEN_WIDTH, flexDirection: 'column', backgroundColor: '#f2f3f4', borderTopLeftRadius: SCREEN_WIDTH * (10 / 360), borderTopRightRadius: SCREEN_WIDTH * (10 / 360) }}>
          <View style={{ height: SCREEN_HEIGHT * (54 / 592), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ flex: 1, fontSize: 18, color: 'black', paddingLeft: 20 }}>
              Create new event
              </Text>
            <TouchableOpacity onPress={() => this.closeComponent()} style={{ backgroundColor: 'transparent', marginRight: 15, marginTop: 10, marginBottom: 6 }}>
              <Image style={{ resizeMode: 'contain' }} source={require('../assets/Icons/close.imageset/close.png')} />
            </TouchableOpacity>

          </View>
          <View style={{ height: SCREEN_HEIGHT * (43 / 592), flexDirection: 'row' }}>
            <TextInput multiline={false} placeholderTextColor='#8e8e93' underlineColorAndroid='rgba(0,0,0,0)' style={{ marginTop: 0, flex: 1, backgroundColor: 'white', fontSize: SCREEN_HEIGHT * (16/592), paddingLeft: 15, borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: 'rgba(0,0,0, 0.1)' }} fontFamily='Roboto' placeholder='Title' />
          </View>

          <TouchableOpacity
            style={{ height: SCREEN_HEIGHT * (43 / 592), backgroundColor: 'white', paddingLeft: 15, borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: 'rgba(0,0,0, 0.1)', flexDirection: 'row', alignItems: 'center' }}
            onPress={() => this.props.navigation.navigate('Map')}
          >
            <Text style={{ fontSize: SCREEN_HEIGHT * (16/592), fontFamily: 'Roboto', color: '#8e8e93' }}>Location</Text>
          </TouchableOpacity>


          <View style={{ flex: 2, backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center' }}>
            <Image style={{ marginVertical: SCREEN_HEIGHT * (8 / 592), marginLeft: SCREEN_WIDTH * (17 / 360), marginRight: SCREEN_WIDTH * (12 / 360) }} source={require('../assets/Icons/event_away_lock.imageset/event_away_lock.png')} />
            <Text style={{ marginVertical: SCREEN_HEIGHT * (11 / 592) }}>Location is private until guest is confirmed</Text>
          </View>

          <View style={{ height: SCREEN_HEIGHT * (43 / 592), backgroundColor: 'white', borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: 'rgba(0,0,0, 0.1)' }}>
            <DateTimeComponent word="Starts" />
            {/* <Text>Starts</Text> */}
          </View>
          <View style={{ height: SCREEN_HEIGHT * (43 / 592),backgroundColor: 'white', borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: 'rgba(0,0,0, 0.1)' }}>
            <DateTimeComponent word="Ends" />
            {/* <Text>Ends</Text> */}
          </View>
          {/* <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white', marginBottom: 40, marginTop: 40, justifyContent: 'center'}}> */}
          <TextInput multiline={false} placeholderTextColor='#8e8e93' underlineColorAndroid='rgba(0,0,0,0)' style={{ marginBottom: 40, marginTop: 40, height: SCREEN_HEIGHT * (43 / 592), backgroundColor: 'white', fontSize: SCREEN_HEIGHT * (16/592), paddingLeft: 15, borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: 'rgba(0,0,0, 0.1)' }} fontFamily='Roboto' placeholder='Website (Optional)' />
          {/* <Text style={{ fontSize: 18, color: '#8e8e93', marginLeft: 15 }} fontFamily='Roboto'>Contact Info (Optional)</Text> */}
          <View style={{ height: SCREEN_HEIGHT * (100 / 592), backgroundColor: 'white', borderTopWidth: 0, paddingLeft: 15 , paddingTop: SCREEN_HEIGHT * (17/592)}}>
            <TextInput multiline={true} placeholderTextColor='#8e8e93' underlineColorAndroid='rgba(0,0,0,0)' style={{ fontSize: SCREEN_HEIGHT * (15/592) }} fontFamily='Roboto' placeholder='Tell us about your event' />
          </View>
          <View style={{ paddingVertical: SCREEN_HEIGHT * (26/592),paddingHorizontal: SCREEN_WIDTH * (34/360), height: SCREEN_HEIGHT * (80 / 592), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: SCREEN_HEIGHT * (34/592), width: SCREEN_WIDTH * (291/360), borderColor: 'black', borderWidth: 0.3 }}>
              <Text style={{ fontSize: SCREEN_HEIGHT * (13/592), color: 'black', textAlign: 'center' }} fontFamily='Roboto' >Invite Friends</Text>
            </View>
          </View>
          <TouchableOpacity onPress={this.onPressEvent} style={{ height: SCREEN_HEIGHT * (54 / 592), backgroundColor: '#fdd302', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: SCREEN_HEIGHT * (16/592), color: 'white', fontWeight: 'bold' }} fontFamily='Roboto' >Post</Text>
          </TouchableOpacity>




        </ScrollView>

      </View>
      // </View >
    );
  }
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    // justifyContent: 'space-between',
    alignItems: 'center',
  }

});
