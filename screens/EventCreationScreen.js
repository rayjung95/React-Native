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
import DateTimeComponent from '../components/DateTimeComponent';
import {Icon} from 'react-native-elements'


export default class EventCreationScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  onPressEvent() {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    )
  }
  render() {
    return (
      <View style={styles.outer}>
        <StatusBar hidden={true} />
        <ImageBackground source={require('../assets/Pngs/bg.imageset/bg.png')} style={{ width: '100%', height: '100%' }}>
          <View style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 20,
            padding: 10
          }}>
            <Image style={{ height: 40, resizeMode: "contain", marginLeft: 2 }} source={require('../assets/Icons/menu.imageset/menu.png')}></Image>
            <Image style={styles.topLogo} source={require('../assets/logo/logo.png')}></Image>
            <Image style={{ height: 40, resizeMode: "contain", marginRight: 2 }} source={require('../assets/Icons/calendar_icon.imageset/calendar_icon.png')}></Image>
          </View>
          <View style={{ flex: 13 }}>
            <View style={{ flex: 1, alignItems: 'center', marginBottom: 15 }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Landing')}>
                    <Image source={require('../assets/Icons/footer_selected.imageset/footer_selected.png')}></Image>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 15, flexDirection: 'column', backgroundColor: '#f2f3f4', borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ flex: 1, fontSize: 18, color: 'black', paddingLeft: 20, paddingTop: 10 }}>
                  Create new event
              </Text>
              </View>
              <TextInput multiline={false} placeholderTextColor='#8e8e93' underlineColorAndroid='rgba(0,0,0,0)' style={{ marginTop: 0, flex: 1, backgroundColor: 'white', fontSize: 18, paddingLeft: 15, borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: 'rgba(0,0,0, 0.1)' }} fontFamily='Roboto' placeholder='Title' />
              <View style={{ flex: 1, marginBottom: 40, flexDirection: 'row' }}>
                <TextInput multiline={false} placeholderTextColor='#8e8e93' underlineColorAndroid='rgba(0,0,0,0)' style={{ flex: 2, backgroundColor: 'white', fontSize: 18, paddingLeft: 15, borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: 'rgba(0,0,0, 0.1)' }} fontFamily='Roboto' placeholder='Location' />
                <Icon
                  style={{ flex: 1 , marginRight: 200, backgroundColor: 'white'}}
                  disabledStyle={{backgroundColor: 'white'}}
                  name='location-arrow'
                  type='font-awesome'
                  color='black'
                  onPress={() => console.log('hello')} />
              </View>

              <View style={{ flex: 1, backgroundColor: 'white', borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: 'rgba(0,0,0, 0.1)' }}>
                <DateTimeComponent word="Starts" />
                {/* <Text>Starts</Text> */}
              </View>
              <View style={{ flex: 1, backgroundColor: 'white', borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: 'rgba(0,0,0, 0.1)' }}>
                <DateTimeComponent word="Ends" />
                {/* <Text>Ends</Text> */}
              </View>
              {/* <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white', marginBottom: 40, marginTop: 40, justifyContent: 'center'}}> */}
              <TextInput multiline={false} placeholderTextColor='#8e8e93' underlineColorAndroid='rgba(0,0,0,0)' style={{ marginBottom: 40, marginTop: 40, flex: 1, backgroundColor: 'white', fontSize: 18, paddingLeft: 15, borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: 'rgba(0,0,0, 0.1)' }} fontFamily='Roboto' placeholder='Website (Optional)' />
              {/* <Text style={{ fontSize: 18, color: '#8e8e93', marginLeft: 15 }} fontFamily='Roboto'>Contact Info (Optional)</Text> */}
            </View>
            <TextInput multiline={true} placeholderTextColor='#8e8e93' underlineColorAndroid='rgba(0,0,0,0)' style={{ flex: 4, backgroundColor: 'white', fontSize: 18, paddingLeft: 15, borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: 'rgba(0,0,0, 0.1)' }} fontFamily='Roboto' placeholder='Tell us about your event' />
          </View>
          <View style={{ flex: 2, height: 150, backgroundColor: '#f2f3f4', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ borderColor: 'black', borderWidth: 1, paddingTop: 5, paddingBottom: 5, paddingLeft: 100, paddingRight: 100 }}>
              <Text style={{ fontSize: 20, color: 'black' }} fontFamily='Roboto' >Invite Friends</Text>
            </View>
          </View>
          <TouchableOpacity onPress={this.onPressEvent} style={{ flex: 2, height: 150, backgroundColor: '#fdd302', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 35, color: 'white' }} fontFamily='Roboto' >Post</Text>
          </TouchableOpacity>
        </ImageBackground>
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
