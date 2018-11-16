import React, {Component} from 'react'
import {Image, StyleSheet, Text, View} from 'react-native';
import Layout from "../constants/Layout";
import RF from "react-native-responsive-fontsize"

const SCREEN_HEIGHT = Layout.window.height;
const SCREEN_WIDTH = Layout.window.width;
const PICTURES_PATH = "../assets/Pngs/";

export default class EventComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventHostName: props.eventHostName,
            eventTitle: props.eventTitle,
            eventDescription: props.eventDescription,
            eventDay: props.eventDay,
            eventTime: props.eventTime,
            eventDate: props.eventDate,
            eventHostPhoto: {uri: props.eventHostPhoto},
            guestNums: props.guestNums,
            eventAway: props.eventAway,
            eventConfirmed: props.eventConfirmed,
            isCurrentUserHost: props.isCurrentUserHost
        };

    }

    render() {
        return (
            <View>
                <View style={styles.cardHeader}>
                    {this.state.eventConfirmed ?
                        this.state.isCurrentUserHost ?
                            <View style={styles.hostPicContainer}>
                                <View style={styles.dummyStatus}>
                                    <Text style={{color: 'white'}}>{'             '}</Text>
                                </View>
                                <Image
                                    source={this.state.eventHostPhoto}
                                    style={styles.hostPic}
                                    resizeMode="cover"
                                />
                                <View style={styles.notifStatus3}>
                                    <Text style={{color: 'white'}}>{'  '}Host{'  '}</Text>
                                </View>
                            </View>
                            :
                            <View style={styles.hostPicContainer}>
                                <View style={styles.notifStatus1}>
                                    <Text style={{color: 'white'}}>Updated</Text>
                                </View>
                                <Image
                                    source={this.state.eventHostPhoto}
                                    style={styles.hostPic}
                                    resizeMode="cover"
                                />
                                <View style={styles.notifStatus2}>
                                    <Text style={{color: 'white'}}>Confirm</Text>
                                </View>
                            </View>

                        :
                        <View style={styles.hostPicContainer}>
                            <Image
                                source={this.state.eventHostPhoto}
                                style={styles.hostPic}
                                resizeMode="cover"
                            />
                        </View>
                    }

                </View>
                <View style={styles.card}>
                    <View style={styles.details}>
                        <Text style={styles.hostName}>{this.state.eventHostName}</Text>
                        <Text style={styles.subheading}>Host</Text>
                        <View style={styles.divider}/>
                        <Text style={styles.eventTitle}>{this.state.eventTitle}</Text>
                        <Text style={styles.heading1}> {this.state.eventDay}, {this.state.eventTime}</Text>
                        <Text style={styles.eventDate}> {this.state.eventDate} </Text>
                        <View style={styles.cardFooter}>
                            <Text style={{fontFamily: 'sans-serif-thin', fontSize: RF(2)}}>
                                <Image style={{
                                    width: 30,
                                    height: 30,
                                    marginRight: 20,
                                    resizeMode: 'contain'
                                }}
                                       source={require('../assets/Icons/guest.imageset/guest.png')}/>
                                12 Guests
                            </Text>
                            <Text style={{fontFamily: 'sans-serif-thin', fontSize: RF(2)}}>
                                <Image style={{
                                    width: 30,
                                    height: 30,
                                    marginLeft: -20,
                                    resizeMode: 'contain'
                                }}
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
        backgroundColor: 'blue',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: SCREEN_WIDTH * 0.8722,
        height: SCREEN_HEIGHT * 0.6234375,
        zIndex: 0,
        borderRadius: 5
    },
    details: {
        paddingTop: SCREEN_WIDTH * 0.05,
        zIndex: 2,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 5
    },
    cardFooter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: SCREEN_WIDTH / 28,
        paddingRight: SCREEN_WIDTH / 28,
        position: 'absolute',
        bottom: 20
    },
    hostPicContainer: {
        justifyContent: 'space-between',
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
        fontSize: RF(3.5)
    },
    subheading: {
        fontFamily: 'sans-serif-thin',
        fontSize: RF(3)
    },
    eventTitle: {
        fontFamily: 'Roboto',
        fontSize: RF(4),
        fontWeight: 'bold',
    },
    heading1: {
        fontFamily: 'Roboto',
        fontSize: RF(3.7)
    },
    eventDate: {
        fontFamily: 'sans-serif-thin',
        fontSize: RF(2.2)
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
        backgroundColor: '#8cbc45',
        borderRadius: 50,
        margin: 5,
        alignItems: 'center',
        zIndex: 10,
        paddingRight: 15,
        paddingLeft: 15,
        marginTop: 40
    },
    notifStatus3: {
        backgroundColor: '#00b9f3',
        borderRadius: 50,
        margin: 5,
        alignItems: 'center',
        zIndex: 10,
        paddingRight: 15,
        paddingLeft: 15,
        marginTop: 40
    },
    dummyStatus: {
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
});
