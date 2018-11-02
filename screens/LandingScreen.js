import React, {Component} from 'react'
import {
    Animated,
    Easing,
    Image,
    ImageBackground,
    PanResponder,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';
import EventComponent from "../components/EventComponent";
import LocksComponent from "../components/LocksComponent";
import Layout from "../constants/Layout";
import EventCreationComponent from '../components/EventCreationComponent.js';

import {connect} from 'react-redux';

const SCREEN_HEIGHT = Layout.window.height;
const SCREEN_WIDTH = Layout.window.width;

class LandingScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.eventCreationTop = new Animated.Value(1);
        this.arrowTop = new Animated.Value(0);
        this.arrowFlip = new Animated.Value(0);
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
                { 'img': require('../assets/Pngs/intro1.imageset/cards.png') },
                { 'img': require('../assets/Pngs/intro1.imageset/cards.png') },
                { 'img': require('../assets/Pngs/intro1.imageset/cards.png') },
                { 'img': require('../assets/Pngs/intro1.imageset/cards.png') },
                { 'img': require('../assets/Pngs/intro1.imageset/cards.png') },
                { 'img': require('../assets/Pngs/intro1.imageset/cards.png') },
            ],
            isMoving: false,
            eventCreationHidden: true,
            arrowFlipped: false,
            arrowIsTop: false,
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
    _toggleArrowAndEventCreation = () => {
        const opposite = !this.state.eventCreationHidden;
        const opposite2 = !this.state.arrowIsTop;
        const opposite3 = !this.state.arrowFlipped;

        this.setState({
            eventCreationHidden: opposite,
            arrowIsTop: opposite2,
            arrowFlipped: opposite3,
        });

        const theValue = this.state.eventCreationHidden ? 0 : 1;
        const theValue2 = this.state.arrowIsTop ? 0 : 1;
        const theValue3 = this.state.arrowFlipped ? 0 : 1;

        Animated.parallel([
            Animated.timing(this.eventCreationTop, {
                toValue: theValue,
                duration: 500,
                easing: Easing.ease,
            }),

            Animated.timing(this.arrowTop, {
                toValue: theValue2,
                duration: 500,
                easing: Easing.ease,
            }),

            Animated.timing(this.arrowFlip, {
                toValue: theValue3,
                duration: 500,
                easing: Easing.ease
            }),
        ]).start()
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

    _toggleArrow = () => {
        const opposite = !this.state.arrowIsTop;
        this.setState({
            arrowIsTop: opposite,
        });

        const theValue = this.state.arrowIsTop ? 0 : 1;

        Animated.timing(this.arrowTop, {
            toValue: theValue,
            duration: 500,
            easing: Easing.ease,
        }).start();
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
                        <EventComponent eventHostName={this.props.events.available[0].eventHostName}
                                        eventConfirmed={false}/>
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
                            <EventComponent eventHostName={this.props.events.available[0].eventHostName}
                                            eventConfirmed={false}/>
                        </TouchableOpacity>
                    </Animated.View>
                )
            }
        }).reverse();
    };

    render() {
        const interpolateRotation = this.arrowFlip.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg'],
        })

        const arrowInterpolateTop = this.arrowTop.interpolate({
            inputRange: [0, 1],
            outputRange: [SCREEN_HEIGHT - 109.857142857, SCREEN_HEIGHT - 684.857142857]
        });

        const arrowStyle = {
            top: arrowInterpolateTop,
            transform: [
                { rotate: interpolateRotation }
            ],

        }

        const eventCreationInterpolate = this.eventCreationTop.interpolate({
            inputRange: [0, 1],
            outputRange: ["0%", "100%"]
        })

        const eventCreationStyle = {
            top: eventCreationInterpolate,
        }
        return (
            <ImageBackground style={styles.background} source={require('../assets/Pngs/bg.imageset/bg.png')}>
                <Animated.View style={[arrowStyle, { zIndex: 100, position: "absolute", backgroundColor: "transparent" }, styles.arrowView]}>
                    <TouchableHighlight onPress={() => this._toggleArrowAndEventCreation()} style={{ flex: 1, backgroundColor: 'transparent' }}>
                        <Image style={styles.arrow} source={require('../assets/Icons/up_arrow/up_arrow.png')} />
                    </TouchableHighlight>
                </Animated.View>

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
                <LocksComponent isMoving={this.state.isMoving} position={this.position} />



                <View style={styles.footer}>

                    <TouchableOpacity onPress={() => this._toggleArrowAndEventCreation()}>
                        <Image style={styles.footerImage}
                            source={require('../assets/Icons/create_event_icon/create_event_icon.png')} />
                    </TouchableOpacity>
                </View>

                <Animated.View style={[{ position: "absolute", width: SCREEN_WIDTH, height: SCREEN_HEIGHT }, eventCreationStyle]}>
                    <EventCreationComponent close={this._toggleArrowAndEventCreation} {...this.props} />
                </Animated.View>

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
        position: "absolute",
        width: SCREEN_WIDTH * 0.0761326,
        // top: SCREEN_HEIGHT - 109.857142857,
        zIndex: 99,

    },

    footerImage: {
        width: SCREEN_WIDTH * 0.058,
        height: SCREEN_WIDTH * 0.058
    },

    arrowView: {
        width: SCREEN_WIDTH * 0.10,
        height: SCREEN_WIDTH * 0.058,
        zIndex: 99,
    },

    arrow: {
        width: "100%",
        height: "100%",
        zIndex: 100,
        resizeMode: 'contain',
    }
});

const mapStateToProps = (state) => {
    const {events} = state;
    return {events}
};

export default connect(mapStateToProps)(LandingScreen);