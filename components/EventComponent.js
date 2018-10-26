import React, {Component} from 'react'
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const guestIcon = '../assets/Icons/guest.imageset/guest.png';
const awayIcon = '../assets/Icons/away.imageset/away.png';

export default class EventComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventHostName: 'Johny',
            eventTitle: 'POCKER & SALSA',
            eventType: 'Party',
            eventDay: 'WED',
            eventTime: '7:00',
            eventDate: 'SEPTEMBER 23',
            eventHostPhoto: '../assets/Pngs/profilePhoto.imageset/profilePhoto.png',
            guestNums: 12,
            eventAway: 2.5
        }
    }

    render() {
        return (
            <View>
                <View style={styles.cardContent}>
                    <View style={styles.cardContentChild}>
                        <Text style={{
                            fontFamily: 'sans-serif-thin',
                            fontSize: 20,
                            marginTop: 30
                        }}>{this.state.eventHostName}</Text>
                        <Text style={{fontFamily: 'sans-serif-thin', fontSize: 15,}}>Host</Text>
                        <View
                            style={{
                                borderBottomColor: '#EEEEEE',
                                borderBottomWidth: 1,
                                width: '25%',
                                height: '5%'
                            }}
                        />
                        <Text style={{
                            fontFamily: 'Roboto',
                            fontSize: 25,
                            fontWeight: 'bold',
                            marginTop: 30
                        }}>{this.state.eventTitle}</Text>
                        <Text style={{
                            fontFamily: 'Roboto',
                            fontSize: 25,
                            fontWeight: 'bold'
                        }}>{this.state.eventType}</Text>
                        <Text>
                            <Text style={{
                                fontFamily: 'Roboto',
                                fontSize: 25,
                                fontWeight: 'bold'
                            }}>{this.state.eventDay}, {this.state.eventTime}{' '}</Text>
                            <Text style={{fontFamily: 'sans-serif-thin', fontSize: 15,}}>pm</Text>
                        </Text>
                        <Text style={{fontFamily: 'sans-serif-thin', fontSize: 12,}}>{this.state.eventDate}</Text>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'space-between',
                            marginTop: 20,
                            padding: 5
                        }}>
                            <Text style={{fontFamily: 'sans-serif-thin', fontSize: 13,}}><Image
                                style={{width: 30, height: 30}}
                                source={require('../assets/Icons/guest.imageset/guest.png')}/>{this.state.guestNums} Guests</Text>
                            <Text style={{fontFamily: 'sans-serif-thin', fontSize: 13,}}><Image
                                style={{width: 30, height: 30}}
                                source={require('../assets/Icons/away.imageset/away.png')}/>{this.state.eventAway} Miles
                                away</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.profile}>
                    <Image
                        style={{
                            width: 150,
                            height: 150,
                            borderWidth: 5,
                            borderColor: '#ffff',
                            borderTopLeftRadius: 100,
                            borderTopRightRadius: 100,
                            borderBottomRightRadius: 70,
                            borderBottomLeftRadius: 70
                        }}
                        resizeMode="cover"
                        source={require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png')}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardContent: {
        backgroundColor: '#ffff',
        width: '100%',
        height: '87%',
        marginTop: "15%",
        borderRadius: 10,
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor:'pink'
    },
    cardContentChild: {
        width: '93%',
        height: '80%',
        marginTop: '20%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor:'aqua'
    },
    profile: {
        width: SCREEN_WIDTH * 0.397,
        height: SCREEN_HEIGHT * 0.223,
        position: 'absolute',
        left: SCREEN_WIDTH * 0.884 / 2 - (SCREEN_WIDTH * 0.397 / 2),
        top: 0
    }
});
