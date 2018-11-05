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
import {bindActionCreators} from 'redux';
import {confirmEvent} from "../actions/eventsActions";

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
        this.pan = new Animated.ValueXY();
        this.cardAnimation = null;
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
            showCard: true,
            imageIndex: 0,
            array: [
                {'img': require('../assets/Pngs/intro1.imageset/cards.png')},
                {'img': require('../assets/Pngs/intro1.imageset/cards.png')},
                {'img': require('../assets/Pngs/intro1.imageset/cards.png')},
                {'img': require('../assets/Pngs/intro1.imageset/cards.png')},
                {'img': require('../assets/Pngs/intro1.imageset/cards.png')},
                {'img': require('../assets/Pngs/intro1.imageset/cards.png')},
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
                this.setState({isMoving: true})
                // console.log('MOVING', gs.dx, gs.dy)
                // this.imageXPos.setValue(gs.dx)
                this.position.setValue({x: gs.dx, y: gs.dy})
            },
            onPanResponderRelease: (evt, gs) => {
                console.log('RELEASED', gs);
                this.setState({isMoving: false})
                if (gs.dx > 120) {
                    Animated.spring(this.position, {
                        toValue: {x: SCREEN_WIDTH + 100, y: gs.dy}
                    }).start(() => {
                        this.props.confirmEvent(this.state.imageIndex);
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

    _toggleArrowAndEventCreation = () => {
        const opposite = !this.state.eventCreationHidden;
        const opposite2 = !this.state.arrowIsTop;
        const opposite3 = !this.state.arrowFlipped;

        this.setState({
            eventCreationHidden: opposite,
            arrowIsTop: opposite2,
            arrowFlipped: opposite3,
        });

        // console.log('creation is ' + this.state.eventCreationHidden);

        if (this.state.eventCreationHidden) {
            this.setState({showCard: false})
        } else {
            this.setState({showCard: true})
        }

        const theValue = this.state.eventCreationHidden ? 0 : 1;
        const theValue2 = this.state.arrowIsTop ? 0 : 1;
        const theValue3 = this.state.arrowFlipped ? 0 : 1;

        Animated.parallel([
            Animated.timing(this.eventCreationTop, {
                toValue: theValue,
                duration: 500,
                easing: Easing.ease,
            }),


        ]).start()
    };

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

    lock = () => {
        console.log('lock!')
        Animated.spring(this.position, {
            toValue: {x: -SCREEN_WIDTH - 100, y: SCREEN_HEIGHT / 2}
        }).start(() => {
            this.setState({
                imageIndex: this.state.imageIndex + 1
            }, () => {
                this.position.setValue({x: 0, y: 0})
            })
        })
    }
    unlock = () => {
        console.log('unlock!')
        Animated.spring(this.position, {
            toValue: {x: SCREEN_WIDTH + 100, y: SCREEN_HEIGHT / 2}
        }).start(() => {
            this.props.confirmEvent(this.state.imageIndex);
            this.setState({
                imageIndex: this.state.imageIndex + 1
            }, () => {
                this.position.setValue({x: 0, y: 0})
            })
        })
    }

    renderImage = () => {
        return this.props.events.availableEvents.map((item, i) => {
            if (i < this.state.imageIndex) {
                return null
            } else if (i === this.state.imageIndex) {
                return (
                    <Animated.View
                        {...this.imagePanResponder.panHandlers}
                        key={i}
                        style={[this.rotateAndTranslate, styles.cardContainer]}
                    >
                        <EventComponent eventHostName={item.eventHostName} eventTitle={item.eventTitle}
                                        eventDay={item.eventDay} eventTime={item.eventTime}
                                        eventDate={item.eventDate} eventHostPhoto={item.eventHostPhoto}
                                        guestNums={item.guestNums} eventAway={item.eventAway} eventConfirmed={false}/>
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
                            <EventComponent eventHostName={item.eventHostName} eventTitle={item.eventTitle}
                                            eventDay={item.eventDay} eventTime={item.eventTime}
                                            eventDate={item.eventDate} eventHostPhoto={item.eventHostPhoto}
                                            guestNums={item.guestNums} eventAway={item.eventAway}
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
        });

        const arrowInterpolateTop = this.arrowTop.interpolate({
            inputRange: [0, 1],
            outputRange: [SCREEN_HEIGHT * 0.0931458699472, SCREEN_HEIGHT * 0.8345070422535]
            // outputRange: [SCREEN_HEIGHT * (0.175465838509317 + 0.036), SCREEN_HEIGHT * (0.830745341614907 - 0.036)]
        });

        const arrowStyle = {
            bottom: arrowInterpolateTop,
            transform: [
                {rotate: interpolateRotation}
            ],

        };

        const eventCreationInterpolate = this.eventCreationTop.interpolate({
            inputRange: [0, 1],
            outputRange: ["0%", "100%"]
        });

        const eventCreationStyle = {
            top: eventCreationInterpolate,
        };
        return (
            <ImageBackground style={styles.background} source={require('../assets/Pngs/bg.imageset/bg.png')}>
                <Animated.View style={[arrowStyle, {
                    zIndex: 100,
                    position: "absolute",
                    backgroundColor: "transparent"
                }, styles.arrowView]}>
                    <TouchableHighlight onPress={() => this._toggleArrowAndEventCreation()}
                                        style={{flex: 1, backgroundColor: 'transparent'}}>
                        <Image style={styles.arrow} source={require('../assets/Icons/up_arrow/up_arrow.png')}/>
                    </TouchableHighlight>
                </Animated.View>

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

                {this.state.showCard === true && this.renderImage()}
                <LocksComponent isMoving={this.state.isMoving} position={this.position} lock={this.lock}
                                unlock={this.unlock}/>


                <TouchableOpacity style={styles.footer} onPress={() => this._toggleArrowAndEventCreation()}>
                    <Image style={styles.footerImage}
                           source={require('../assets/Icons/create_event_icon/create_event_icon.png')}/>
                </TouchableOpacity>

                <Animated.View
                    style={[{position: "absolute", width: SCREEN_WIDTH, height: SCREEN_HEIGHT}, eventCreationStyle]}>
                    <EventCreationComponent title='Create new event ' buttonText='Post'
                                            close={this._toggleArrowAndEventCreation} {...this.props} />
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
        // width: SCREEN_WIDTH * 0.0761326,
        // height: SCREEN_WIDTH * 0.116,
        height: SCREEN_HEIGHT * 0.0369718309859,
        width: SCREEN_WIDTH * (21 / 360),
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: SCREEN_HEIGHT * (25 / 592),
    },
    footerUpArrowImage: {
        position: "absolute",
        width: SCREEN_WIDTH * 0.0761326,
        // top: SCREEN_HEIGHT - 109.857142857,
        zIndex: 99,

    },

    footerImage: {
        // width: SCREEN_WIDTH * 0.058,
        // height: SCREEN_WIDTH * 0.058
        width: "100%",
        height: "100%",
        resizeMode: 'contain',
    },

    arrowView: {
        width: SCREEN_WIDTH * 0.06801105,
        height: SCREEN_HEIGHT * 0.00908178,
        backgroundColor: 'transparent',
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

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        confirmEvent,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(LandingScreen);