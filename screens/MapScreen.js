import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, Image, View, StyleSheet, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import MapViewComponent from './components/MapViewComponent';
import MapView, { Circle, Marker } from 'react-native-maps';
import Permissions from 'react-native-permissions';
import Layout from "../constants/Layout";

const apiKey = 'AIzaSyCdkuIQGc6zBWg22z3i7EalpRQL_79RLjU';

const SCREEN_HEIGHT = Layout.window.height;
const SCREEN_WIDTH = Layout.window.width;

const { width, height } = Dimensions.get('window');


export default class MapScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      region: {
        latitude: 0,
        latitudeDelta: 0,
        longitude: 0,
        longitudeDelta: 0
      },
      coordinate: {
        latitude: 0,
        longitude: 0,
      },
      locationPermission: 'unknown',
      position: 'unknown',
      set: true,
    };


  }

  _onPress = (data, details) => {
    console.log(data);
    const position = {
      latitude: details.geometry.location.lat,
      latitudeDelta: 0.1,
      longitude: details.geometry.location.lng,
      longitudeDelta: 0.1,
    }
    this.setState({ region: position, title: data.description });
    this.setMarkandCircle(position.latitude, position.longitude);
  }

  goToCurrentLocation = () => {
    this.setState({ region: this.state.currentRegion, title: 'Current Position' })
    this.setMarkandCircle(this.state.currentRegion.latitude, this.state.currentRegion.longitude);
  }

  _requestPermission() {
    Permissions.request('location')
      .then(response => {
        this.setState({
          locationPermission: response
        })
        console.log("Response: " + response);
      });
  }

  setMarkandCircle = (lat, lng) => {
    console.log('setmrk: ' + lat);
    console.log('setmrk: ' + lng);

    this.setState({
      coordinate: {
        latitude: lat,
        longitude: lng
      },
      set: false,
    })
  }

  doStuff = (data, details) => {
    let data2 = data;
    data
    // this.setState({

    // }, () => console.log())
  }


  componentDidMount = async () => {
    this._requestPermission();
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('my position' + position.coords.latitude + ', ' + position.coords.longitude);
      let coordinates = position.coords.latitude + ', ' + position.coords.longitude;
      this.setState({
        position: coordinates,
        currentRegion: {
          latitude: position.coords.latitude,
          latitudeDelta: 0.1,
          longitude: position.coords.longitude,
          longitudeDelta: 0.1,
        },
        region: {
          latitude: position.coords.latitude,
          latitudeDelta: 0.1,
          longitude: position.coords.longitude,
          longitudeDelta: 0.1,
        },

        title: 'Current Position',

      })
      this.setMarkandCircle(position.coords.latitude, position.coords.longitude)
    },
      (error) => alert(JSON.stringify(error)));
  }


  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={{ justifyContent: 'center', alignItems: 'center', bottom: SCREEN_HEIGHT * (16 / 592), right: SCREEN_WIDTH * (16 / 360), width: SCREEN_WIDTH * (57 / 360), height: SCREEN_WIDTH * (57 / 360), position: 'absolute' }}>
          <TouchableOpacity onPress={() => this.goToCurrentLocation()}>
            <Image resizeMode='contain' style={{ flex: 1 }} source={require('../assets/Icons/get-current-location-icon/current-location.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.map}>
          <MapView
            region={this.state.region}
            style={styles.map}
            provider="google"
          // customMapStyle={gMapsStyle}
          >
            <Marker
              coordinate={this.state.coordinate}
              title={this.state.title}

            />


          </MapView>
        </View>
        <GooglePlacesAutocomplete
          placeholder='Search'
          minLength={0} // minimum length of text to search
          autoFocus={false}
          returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
          listViewDisplayed={false}   // true/false/undefined
          fetchDetails={true}
          renderDescription={row => row.description} // custom description render
          // onChangeText={}
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            // this.setState({});
            this._onPress(data, details)
          }}
          onEndEditing={console.log('hi')}

          getDefaultValue={() => ''}

          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: apiKey,
            language: 'en', // language of the results
            // default: 'geocode'
          }}

          styles={{
            container: {
              zIndex: 5,

            },
            textInputContainer: {
              width: '100%',
              zIndex: 5,
              backgroundColor: '#2b0663',
              borderWidth: 0,

            },
            description: {
              fontWeight: 'bold',
              zIndex: 5,

            },
            predefinedPlacesDescription: {
              color: '#1faadb',
              zIndex: 5,
            },

            listView: {
              zIndex: 5,
              opacity: 1,
            },

            textInput: {

            },

            loader: {

            },

            powered: {
              opacity: 0
            },

            poweredContainer: {
              opacity: 0,
            },

            separator: {

            },

            row: {
              backgroundColor: 'white',

            }



          }}

          // currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
          // currentLocationLabel="Current location"
          nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          GoogleReverseGeocodingQuery={{
            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
          }}
          GooglePlacesSearchQuery={{
            // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
            rankby: 'distance',
          }}
          debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
          renderLeftButton={() =>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: SCREEN_WIDTH * (40 / 360), height: SCREEN_WIDTH * (40 / 360)}}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image resizeMode='contain' style={{ marginHorizontal: SCREEN_WIDTH * (10/ 360), marginVertical: SCREEN_HEIGHT * (10/592), flex: 1 }} source={require('../assets/Icons/go-back-left-arrow/go-back-left-arrow.png')} />
              </TouchableOpacity>
            </View>
          }

        />
      </View>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    flexDirection: 'column',
  },

  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'dodgerblue',
    zIndex: -1,
  },

  map: {
    zIndex: -5,
    position: 'absolute',
    width: "100%",
    height: "100%",
    flexDirection: 'column',
  },
});

var gMapsStyle = [
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#7c93a3"
      },
      {
        "lightness": "-10"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c2d1d6"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#dde3e3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#c2d1d6"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#a9b4b8"
      },
      {
        "lightness": "0"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a3c7df"
      }
    ]
  }
]