import React, { Component } from 'react'
import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Layout from '../constants/Layout'
import EventComponent from "../components/EventComponent";
import { connect } from 'react-redux'

class LandingScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  
  renderImage = () => {
    return this.state.array.map((item, i) => {
        if (i < this.state.imageIndex) {
            return null
        } else if (i === this.state.imageIndex) {
            return (
                <Animated.View
                    {...this.imagePanResponder.panHandlers}
                    key={i}
                    style={[this.rotateAndTranslate, styles.card]}
                >
                    <EventComponent eventHostName='Johnny'/>
                </Animated.View>
            )
        } else {
            return (
                <Animated.View
                    key={i}
                    style={styles.card}>
                    <EventComponent eventHostName='Johnny'/>
                </Animated.View>
            )
        }
    }).reverse();
};

  constructor(props) {
    super(props);
    this.imageXPos = new Animated.Value(0);
    this.position = new Animated.ValueXY();
    this.rotate = this.position.x.interpolate({
      inputRange: [-Layout.window.width / 2, 0, Layout.window.width / 2],
      outputRange: ['-25deg', '0deg', '25deg'],
      extrapolate: 'clamp'
    });
    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    }
    this.unlockOpacity = this.position.x.interpolate({
      inputRange: [-Layout.window.width / 2, 0, Layout.window.width / 2],
      outputRange: [0, 0, 1],
      // extrapolate: 'clamp'
    })

    this.lockOpacity = this.position.x.interpolate({
      inputRange: [-Layout.window.width / 2, 0, Layout.window.width / 2],
      outputRange: [1, 0, 0],
      // extrapolate: 'clamp'
    })

    this.state = {
      imageIndex: 0,
      array: [
        { 'img': require('../assets/Pngs/intro1.imageset/cards.png') },
        { 'img': require('../assets/Pngs/intro1.imageset/cards.png') },
        { 'img': require('../assets/Pngs/intro1.imageset/cards.png') },
        { 'img': require('../assets/Pngs/intro1.imageset/cards.png') },
        { 'img': require('../assets/Pngs/intro1.imageset/cards.png') },
        { 'img': require('../assets/Pngs/intro1.imageset/cards.png') },
      ],
      isMoving: false
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
            toValue: { x: Layout.window.width + 100, y: gs.dy }
          }).start(() => {
            this.setState({
              imageIndex: this.state.imageIndex + 1
            }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        } else if (gs.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -Layout.window.width - 100, y: gs.dy }
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

  render() {
    return (
      <ImageBackground style={styles.background} source={require('../assets/Pngs/bg.imageset/bg.png')}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileSetting')}>
            <View style={styles.menu1}>
              <Image source={require('../assets/Icons/setting_yellow/settings.png')} />
            </View>
          </TouchableOpacity>
          <View style={styles.menu2}>
            <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
              source={require('../assets/images/logo.png')} />
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('UserCalender')}>
            <View style={styles.menu3}>
              <Image source={require('../assets/Icons/event_yellow/calendar.png')} />
            </View>
          </TouchableOpacity>
        </View>

        {this.renderImage()}
        {this.state.isMoving ?
          <View style={styles.chooseButton}>
            <Animated.View style={{
              opacity: this.lockOpacity,
              width: Layout.window.height * 0.1,
              height: Layout.window.height * 0.1
            }}>
              <Image style={styles.lockImage}
                source={require('../assets/Icons/lock_highlight.imageset/lock_highlight.png')} />
            </Animated.View>
            <Animated.View style={{
              opacity: this.unlockOpacity,
              width: Layout.window.height * 0.1,
              height: Layout.window.height * 0.1
            }}>
              <Image style={styles.lockImage}
                source={require('../assets/Icons/unlock_highlight.imageset/unlock_highlight.png')} />
            </Animated.View>
          </View>
          :
          <View style={styles.chooseButton}>
            <Animated.View style={{ width: Layout.window.height * 0.1, height: Layout.window.height * 0.1 }}>
              <Image style={styles.lockImage} source={require('../assets/Icons/lock.imageset/lock.png')} />
            </Animated.View>
            <Animated.View style={{ width: Layout.window.height * 0.1, height: Layout.window.height * 0.1 }}>
              <Image style={styles.lockImage}
                source={require('../assets/Icons/unlock.imageset/unlock.png')} />
            </Animated.View>
          </View>
        }
        <View style={styles.footer}>
          <Image style={styles.footerUpArrowImage} source={require('../assets/Icons/up_arrow/up_arrow.png')} />
          <TouchableOpacity onPress={() => this.props.navigation.navigate('EventCreation')}>
            <Image style={styles.footerImage}
              source={require('../assets/Icons/create_event_icon/create_event_icon.png')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>

    )
  }
}

const styles = StyleSheet.create({
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
    height: Layout.window.height * 0.09,
    marginTop: 20,
    // backgroundColor:'red'
  },
  menu1: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    width: 24,
    // backgroundColor:'green',
    marginLeft: 15
  },
  menu2: {
    flexDirection: 'row',
    alignItems: 'center',
    // width:20,
    // height:15,
    width: Layout.window.width * 0.4,
    height: '100%',
    // backgroundColor:'yellow'
  },
  menu3: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    width: 24,
    // backgroundColor:'aqua',
    marginRight: 15
  },
  card: {
    width: Layout.window.width * 0.884,
    height: Layout.window.height * 0.619,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: Layout.window.height / 2 - 400 / 2,
    // backgroundColor:'green'
  },
  cardContent: {
    backgroundColor: '#ffff',
    width: '100%',
    height: '87%',
    marginTop: "15%",
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    // backgroundColor:'pink'
  },
  cardContentChild: {
    width: '93%',
    height: '80%',
    marginTop: '28%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor:'aqua'
  },
  profile: {
    width: Layout.window.width * 0.397,
    height: Layout.window.height * 0.223,
    position: 'absolute',
    left: Layout.window.width * 0.884 / 2 - (Layout.window.width * 0.397 / 2),
    top: 0
  },
  chooseButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: Layout.window.height * 0.0621118
    // height: 80,
    // marginTop:470
  },
  lockImage: {
    width: '100%',
    height: '100%',
    // marginBottom:30
  },
  footer: {
    width: Layout.window.width * 0.0761326,
    height: Layout.window.width * 0.116,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    // backgroundColor: 'aqua',
    marginTop: Layout.window.height * 0.89914286
  },
  footerUpArrowImage: {
    width: Layout.window.width * 0.0761326
  },
  footerImage: {
    width: Layout.window.width * 0.058,
    height: Layout.window.width * 0.058
  }
});

export const mapFromStoreToProps = (store) => {
  return {
    loading: store.loading
  }
}

export default connect(mapFromStoreToProps, null)(LandingScreen)
