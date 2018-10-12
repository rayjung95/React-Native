import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Image, Text, PanResponder, Animated, Dimensions, ImageBackground } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default class EventConfirmationScreen extends Component {
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
      ]
    }

  }

  componentWillMount() {
    this.imagePanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gs) => {
        // console.log('MOVING', gs.dx, gs.dy)
        // this.imageXPos.setValue(gs.dx)
        this.position.setValue({x: gs.dx, y: gs.dy})
      },
      onPanResponderRelease: (evt, gs) => {
        console.log('RELEASED');
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
              <Image source={require('../assets/Pngs/girlphoto.imageset/girlphoto.png')} />
              <Text style={{ fontFamily: 'Roboto', fontSize: 25, color:'#505050'}}>Scarlett, 31</Text>
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
              <Image source={require('../assets/Icons/go-back-left-arrow/go-back-left-arrow.png')} />
			  <View style={{ width: SCREEN_WIDTH*0.6, height:'100%', alignItems:'flex-start', justifyContent:'center', marginLeft:30}}>
			  	<Text style={{color:'white', fontFamily: 'Roboto', fontSize: 20,}}>Amazing friday night</Text>
				<Text style={{color:'white', fontFamily: 'Roboto', fontSize: 13,}}>sat, 10:00pm, Sep 26</Text>
			  </View>
          </View>
          <View style={styles.menu2}>
		  	<Image style={{width:26,height:24}} source={require('../assets/Icons/not_message.imageset/not_message.png')} />
            <Image style={{width:24,height:24, marginLeft:15}} source={require('../assets/Icons/event_yellow/calendar.png')} />
          </View>
        </View>

        {this.renderImage()}
        <View style={styles.chooseButton}>
          <Animated.View style={{opacity: this.lockOpacity, width: 70, height: 70 }}>
            <Image style={styles.lockImage} source={require('../assets/Icons/lock_highlight.imageset/lock_highlight.png')} />
          </Animated.View>
          <Animated.View style={{opacity: this.unlockOpacity, width: 70, height: 70 }}>
            <Image style={styles.lockImage} source={require('../assets/Icons/unlock_highlight.imageset/unlock_highlight.png')} /> 
          </Animated.View>
        </View>
        <View>
          <Image style={styles.footerImage}  source={require('../assets/Icons/footer.imageset/footer.png')} />
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
  },
  menu1: {
    flexDirection: 'row',
    width:SCREEN_WIDTH*0.67,
    height:'100%',
    alignItems: 'center',
    justifyContent:'space-around',
    paddingLeft:20,

  },
  menu2: {
    flexDirection: 'row',
    width:SCREEN_WIDTH*0.33,
    height:'100%',
    alignItems: 'center',
    justifyContent:'center',
    marginLeft:15

  },
  card: {
    width:SCREEN_WIDTH*0.85, 
    height:SCREEN_HEIGHT*0.5, 
    borderRadius: 5, 
    flexDirection: 'column',
    justifyContent: 'space-around', 
    alignItems: 'center',
    position:'absolute', 
    bottom: SCREEN_HEIGHT/2 - 400/2,
    backgroundColor:'#ffff', 
  },
  cardContentChild: {
    width:300, 
    height:250, 
    marginTop: 100,
    flexDirection: 'column', 
    alignItems: 'center'
  },
  profile:{
    width:150, 
    height:150, 
    position:'absolute', 
    left: 150-(150/2), 
    top:0
  },
  chooseButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: 30,
    marginTop:430
  },
  lockImage: {
    width: 70,
    height: 70,
    marginBottom:30
  },
  footer: {
    alignItems: 'center',
    marginTop:6
  },
  footerImage: {
    width: 45,
    height: 45
  },
});