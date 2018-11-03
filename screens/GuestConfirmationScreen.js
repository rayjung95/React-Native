import React, { Component } from 'react'
import { Easing, Animated, Image, ImageBackground, PanResponder, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LocksComponent from "../components/LocksComponent";
import Layout from "../constants/Layout";
import EventCreationComponent from '../components/EventCreationComponent.js';

const SCREEN_HEIGHT = Layout.window.height;
const SCREEN_WIDTH = Layout.window.width;

export default class GuestConfirmationScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.eventCreationTop = new Animated.Value(1);
    this.position = new Animated.ValueXY();
    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-25deg', '0deg', '25deg'],
      extrapolate: 'clamp'
    });
    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    };

    this.state = {
      imageIndex: 0,
      array: [
        { 'img': require('../assets/Pngs/girlphoto.imageset/girlphoto.png') },
        { 'img': require('../assets/Pngs/girlphoto.imageset/girlphoto.png') },
        { 'img': require('../assets/Pngs/girlphoto.imageset/girlphoto.png') },
        { 'img': require('../assets/Pngs/girlphoto.imageset/girlphoto.png') },
        { 'img': require('../assets/Pngs/girlphoto.imageset/girlphoto.png') },
        { 'img': require('../assets/Pngs/girlphoto.imageset/girlphoto.png') },
      ],
      isMoving: false,
      eventCreationHidden: true,
    }

  }

  componentWillMount() {
    this.imagePanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gs) => {
        this.setState({ isMoving: true })
        // console.log('MOVING', gs.dx, gs.dy)
        // this.imageXPos.setValue(gs.dx)
        this.position.setValue({ x: gs.dx, y: gs.dy })
      },
      onPanResponderRelease: (evt, gs) => {
        console.log('RELEASED');
        this.setState({ isMoving: false })
        if (gs.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gs.dy }
          }).start(() => {
            this.setState({
              imageIndex: this.state.imageIndex + 1
            }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        } else if (gs.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gs.dy }
          }).start(() => {
            this.setState({
              imageIndex: this.state.imageIndex + 1
            }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start()
        }
      }
    });
  }


  _toggleEventCreation = () => {
    const opposite = !this.state.eventCreationHidden;
    this.setState({
      eventCreationHidden: opposite,
    });


    const theValue = this.state.eventCreationHidden ? 0 : 1;
    Animated.timing(this.eventCreationTop, {
      toValue: theValue,
      duration: 500,
      easing: Easing.ease,
    }).start();

  }

  lock = () => {
    console.log('lock!')
    Animated.spring(this.position, {
      toValue: { x: -SCREEN_WIDTH - 80, y: SCREEN_HEIGHT / 2 }
    }).start(() => {
      this.setState({
        imageIndex: this.state.imageIndex + 1
      }, () => {
        this.position.setValue({ x: 0, y: 0 })
      })
    })
  }
  unlock = () => {
    console.log('unlock!')
    Animated.spring(this.position, {
      toValue: { x: SCREEN_WIDTH + 80, y: SCREEN_HEIGHT / 2 }
    }).start(() => {
      this.setState({
        imageIndex: this.state.imageIndex + 1
      }, () => {
        this.position.setValue({ x: 0, y: 0 })
      })
    })
  }


  renderImage = () => {
    return this.state.array.map((item, i) => {
      if (i < this.state.imageIndex) {
        return null
      }
      else if (i === this.state.imageIndex) {
        return (

          <Animated.View
            {...this.imagePanResponder.panHandlers}
            key={i}
            style={[this.rotateAndTranslate, styles.cardContainer]}
          >
            <TouchableOpacity onPress={() => this.props.navigation.navigate('GuestInfoConfirmation')}>
              <Image source={item.img} />
            </TouchableOpacity>
            <View>
              <Text style={{ fontFamily: 'Roboto', fontSize: 25, color: '#505050' }}>Scarlett, 31</Text>
            </View>

          </Animated.View>

        )
      }
      else {
        return (
          <Animated.View
            key={i}
            style={styles.cardContainer}
          >
            <Image source={item.img} />
            <Text style={{ fontFamily: 'Roboto', fontSize: 25, color: '#505050' }}>Scarlett, 31</Text>
          </Animated.View>
        )
      }
    }).reverse();
  }

  render() {
    const eventCreationInterpolate = this.eventCreationTop.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"]
    })

    const eventCreationStyle = {
      top: eventCreationInterpolate,
    }
    return (
      <ImageBackground style={styles.background} source={require('../assets/Pngs/bg.imageset/bg.png')}>

        <View style={styles.header}>
          <View style={styles.menu1}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('UserCalender')}>
              <View style={styles.backArrow}>
                <Image source={require('../assets/Icons/go-back-left-arrow/go-back-left-arrow.png')} style={styles.backArrowImage} />
              </View>
            </TouchableOpacity>
            <View style={{
              width: SCREEN_WIDTH * 0.6,
              height: '100%',
              alignItems: 'flex-start',
              justifyContent: 'center',
              marginLeft: 30
            }}>
              <Text style={{ color: 'white', fontFamily: 'Roboto', fontSize: 20, }}>Amazing friday
                                night</Text>
              <Text style={{ color: 'white', fontFamily: 'Roboto', fontSize: 13, }}>sat, 10:00pm, Sep
                                26</Text>
            </View>
          </View>
          <View style={styles.menu2}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Messages')}>
              <Image style={{ width: 26, height: 24 }}
                source={require('../assets/Icons/not_message.imageset/not_message.png')} />
              {/* <Image style={{width:24,height:24, marginLeft:15}} source={require('../assets/Icons/event_yellow/calendar.png')} /> */}
            </TouchableOpacity>
          </View>
        </View>

        {this.renderImage()}
        <LocksComponent isMoving={this.state.isMoving} position={this.position} lock={this.lock} unlock={this.unlock} />

        <View style={styles.footer}>
          <TouchableOpacity onPress={() => this._toggleEventCreation()}>
            <Image style={styles.footerUpArrowImage} source={require('../assets/Icons/up_arrow/up_arrow.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._toggleEventCreation()}>
            <Image style={styles.footerImage}
              source={require('../assets/Icons/create_event_icon/create_event_icon.png')} />
          </TouchableOpacity>
        </View>
        <Animated.View style={[{ position: "absolute", width: SCREEN_WIDTH, height: SCREEN_HEIGHT }, eventCreationStyle]}>
          <EventCreationComponent title='Edit event' buttonText='Update' close={this._toggleEventCreation} {...this.props} />
        </Animated.View>

      </ImageBackground>

    )
  }
}

const styles = StyleSheet.create({
  backArrow: {
    left: 0,
    marginRight: SCREEN_WIDTH * 0.06,
    elevation: 2,
    alignItems: 'center',
  },
  backArrowImage: {
    width: SCREEN_WIDTH * 0.07,
    height: SCREEN_WIDTH * 0.07,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
    height: SCREEN_HEIGHT * 0.09,
    marginTop: 20,
  },
  menu1: {
    flexDirection: 'row',
    width: SCREEN_WIDTH * 0.67,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: 20,
  },
  menu2: {
    flexDirection: 'row',
    width: SCREEN_WIDTH * 0.33,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30

  },
  cardContainer: {
    width: SCREEN_WIDTH * 0.8618,
    height: SCREEN_HEIGHT * 0.57432432,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: SCREEN_HEIGHT / 2 - SCREEN_HEIGHT * 0.5217 / 2,
    backgroundColor: '#ffff',
  },
  footer: {
    width: SCREEN_WIDTH * 0.0761326,
    height: SCREEN_WIDTH * 0.116,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    // backgroundColor: 'aqua',
    marginTop: SCREEN_HEIGHT * 0.89914286
  },
  footerUpArrowImage: {
    width: SCREEN_WIDTH * 0.0761326
  },
  footerImage: {
    width: SCREEN_WIDTH * 0.058,
    height: SCREEN_WIDTH * 0.058
  }
});