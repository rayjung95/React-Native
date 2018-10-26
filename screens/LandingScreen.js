import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Image, Text, PanResponder, Animated, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default class LandingScreen extends Component {
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
    this.rotateAndTranslate  =  {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
    ]}
    this.unlockOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      // extrapolate: 'clamp'
    })

    this.lockOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      // extrapolate: 'clamp'
    })

    this.state={
      imageIndex: 0,
      array : [
        {'img': require('../assets/Pngs/intro1.imageset/cards.png')},
        {'img': require('../assets/Pngs/intro1.imageset/cards.png')},
        {'img': require('../assets/Pngs/intro1.imageset/cards.png')},
        {'img': require('../assets/Pngs/intro1.imageset/cards.png')},
        {'img': require('../assets/Pngs/intro1.imageset/cards.png')},
        {'img': require('../assets/Pngs/intro1.imageset/cards.png')},
      ],
      isMoving: false
    }

  }

  toggleLock = () => {
    this.setState({
      isMoving: !this.state.isMoving
    })
  }

  componentWillMount() {
    this.imagePanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gs) => {
        this.setState({isMoving:true})
        // console.log('MOVING', gs.dx, gs.dy)
        // this.imageXPos.setValue(gs.dx)
        this.position.setValue({x: gs.dx, y: gs.dy})
      },
      onPanResponderRelease: (evt, gs) => {
        console.log('RELEASED');
        this.setState({isMoving:false})
        if (gs.dx>120) {
          Animated.spring(this.position, {
            toValue: {x: SCREEN_WIDTH + 100, y: gs.dy}
          }).start(()=>{
            this.setState({
              imageIndex: this.state.imageIndex + 1
            }, () => {
              this.position.setValue({x: 0, y: 0})
            })
          })
        } else if (gs.dx < -120) {
          Animated.spring(this.position, {
            toValue: {x: -SCREEN_WIDTH - 100, y: gs.dy}
          }).start(()=>{
            this.setState({
              imageIndex: this.state.imageIndex + 1
            }, () => {
              this.position.setValue({x: 0, y: 0})
            })
          })
        } else {
          Animated.spring(this.position, {
            toValue: {x:0, y:0},
            friction: 4
          }).start()
        }
      }
    });
  }
  
  renderImage = () => {
    // console.log(this.state.array)
      return this.state.array.map((item, i)=>{
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
              <View style={styles.cardContent}>
                <View style={styles.cardContentChild}>
                  <Text style={{ fontFamily: 'sans-serif-thin', fontSize: 20,}}>Johony</Text>
                  <Text style={{ fontFamily: 'sans-serif-thin', fontSize: 15,}}>Host</Text>
                  <View
                    style={{
                      borderBottomColor: '#EEEEEE',
                      borderBottomWidth: 1,
                      width: '25%',
                      height:'5%'
                    }}
                  />
                  <Text style={{ fontFamily: 'Roboto', fontSize: 25, fontWeight: 'bold', marginTop: 30}}>POCKER & SALSA</Text>
                  <Text style={{ fontFamily: 'Roboto', fontSize: 25, fontWeight: 'bold'}}>PARTY</Text>
                  <Text>
                    <Text style={{ fontFamily: 'Roboto', fontSize: 25, fontWeight: 'bold'}}>WED, 7:00{' '}</Text>
                    <Text style={{ fontFamily: 'sans-serif-thin', fontSize: 15,}}>pm</Text>
                  </Text>
                  <Text style={{ fontFamily: 'sans-serif-thin', fontSize: 12,}}>SEPTEMBER 23</Text>
                  <View style={{flex:1 ,flexDirection: 'row', width:'100%' , justifyContent: 'space-between', marginTop: 20, padding: 5}}>
                    <Text style={{ fontFamily: 'sans-serif-thin', fontSize: 13,}}><Image style={{width:30, height:30}} source={require('../assets/Icons/guest.imageset/guest.png')} />12 Guests</Text>
                    <Text style={{ fontFamily: 'sans-serif-thin', fontSize: 13,}}><Image style={{width:30, height:30}} source={require('../assets/Icons/away.imageset/away.png')} />2.5 Miles away</Text>
                  </View>
                </View>
              </View>

              <View style={styles.profile}>
                <Image
                  style={{width:150, height:150, borderWidth: 5, borderColor: '#ffff' , borderTopLeftRadius: 100, borderTopRightRadius: 100, borderBottomRightRadius: 70, borderBottomLeftRadius: 70}}
                  resizeMode="cover"
                  source={require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png')}
                />
              </View>
            </Animated.View>
          )
        } 
        else {
          return (
            <Animated.View
              key={i}
              style={styles.card}>
              <View style={styles.cardContent}>
                <View style={styles.cardContentChild}>
                  <Text style={{ fontFamily: 'sans-serif-thin', fontSize: 20,}}>Johony</Text>
                  <Text style={{ fontFamily: 'sans-serif-thin', fontSize: 15,}}>Host</Text>
                  <View
                    style={{
                      borderBottomColor: '#EEEEEE',
                      borderBottomWidth: 1,
                      width: '25%',
                      height:'5%'
                    }}
                  />
                  <Text style={{ fontFamily: 'Roboto', fontSize: 25, fontWeight: 'bold', marginTop: 30}}>POCKER & SALSA</Text>
                  <Text style={{ fontFamily: 'Roboto', fontSize: 25, fontWeight: 'bold'}}>PARTY</Text>
                  <Text>
                    <Text style={{ fontFamily: 'Roboto', fontSize: 25, fontWeight: 'bold'}}>WED, 7:00{' '}</Text>
                    <Text style={{ fontFamily: 'sans-serif-thin', fontSize: 15,}}>pm</Text>
                  </Text>
                  <Text style={{ fontFamily: 'sans-serif-thin', fontSize: 12,}}>SEPTEMBER 23</Text>
                  <View style={{flex:1 ,flexDirection: 'row', width:'100%' , justifyContent: 'space-between', marginTop: 20, padding: 5}}>
                    <Text style={{ fontFamily: 'sans-serif-thin', fontSize: 13,}}><Image style={{width:30, height:30}} source={require('../assets/Icons/guest.imageset/guest.png')} />12 Guests</Text>
                    <Text style={{ fontFamily: 'sans-serif-thin', fontSize: 13,}}><Image style={{width:30, height:30}} source={require('../assets/Icons/away.imageset/away.png')} />2.5 Miles away</Text>
                  </View>
                </View>
              </View>

              <View style={styles.profile}>
                <Image
                  style={{width:150, height:150, borderWidth: 5, borderColor: '#ffff' , borderTopLeftRadius: 100, borderTopRightRadius: 100, borderBottomRightRadius: 70, borderBottomLeftRadius: 70}}
                  resizeMode="cover"
                  source={require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png')}
                />
              </View>
            </Animated.View>
          )
        }
      }).reverse();
  }

  render() {
    return (
      <ImageBackground style={styles.background} source={require('../assets/Pngs/bg.imageset/bg.png')}>
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProfileSetting')}>
            <View style={styles.menu1}>
              <Image  source={require('../assets/Icons/setting_yellow/settings.png')} />
            </View>
          </TouchableOpacity>
          <View style={styles.menu2}>
            <Image style={{width:'100%',height:'100%', resizeMode:'contain'}}  source={require('../assets/images/logo.png')} />
          </View>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('UserCalender')}>
            <View style={styles.menu3}>
              <Image  source={require('../assets/Icons/event_yellow/calendar.png')} />
            </View>
          </TouchableOpacity>
        </View>

        {this.renderImage()}
        {this.state.isMoving ? 
        <View style={styles.chooseButton}>
          <Animated.View style={{opacity: this.lockOpacity, width: SCREEN_HEIGHT * 0.1, height: SCREEN_HEIGHT * 0.1 }}>
            <Image style={styles.lockImage} source={require('../assets/Icons/lock_highlight.imageset/lock_highlight.png')} />
          </Animated.View>
          <Animated.View style={{opacity: this.unlockOpacity, width: SCREEN_HEIGHT * 0.1, height: SCREEN_HEIGHT * 0.1 }}>
            <Image style={styles.lockImage} source={require('../assets/Icons/unlock_highlight.imageset/unlock_highlight.png')} /> 
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
          <Image style={styles.footerUpArrowImage}  source={require('../assets/Icons/up_arrow/up_arrow.png')} />
          <Image style={styles.footerImage}  source={require('../assets/Icons/create_event_icon/create_event_icon.png')} />
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
    height:SCREEN_HEIGHT*0.09,
    marginTop:20,
    // backgroundColor:'red'
  },
  menu1: {
    flexDirection: 'row',
    height:'100%',
    alignItems: 'center',
    width:24,
    // backgroundColor:'green',
    marginLeft: 15
  },
  menu2: {
    flexDirection: 'row',
    alignItems: 'center',
    // width:20,
    // height:15,
    width:SCREEN_WIDTH*0.4,
    height:'100%',
    // backgroundColor:'yellow'
  },
  menu3: {
    flexDirection: 'row',
    height:'100%',
    alignItems: 'center',
    width:24,
    // backgroundColor:'aqua',
    marginRight: 15
  },
  card: {
    width:SCREEN_WIDTH * 0.884, 
    height:SCREEN_HEIGHT * 0.619, 
    borderRadius: 10, 
    flexDirection: 'column', 
    justifyContent: 'space-between', 
    position:'absolute', 
    bottom: SCREEN_HEIGHT/2 - 400/2,
    // backgroundColor:'green'
  },
  cardContent: {
    backgroundColor:'#ffff', 
    width:'100%', 
    height:'87%', 
    marginTop:"15%", 
    borderRadius: 10, 
    flexDirection: 'column', 
    alignItems: 'center'
  },
  cardContentChild: {
    width:'93%', 
    height:'70%',
    marginTop: '30%',
    flexDirection: 'column', 
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor:'pink'
  },
  profile:{
    width:SCREEN_WIDTH * 0.397, 
    height: SCREEN_HEIGHT * 0.223, 
    position:'absolute', 
    left: SCREEN_WIDTH * 0.884 / 2 - (SCREEN_WIDTH * 0.397 / 2 ),
    top:0
  },
  chooseButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: SCREEN_HEIGHT * 0.0621118
    // height: 80,
    // marginTop:470
  },
  lockImage: {
    width: '100%',
    height: '100%',
    // marginBottom:30
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