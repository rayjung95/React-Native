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
  View
} from 'react-native';
import DateTimeComponent from './DateTimeComponent';
import { Icon } from 'react-native-elements'


export default class EventCreationComponent extends React.Component {
  static navigationOptions = {
    header: null,
  };

  onPressEvent() {
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
        <View style={{ width: '100%', height: '100%' , backgroundColor: 'transparent'}}>
          <View style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 20,
            padding: 10
          }}>
          </View>
          <View style={{ flex: 13 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            </View>
            <View style={{ flex: 15, flexDirection: 'column', backgroundColor: '#f2f3f4', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
              <View style={{ flex: 2, justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={{ flex: 1, fontSize: 18, color: 'black', paddingLeft: 20, paddingTop: 10 }}>
                  Create new event
                </Text>
                <Image style={{ marginRight: 15, marginTop: 10 }} source={require('../assets/Icons/close.imageset/close.png')} />
              </View>
              <View style={{ flex: 2, flexDirection: 'row' }}>
                <TextInput multiline={false} placeholderTextColor='#8e8e93' underlineColorAndroid='rgba(0,0,0,0)' style={{ marginTop: 0, flex: 1, backgroundColor: 'white', fontSize: 18, paddingLeft: 15, borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: 'rgba(0,0,0, 0.1)' }} fontFamily='Roboto' placeholder='Title' />
              </View>

              <TouchableOpacity
                style={{ flex: 2, backgroundColor: 'white', paddingLeft: 15, borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: 'rgba(0,0,0, 0.1)', flexDirection: 'row', alignItems: 'center' }}
                onPress={() => this.props.navigation.navigate('Map')}
                >
                <Text style={{ fontSize: 18, fontFamily: 'Roboto', color: '#8e8e93' }}>Location</Text>
              </TouchableOpacity>


              <View style={{ flex: 2, backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ marginLeft: 15, marginRight: 15 }} source={require('../assets/Icons/event_away_lock.imageset/event_away_lock.png')} />
                <Text>Location is private until guest is confirmed</Text>
              </View>

              <View style={{ flex: 2, backgroundColor: 'white', borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: 'rgba(0,0,0, 0.1)' }}>
                <DateTimeComponent word="Starts" />
                {/* <Text>Starts</Text> */}
              </View>
              <View style={{ flex: 2, backgroundColor: 'white', borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: 'rgba(0,0,0, 0.1)' }}>
                <DateTimeComponent word="Ends" />
                {/* <Text>Ends</Text> */}
              </View>
              {/* <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white', marginBottom: 40, marginTop: 40, justifyContent: 'center'}}> */}
              <TextInput multiline={false} placeholderTextColor='#8e8e93' underlineColorAndroid='rgba(0,0,0,0)' style={{ marginBottom: 40, marginTop: 40, flex: 2, backgroundColor: 'white', fontSize: 18, paddingLeft: 15, borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: 'rgba(0,0,0, 0.1)' }} fontFamily='Roboto' placeholder='Website (Optional)' />
              {/* <Text style={{ fontSize: 18, color: '#8e8e93', marginLeft: 15 }} fontFamily='Roboto'>Contact Info (Optional)</Text> */}
            </View>
            <View style={{ flex: 5, backgroundColor: 'white', borderTopWidth: 0, paddingLeft: 15 }}>
              <TextInput multiline={true} placeholderTextColor='#8e8e93' underlineColorAndroid='rgba(0,0,0,0)' style={{ fontSize: 18 }} fontFamily='Roboto' placeholder='Tell us about your event' />
            </View>

          </View>
          <View style={{ flex: 2, height: 150, backgroundColor: '#f2f3f4', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ borderColor: 'black', borderWidth: 0.3, paddingTop: 5, paddingBottom: 5, paddingLeft: 100, paddingRight: 100 }}>
              <Text style={{ fontSize: 20, color: 'black' }} fontFamily='Roboto' >Invite Friends</Text>
            </View>
          </View>
          <TouchableOpacity onPress={this.onPressEvent} style={{ flex: 1.5, height: 20, backgroundColor: '#fdd302', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 25, color: 'white' }} fontFamily='Roboto' >Post</Text>
          </TouchableOpacity>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  outer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  topLogo: {
    width: 175,
    height: 50,
    resizeMode: "contain",
  },

});
