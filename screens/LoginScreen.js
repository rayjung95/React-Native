import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Switch, Slider, Picker, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default class LoginScreen extends Component {
    static navigationOptions = {
        header: null,
      };
    constructor(props) {
        super(props);
        this.state = {
            introNum: 1,
            currentIntroImage: require('../assets/Pngs/intro1.imageset/cards.png'),
            currentIntroBullet1: 'yellow',
            currentIntroBullet2: 'white',
            currentIntroBullet3: 'white',
            currentIntroText: 'Post your event to start creating a guest list with people near you'
        }
    }

    // TODO: remove or keep timed interval for intro which includes states, and changeIntro()
    //time interval for running changeIntro()
    // componentDidMount() {
    //     setInterval(this.changeIntro.bind(this), 5000);
    // }

    //method for changing the image, caption, and bullet
    changeIntro() {

        if (this.state.introNum == 1) {
            this.setState({
                currentIntroImage: require('../assets/Pngs/intro1.imageset/cards.png'),
                currentIntroBullet1: 'yellow',
                currentIntroBullet2: 'white',
                currentIntroBullet3: 'white',
                currentIntroText: 'Post your event to start creating a guest list with people near you',
                introNum: 2
            })
        } else if (this.state.introNum ==2) {
            this.setState({
                currentIntroImage: require('../assets/Pngs/intro2.imageset/intro2.png'),
                currentIntroBullet1: 'white',
                currentIntroBullet2: 'yellow',
                currentIntroBullet3: 'white',
                currentIntroText: '"Lockin" or "Lockout" people wanting to attend your event',
                introNum: 3
            })
        } else if (this.state.introNum ==3) {
            this.setState({
                currentIntroImage: require('../assets/Pngs/intro3.imageset/Group.png'),
                currentIntroBullet1: 'white',
                currentIntroBullet2: 'white',
                currentIntroBullet3: 'yellow',
                currentIntroText: 'Get invited to local events near you',
                introNum: 1
            })
        }
    }


    render() {
        return (
            <ImageBackground style={styles.background} source={require('../assets/Pngs/bg.imageset/bg.png')}>
                <View style={styles.logoContainer}>
                    <Text style={styles.welcome}>Welcome to</Text>
                    <Image style={styles.wordLogo} source={require('../assets/images/logo.png')}/>
                    {/* NOTE: this is the new implementation of intro slideshow using react-native-swiper */}
                    {/* TODO: clean-up styles and migrate to stylesheet when done testing */}
                    <View style={{height:390, width:450, marginTop:50}}>
                        <Swiper dotStyle={{width: 10, height: 10, borderRadius: 5}} activeDotStyle={{width: 10, height:10, borderRadius:5, backgroundColor: 'yellow'}}>
                            <View style={{height: 300, justifyContent:'center',alignItems:'center'}}>
                                <Image style={styles.introImage} source={require('../assets/Pngs/intro1.imageset/cards.png')} />
                                <Text style={styles.currentIntroText}>Post your event to start creating a guest list with people near you</Text>
                            </View>
                            <View style={{height:300, justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={styles.introImage} source={require('../assets/Pngs/intro2.imageset/intro2.png')} />
                                <Text style={styles.currentIntroText}>"Lockin" or "Lockout" people wanting to attend your event</Text>
                            </View>
                            <View style={{height:300, justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={styles.introImage} source={require('../assets/Pngs/intro3.imageset/Group.png')} />
                                <Text style={styles.currentIntroText}>Get invited to local events near you</Text>
                            </View>
                        </Swiper>
                    </View>
                    {/* NOTE: this is an implementation of the old slideshow for intro */}
                    {/* TODO: currently commented this part. decide in future whether to keep or remove. Note: dont forget to clean stylesheet */}
                    {/* <Image style={styles.introImage} source={this.state.currentIntroImage}/>
                    <Text style={styles.currentIntroText}>{this.state.currentIntroText}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{
                            backgroundColor: this.state.currentIntroBullet1,
                            width: 10,
                            height: 10,
                            borderRadius: 10,
                            }}/>
                        <View style={{
                            backgroundColor: this.state.currentIntroBullet2,
                            width: 10,
                            height: 10,
                            borderRadius: 10,
                            marginLeft: 10,
                            marginRight: 10
                        }} />
                        <View style={{
                            backgroundColor: this.state.currentIntroBullet3,
                            width: 10,
                            height: 10,
                            borderRadius: 10
                        }} />
                    </View> */}
                    <Text style={styles.policy}>{`By continuing you agree to our\nTerms of Service and Privacy Policy`}</Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Landing')}>
                        <View style={styles.loginButton}>
                            <Image style={{width: 28, height: 28}} source={require('../assets/images/fb-logo.png')}/>
                            <Text style={styles.loginWFb}>Log in with Facebook</Text>
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.policy}>Enterprise Signup and Login</Text>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
      },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:30
    },
    welcome: {
        fontFamily: 'Roboto',
        fontSize: 30,
        color: 'white'
    },
    wordLogo: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        resizeMode: 'contain',
    },
    introImage: {
        resizeMode: 'contain',
        width: 250,
        height: 250,
        marginTop: 50,
    },
    currentIntroText: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        width: 350,
        height: 50,
        flexWrap: 'wrap'
    },
    policy: {
        color: 'grey',
        textAlign: 'center',
        padding: 10
    },
    loginButton: {
        flexDirection: 'row',
        width: 335,
        height: 57,
        backgroundColor: '#3B5999',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginWFb: {
        fontFamily: 'Roboto',
        fontSize: 28,
        color: 'white',
        marginLeft: 10
    },

});