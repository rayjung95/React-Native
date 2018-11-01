import React, {Component} from 'react'
import {Animated, Image, ImageBackground, PanResponder, StyleSheet, TouchableOpacity, View} from 'react-native';
import EventComponent from "../components/EventComponent";
import LocksComponent from "../components/LocksComponent";
import Layout from "../constants/Layout";

const SCREEN_HEIGHT = Layout.window.height;
const SCREEN_WIDTH = Layout.window.width;

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

    componentWillMount() {
        this.imagePanResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (evt, gs) => {
                this.setState({isMoving: true})
                // console.log('MOVING', gs.dx, gs.dy)
                // this.imageXPos.setValue(gs.dx)
                this.position.setValue({x: gs.dx, y: gs.dy})
            },
            onPanResponderRelease: (evt, gs) => {
                console.log('RELEASED');
                this.setState({isMoving: false})
                if (gs.dx > 120) {
                    Animated.spring(this.position, {
                        toValue: {x: SCREEN_WIDTH + 100, y: gs.dy}
                    }).start(() => {
                        this.setState({
                            imageIndex: this.state.imageIndex + 1
                        }, () => {
                            this.position.setValue({x: 0, y: 0})
                        })
                    })
                } else if (gs.dx < -120) {
                    Animated.spring(this.position, {
                        toValue: {x: -SCREEN_WIDTH - 100, y: gs.dy}
                    }).start(() => {
                        this.setState({
                            imageIndex: this.state.imageIndex + 1
                        }, () => {
                            this.position.setValue({x: 0, y: 0})
                        })
                    })
                } else {
                    Animated.spring(this.position, {
                        toValue: {x: 0, y: 0},
                        friction: 4
                    }).start()
                }
            }
        });
    }


    renderImage = () => {
        return this.state.array.map((item, i) => {
            if (i < this.state.imageIndex) {
                return null
            } else if (i === this.state.imageIndex) {
                return (
                    <Animated.View
                        {...this.imagePanResponder.panHandlers}
                        key={i}
                        style={[this.rotateAndTranslate, styles.cardContainer]}
                    >
                        <EventComponent eventHostName='Johnny' eventConfirmed={false}/>
                    </Animated.View>
                )
            } else {
                return (
                    <Animated.View
                        key={i}
                        style={styles.cardContainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('EventDetails', {
                            eventConfirmed: false
                        })}>
                            <EventComponent eventHostName='Johnny' eventConfirmed={false}/>
                        </TouchableOpacity>
                    </Animated.View>
                )
            }
        }).reverse();
    };

    render() {
        return (
            <ImageBackground style={styles.background} source={require('../assets/Pngs/bg.imageset/bg.png')}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileSetting')}>
                        <View style={styles.menu1}>
                            <Image source={require('../assets/Icons/setting_yellow/settings.png')}/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.menu2}>
                        <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}}
                               source={require('../assets/images/logo.png')}/>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('UserCalender')}>
                        <View style={styles.menu3}>
                            <Image source={require('../assets/Icons/event_yellow/calendar.png')}/>
                        </View>
                    </TouchableOpacity>
                </View>

                {this.renderImage()}
                <LocksComponent isMoving={this.state.isMoving} position={this.position}/>

                <View style={styles.footer}>
                    <Image style={styles.footerUpArrowImage} source={require('../assets/Icons/up_arrow/up_arrow.png')}/>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('EventCreation')}>
                        <Image style={styles.footerImage}
                               source={require('../assets/Icons/create_event_icon/create_event_icon.png')}/>
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
        height: SCREEN_HEIGHT * 0.09,
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
        width: SCREEN_WIDTH * 0.4,
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
    cardContainer: {
        width: SCREEN_WIDTH * 0.8722,
        height: SCREEN_HEIGHT * 0.6234375,
        borderRadius: 50,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: SCREEN_HEIGHT / 2 - SCREEN_HEIGHT * 0.5217 / 2,
    },
    footer: {
        width: SCREEN_WIDTH * 0.0761326,
        height: SCREEN_WIDTH * 0.116,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
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