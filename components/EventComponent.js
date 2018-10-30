import React, {Component} from 'react'
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const PICTURES_PATH = "../assets/Pngs/";

export default class EventComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventHostName: props.eventHostName,
            eventTitle: 'POCKER & SALSA',
            eventType: 'Party',
            eventDay: 'WED',
            eventTime: '7:00',
            eventDate: 'SEPTEMBER 23',
            eventHostPhoto: '../assets/Pngs/profilePhoto.imageset/profilePhoto.png',
            guestNums: 12,
            eventAway: 2.5,
            eventConfirmed: props.eventConfirmed
        };

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            eventHostName: nextProps.eventHostName,
            eventConfirmed: nextProps.eventConfirmed
        });
    }

    render() {
        return (
            <View>
                <View style={styles.cardHeader}>
                    <View style={styles.hostPicContainer}>
                        {/*<View style={styles.notifStatus1}>*/}
                        {/*<Text style={{color: 'white'}}>Updated</Text>*/}
                        {/*</View>*/}
                        <Image
                            source={require(PICTURES_PATH + 'profilePhoto.imageset/profilePhoto.png')}
                            style={styles.hostPic}
                            resizeMode="cover"
                        />
                        {/*<View style={styles.notifStatus2}>*/}
                        {/*<Text style={{color: 'white'}}>Confirm</Text>*/}
                        {/*</View>*/}
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.details}>
                        <Text style={styles.hostName}>{this.state.eventHostName}</Text>
                        <Text style={styles.subheading}>Host</Text>
                        <View style={styles.divider}/>
                        <Text style={styles.eventTitle}>{this.state.eventTitle}</Text>
                        <Text style={styles.heading1}>{this.state.eventType}</Text>
                        <Text style={styles.heading1}> {this.state.eventDay} , {this.state.eventTime}</Text>
                        <Text style={styles.eventDate}> {this.state.eventDate} </Text>
                        <View style={styles.cardFooter}>
                            <Text style={{fontFamily: 'sans-serif-thin', fontSize: 13}}>
                                <Image style={{width: 30, height: 30}}
                                       source={require('../assets/Icons/guest.imageset/guest.png')}/>
                                12 Guests
                            </Text>
                            <Text style={{fontFamily: 'sans-serif-thin', fontSize: 13}}>
                                <Image style={{width: 30, height: 30}}
                                       source={require('../assets/Icons/away.imageset/away.png')}/>
                                2.5 Miles away
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardHeader: {
        width: SCREEN_WIDTH * 0.8722,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        flex: 1,
        marginTop: -SCREEN_WIDTH * 0.2,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: SCREEN_WIDTH * 0.8722,
        height: SCREEN_HEIGHT * 0.55,
        zIndex: 0,
        borderRadius: 5
    },
    details: {
        zIndex: 2,
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column',
        paddingTop: 80,
        paddingBottom: 0,
        justifyContent: 'space-between',
        flex: 1,
        borderRadius: 5
    },
    cardFooter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: SCREEN_WIDTH / 28,
        paddingRight: SCREEN_WIDTH / 28,
        marginTop: SCREEN_HEIGHT * 0.03
    },
    hostPicContainer: {
        alignItems: 'center',
        height: SCREEN_WIDTH * 0.4,
        flexDirection: 'row',
        top: 0
    },
    hostPic: {
        width: SCREEN_WIDTH * 0.35678,
        height: SCREEN_WIDTH * 0.38567,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        borderWidth: 3,
        borderColor: '#fff',
        zIndex: 1
    },
    hostName: {
        fontFamily: 'sans-serif-thin',
        fontSize: SCREEN_HEIGHT * SCREEN_WIDTH / 10000 * 0.7
    },
    subheading: {
        fontFamily: 'sans-serif-thin',
        fontSize: SCREEN_HEIGHT * SCREEN_WIDTH / 10000 * 0.6
    },
    eventTitle: {
        fontFamily: 'Roboto',
        fontSize: SCREEN_HEIGHT * SCREEN_WIDTH / 10000 * 0.9,
        fontWeight: 'bold',
    },
    heading1: {
        fontFamily: 'Roboto',
        fontSize: SCREEN_HEIGHT * SCREEN_WIDTH / 10000 * 0.9,
    },
    eventDate: {
        fontFamily: 'sans-serif-thin',
        fontSize: SCREEN_HEIGHT * SCREEN_WIDTH / 10000 * 0.4
    },
    divider: {
        borderBottomColor: '#f1f1f1',
        borderBottomWidth: 1,
        width: '30%',
        marginTop: SCREEN_HEIGHT * 0.02,
        marginBottom: SCREEN_HEIGHT * 0.02
    },
    notifStatus1: {
        backgroundColor: '#E3422A',
        borderRadius: 50,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        paddingRight: 15,
        paddingLeft: 15,
        marginTop: 40
    },
    notifStatus2: {
        backgroundColor: 'green',
        borderRadius: 50,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        paddingRight: 15,
        paddingLeft: 15,
        marginTop: 40
    },
    dummyStatus: {
        backgroundColor: 'white',
        borderRadius: 50,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        padding: 8,
        top: 30
    },
});
