import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import WebBrowser from 'expo';


export default class LoginScreen extends Component {

    constructor() {
        super();
        this.state = {
            bg: require('../assets/Pngs/bg.imageset/bg.png')
        }
        this._openLink = this._openLink.bind(this);
    }

    static navigationOptions = {
        header: null,
    };

    static defaultProps = {
        tos_url: 'http://www.rendevousapp.com/terms-of-service/',
        privacy_url: 'http://www.rendevousapp.com/privacy-policy/',
    }

    _openLink = async (link) => {
        await WebBrowser.WebBrowser.openBrowserAsync(link);
    }

    render() {
        return (
            <ImageBackground style={styles.background} source={this.state.bg}>
            <StatusBar hidden />
                <View style={styles.loginScreenContainer}>
                    <Text style={styles.welcome}>Welcome to</Text>
                    <Image style={styles.appLogo} source={require('../assets/images/logo.png')} />
                    <View style={styles.swiper}>
                        <Swiper dotStyle={styles.dot} activeDotStyle={styles.activeDot}>
                            {/*uses Swiper addon to swipe between the 3 views*/}
                            {/*NOTE: the bullets/dots shown on the screen is part of the addon and can be modified with the styles under Swiper*/}
                            <View style={styles.introContainer}>
                                <Image style={styles.introImage} source={require('../assets/Pngs/intro1.imageset/cards.png')} />
                                <Text style={styles.introText}>Post your event to start creating a guest list with people near you</Text>
                            </View>
                            <View style={styles.introContainer}>
                                <Image style={styles.introImage} source={require('../assets/Pngs/intro2.imageset/intro2.png')} />
                                <Text style={styles.introText}>"Lockin" or "Lockout" people wanting to attend your event</Text>
                            </View>
                            <View style={styles.introContainer}>
                                <Image style={styles.introImage} source={require('../assets/Pngs/intro3.imageset/Group.png')} />
                                <Text style={styles.introText}>Get invited to local events near you</Text>
                            </View>
                        </Swiper>
                    </View>
                    <Text style={styles.policy}>By continuing you agree to our{'\n'}
                        <Text onPress={() => this._openLink(this.props.tos_url)}>Terms of Service </Text>
                        and
                        <Text onPress={() => this._openLink(this.props.privacy_url)}> Privacy Policy</Text>
                    </Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Landing')}>
                        <View style={styles.loginButton}>
                            <Image style={styles.fbLogo} source={require('../assets/images/fb-logo.png')} />
                            <Text style={styles.loginWFb}>Log in with Facebook</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginScreenContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight
    },
    welcome: {
        fontFamily: 'Roboto',
        fontSize: height / 25,
        color: 'white'
    },
    appLogo: {
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.13,
        resizeMode: 'contain',
    },
    swiper: {
        height: height * .5,
        width: width,
    },
    dot: {
        width: width / 45,
        height: width / 45,
        borderRadius: 5,
    },
    activeDot: {
        width: width / 45,
        height: width / 45,
        borderRadius: 5,
        backgroundColor: 'yellow'
    },
    introContainer: {
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    introImage: {
        resizeMode: 'contain',
        // width: 250,
        height: '85%',
        marginTop: 50,
    },
    introText: {
        fontFamily: 'Roboto',
        fontSize: height / 42,
        color: 'white',
        textAlign: 'center',
        width: '80%',
        height: '25%',
        flexWrap: 'wrap',
    },
    policy: {
        color: 'grey',
        textAlign: 'center',
        padding: 10,
        fontSize: height / 70
    },
    loginButton: {
        flexDirection: 'row',
        width: width * 0.8,
        height: height * 0.08,
        backgroundColor: '#3B5999',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fbLogo: {
        width: 28,
        height: 28,
    },
    loginWFb: {
        fontFamily: 'Roboto',
        fontSize: height / 30,
        color: 'white',
        marginLeft: 10,
    },
});