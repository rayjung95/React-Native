import React, {Component} from "react";
import {Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity} from "react-native";


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const PICTURES_PATH = "../assets/Pngs/";

export default class UserCalendarScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <ImageBackground style={styles.background} source={require('../assets/Pngs/bg.imageset/bg.png')}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Landing')}>
                        <Image source={require('../assets/Icons/main_feed.imageset/main_feed.png')} style={{width: 20, height: 20}}/>
                    </TouchableOpacity>
                    <Text style={styles.yourCalendar}> Your Calendar </Text>
                    <View style={styles.menu1}/>
                </View>

                <ScrollView style={{zIndex: 1, paddingBottom: 10}}>
                    <View style={styles.notifBox}>
                        <Text style={styles.notifText}>
                            <Text style={styles.notifMainText}> My Own Holiday {"\n"}</Text>
                            <Text style={styles.notifSubText}> Wed, 7:00 pm, Sep 23 </Text>
                        </Text>
                        <View style={styles.notifIcons}>
                            <View style={styles.notifNum}>
                                <Text style={{color: 'white'}}> 2 </Text>
                            </View>
                            <Image
                                source={require('../assets/Icons/rightArrow.imageset/rightArrow.png')}
                                style={{zIndex: 10, height: 15, width: 15}}
                            />
                        </View>
                    </View>

                    <View style={styles.notifBox}>
                        <Text style={styles.notifText}>
                            <Text style={styles.notifMainText}> Amazing Friday Night {"\n"}</Text>
                            <Text style={styles.notifSubText}> Sat, 10:00 pm, Sep 26 </Text>
                        </Text>
                        <View style={styles.notifIcons}>
                            <Image
                                source={require('../assets/Icons/rightArrow.imageset/rightArrow.png')}
                                style={{zIndex: 10, height: 15, width: 15}}
                            />
                        </View>
                    </View>

                    <View style={{marginTop: -60}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('EventDetails')}>
                            <View style={styles.CalendarCardContainer}>
                                <View style={styles.CalendarCardHeader}>
                                    <View style={styles.hostPicContainer}>
                                        <View style={styles.notifStatus1}>
                                            <Text style={{color: 'white'}}>Updated</Text>
                                        </View>
                                        <Image
                                            source={require(PICTURES_PATH + 'profilePhoto.imageset/profilePhoto.png')}
                                            style={styles.hostPic}
                                            resizeMode="cover"
                                        />
                                        <View style={styles.notifStatus2}>
                                            <Text style={{color: 'white'}}>Confirm</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.calendarCard}>
                                    <View style={styles.calendarDetails}>
                                        <Text style={styles.hostName}>Johnny</Text>
                                        <Text style={styles.subheading}>Host</Text>
                                        <View style={styles.divider}/>
                                        <Text style={styles.eventTitle}>POKER & SALSA</Text>
                                        <Text style={styles.heading1}>PARTY</Text>
                                        <Text style={styles.heading1}> WED, 7:00</Text>
                                        <Text style={styles.eventDate}> September 23 </Text>
                                        <View style={styles.calendarCardFooter}>
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
                        </TouchableOpacity>
                    </View>

                    <View style={styles.CalendarCardContainer}>
                        <View style={styles.CalendarCardHeader}>
                            <View style={styles.hostPicContainer}>
                                <View style={styles.dummyStatus}>
                                    <Text style={{color: 'white'}}> abcdefg </Text>
                                </View>
                                <Image
                                    source={require(PICTURES_PATH + 'userbigphoto.imageset/userbigphoto.png')}
                                    style={styles.hostPic}
                                    resizeMode="cover"
                                />
                                <View style={styles.notifStatus2}>
                                    <Text style={{color: 'white'}}>Confirm</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.calendarCard}>
                            <View style={styles.calendarDetails}>
                                <Text style={styles.hostName}>Quentin</Text>
                                <Text style={styles.subheading}>Host</Text>
                                <View style={styles.divider}/>
                                <Text style={styles.eventTitle}> KETCHUP & ZOMBIE</Text>
                                <Text style={styles.heading1}> SAT, 9:00</Text>
                                <Text style={styles.eventDate}> September 26 </Text>
                                <View style={styles.calendarCardFooter}>
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

                    <View style={styles.CalendarCardContainer}>
                        <View style={styles.hostPicContainer}>
                            <View style={styles.CalendarCardHeader}>
                                <Image
                                    source={require(PICTURES_PATH + 'profilePhoto.imageset/profilePhoto.png')}
                                    style={styles.hostPic}
                                    resizeMode="cover"
                                />
                            </View>
                        </View>
                        <View style={styles.calendarCard}>
                            <View style={styles.calendarDetails}>
                                <Text style={styles.hostName}>Zac</Text>
                                <Text style={styles.subheading}>Host</Text>
                                <View style={styles.divider}/>
                                <Text style={styles.eventTitle}> MY OWN HOLIDAY </Text>
                                <Text style={styles.heading1}> FRI, 8:00</Text>
                                <Text style={styles.eventDate}> September 26 </Text>
                                <View style={styles.calendarCardFooter}>
                                    <Text style={{fontFamily: 'sans-serif-thin', fontSize: 13}}>
                                        <Image style={{width: 30, height: 30}}
                                               source={require('../assets/Icons/guest.imageset/guest.png')}/>
                                        24 Guests
                                    </Text>
                                    <Text style={{fontFamily: 'sans-serif-thin', fontSize: 13}}>
                                        <Image style={{width: 30, height: 30}}
                                               source={require('../assets/Icons/away.imageset/away.png')}/>
                                        1.7 Miles away
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 30,
        paddingBottom: 15,
        paddingLeft: 20,
        width: '100%'
    },
    menu1: {
        width: 20,
        height: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    yourCalendar: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'sans-serif',
        flexDirection: 'row',
        alignItems: 'center'
    },
    CalendarCardContainer: {
        width: SCREEN_WIDTH * 0.9,
        height: SCREEN_HEIGHT * 0.55,
        marginTop: SCREEN_HEIGHT * 0.2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    CalendarCardHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    calendarCard: {
        marginTop: -SCREEN_WIDTH * 0.2,
        backgroundColor: '#ffff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: SCREEN_WIDTH * 0.9,
        height: SCREEN_HEIGHT * 0.55,
        zIndex: 0,
        borderRadius: 5
    },
    calendarDetails: {
        zIndex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        height: SCREEN_HEIGHT * 0.55,
        width: '100%',
        flexDirection: 'column',
        padding: 20,
        marginTop: 10
    },
    calendarCardFooter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        bottom: 20,
        position: 'absolute'

    },
    notifBox: {
        backgroundColor: '#fff',
        width: SCREEN_WIDTH * 0.9,
        height: SCREEN_HEIGHT * 0.1,
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    notifText: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    notifMainText: {
        fontFamily: 'Roboto',
        fontSize: 16
    },
    notifSubText: {
        fontFamily: 'Roboto',
        fontSize: 12,
        flexDirection: 'column',
        color: '#b1b1b1'
    },
    notifIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    notifNum: {
        backgroundColor: '#E3422A',
        borderRadius: 50,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        width: 25,
        height: 25
    },
    notifStatus1: {
        backgroundColor: '#E3422A',
        borderRadius: 50,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        padding: 8,
        top: 30
    },
    notifStatus2: {
        backgroundColor: 'green',
        borderRadius: 50,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        padding: 8,
        top: 30
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
    hostPicContainer: {
        alignItems: 'center',
        height: SCREEN_WIDTH * 0.4,
        flexDirection: 'row',
        top: 0
    },
    hostPic: {
        width: SCREEN_WIDTH * 0.4,
        height: SCREEN_WIDTH * 0.4,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        borderWidth: 3,
        borderColor: '#fff',
        zIndex: 1
    },
    buttons: {
        marginTop: 0,
        width: 10,
    },
    hostName: {
        fontFamily: 'sans-serif-thin',
        fontSize: 20
    },
    subheading: {
        fontFamily: 'sans-serif-thin',
        fontSize: 15
    },
    eventTitle: {
        fontFamily: 'Roboto',
        fontSize: 25,
        fontWeight: 'bold',
    },
    heading1: {
        fontFamily: 'Roboto',
        fontSize: 25,
    },
    eventDate: {
        fontFamily: 'sans-serif-thin',
        fontSize: 12
    },
    divider: {
        borderBottomColor: '#f1f1f1',
        borderBottomWidth: 1,
        width: '30%',
        marginTop: 15,
        marginBottom: 15
    }
});




