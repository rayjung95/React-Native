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

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default class GuestConfirmationScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.imageXPos = new Animated.Value(0);
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
    }
    this.unlockOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0.1, 1],
      // extrapolate: 'clamp'
    })

    this.lockOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.1, 0],
      // extrapolate: 'clamp'
    })

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

  renderImage = () => {
    // console.log(this.state.array)
    return this.state.array.map((item, i) => {
      if (i < this.state.imageIndex) {
        return null
      }
      else if (i === this.state.imageIndex) {
        return (
          <Animated.View
            {...this.imagePanResponder.panHandlers}
            key={i}
            style={[this.rotateAndTranslate, styles.card]}
          >
            <Image source={item.img} />
            <Text style={{ fontFamily: 'Roboto', fontSize: 25, color: '#505050' }}>Scarlett, 31</Text>
          </Animated.View>
        )
      }
      else {
        return (
          <Animated.View
            key={i}
            style={styles.card}
          >
            <Image source={item.img} />
            <Text style={{ fontFamily: 'Roboto', fontSize: 25, color: '#505050' }}>Scarlett, 31</Text>
          </Animated.View>
        )
      }
    }).reverse();
  }

  render() {
    return (
      <ImageBackground style={styles.background} source={require('../assets/Pngs/bg.imageset/bg.png')}>
        <View style={styles.header}>
          <View style={styles.menu1}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('UserCalender')}>
              <Image source={require('../assets/Icons/go-back-left-arrow/go-back-left-arrow.png')} />
            </TouchableOpacity>
            <View style={{
              width: SCREEN_WIDTH * 0.6,
              height: '100%',
              alignItems: 'flex-start',
              justifyContent: 'center',
              marginLeft: 30
            }}>
              <Text style={{ color: 'white', fontFamily: 'Roboto', fontSize: 20, }}>Amazing friday night</Text>
              <Text style={{ color: 'white', fontFamily: 'Roboto', fontSize: 13, }}>sat, 10:00pm, Sep 26</Text>
            </View>
          </View>
          <View style={styles.menu2}>
            <Image style={{ width: 26, height: 24 }}
              source={require('../assets/Icons/not_message.imageset/not_message.png')} />
            {/* <Image style={{width:24,height:24, marginLeft:15}} source={require('../assets/Icons/event_yellow/calendar.png')} /> */}
          </View>
        </View>

        {this.renderImage()}
        {this.state.isMoving ?
          <View style={styles.chooseButton}>
            <Animated.View
              style={{ opacity: this.lockOpacity, width: SCREEN_HEIGHT * 0.1, height: SCREEN_HEIGHT * 0.1 }}>
              <Image style={styles.lockImage}
                source={require('../assets/Icons/lock_highlight.imageset/lock_highlight.png')} />
            </Animated.View>
            <Animated.View
              style={{ opacity: this.unlockOpacity, width: SCREEN_HEIGHT * 0.1, height: SCREEN_HEIGHT * 0.1 }}>
              <Image style={styles.lockImage}
                source={require('../assets/Icons/unlock_highlight.imageset/unlock_highlight.png')} />
            </Animated.View>
          </View>
          :
          <View style={styles.chooseButton}>
            <Animated.View style={{ width: SCREEN_HEIGHT * 0.1, height: SCREEN_HEIGHT * 0.1 }}>
              <Image style={styles.lockImage} source={require('../assets/Icons/lock.imageset/lock.png')} />
            </Animated.View>
            <Animated.View style={{ width: SCREEN_HEIGHT * 0.1, height: SCREEN_HEIGHT * 0.1 }}>
              <Image style={styles.lockImage} source={require('../assets/Icons/unlock.imageset/unlock.png')} />
            </Animated.View>
          </View>
        }
        <View style={styles.footer}>
          <Image style={styles.footerUpArrowImage} source={require('../assets/Icons/up_arrow/up_arrow.png')} />
          <Image style={styles.footerImage}
            source={require('../assets/Icons/create_event_icon/create_event_icon.png')} />
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
  card: {
    width: SCREEN_WIDTH * 0.8618,
    height: SCREEN_HEIGHT * 0.5217,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: SCREEN_HEIGHT / 2 - SCREEN_HEIGHT * 0.5217 / 2,
    backgroundColor: '#ffff',
  },
  cardContentChild: {
    width: 300,
    height: 250,
    marginTop: 100,
    flexDirection: 'column',
    alignItems: 'center'
  },
  profile: {
    width: 150,
    height: 150,
    position: 'absolute',
    left: 150 - (150 / 2),
    top: 0
  },
  chooseButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: SCREEN_HEIGHT * 0.0621118
  },
  lockImage: {
    width: '100%',
    height: '100%',
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