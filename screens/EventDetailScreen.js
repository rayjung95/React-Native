
import React, {Component} from "react";
import {Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity} from "react-native";


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class EventDetailsScreen extends Component {

    static navigationOptions = {
        header: null,
    };


    render() {
        return (
            <ImageBackground style={styles.background} source={require('../assets/Pngs/bg.imageset/bg.png')}>
                <ScrollView>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('UserCalender')}>
                        <Image
                            source={require('../assets/Icons/go-back-left-arrow/go-back-left-arrow.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerText}> Ketchup & Zombie </Text>
                </View>
                    <View style={styles.profilePicContainer}>
                        <View style={styles.profilePicContentContainer}>
                            <View style={styles.profileContainer}>
                                <Image
                                    source={require('../assets/Icons/chatting.imageset/chatting.png')}
                                    style={{marginRight: -40, zIndex: 1}}
                                />
                                <Image
                                    source={require('../assets/Pngs/userbigphoto.imageset/userbigphoto.png')}
                                    style={styles.eventDetailsHostPic}
                                />
                                <Image
                                    source={require('../assets/Icons/chatting.imageset/chatting.png')}
                                    style={{marginLeft: -40, zIndex: 1}}
                                />
                            </View>
                            <View style={styles.hostDetailsContainer}>
                                <Text style={styles.eventDetailsHostName}> Quentin </Text>
                                <Text style={styles.eventDetailsHostName2}> Host </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.eventDetailsContainer}>
                        <View style={styles.eventDetailsItemContainer}>
                            <View style={{width: SCREEN_WIDTH * 0.14, marginTop: 5, marginRight: 10}}>
                                <Image
                                    source={require('../assets/Icons/event_detail.imageset/event_detail.png')}
                                />
                            </View>

                            <View style={{width: SCREEN_WIDTH * 0.86}}>
                                <Text style={styles.eventDetailsText}>
                                    Paul and I can't believe how quickly the week went by. It was so great to see you.
                                    Come visit us again soon and let us know how it goes.
                                </Text>
                                <View style={styles.divider}/>
                            </View>
                        </View>
                        <View style={styles.eventDetailsItemContainer}>
                            <View style={{width: SCREEN_WIDTH * 0.14, marginTop: 5}}>
                                <Image
                                    source={require('../assets/Icons/event_date.imageset/event_date.png')}
                                />
                            </View>
                            <View style={{width: SCREEN_WIDTH * 0.86}}>
                                <Text style={styles.eventDetailsText}>
                                    Saturday, September 26 {"\n"}
                                    at 9:00pm to 5:00am
                                </Text>
                                <View style={styles.divider}/>
                            </View>
                        </View>
                        <View style={styles.eventDetailsItemContainer}>
                            <View style={{width: SCREEN_WIDTH * 0.14, marginTop: 5}}>
                                <Image
                                    source={require('../assets/Icons/event_away.imageset/event_away.png')}
                                />
                            </View>
                            <View style={{width: SCREEN_WIDTH * 0.86}}>
                                <View style={styles.eventDetailsClickableItem}>
                                    <Text style={styles.eventDetailsText}>
                                        1.7 Miles away. {"\n"}
                                        2167 Daryl Mountains, Redwood
                                    </Text>
                                    <Image
                                        source={require('../assets/Icons/rightArrow.imageset/rightArrow.png')}
                                    />
                                </View>
                                <View style={styles.divider}/>
                            </View>
                        </View>
                        <View style={styles.eventDetailsItemContainer}>
                            <View style={{width: SCREEN_WIDTH * 0.14, marginTop: 5}}>
                                <Image
                                    source={require('../assets/Icons/group_chat.imageset/gc2.png')}
                                    style={{width: 20, height: 20}}
                                />
                            </View>
                            <View style={{width: SCREEN_WIDTH * 0.86}}>
                                <View style={styles.eventDetailsClickableItem}>
                                    <Text style={styles.eventDetailsText}>
                                        Group Chat
                                    </Text>

                                    <View style={{
                                        flexDirection: 'row',
                                        flex: 1,
                                        justifyContent: 'flex-end',
                                        alignItems: 'center'
                                    }}>
                                        <View style={styles.msgAlert}>
                                            <Text style={styles.alertNum}> 2 </Text>
                                        </View>
                                        <Image
                                            source={require('../assets/Icons/rightArrow.imageset/rightArrow.png')}/>
                                    </View>
                                </View>
                                <View style={styles.divider}/>
                            </View>
                        </View>
                        <View style={styles.eventDetailsItemContainer}>
                            <View style={{width: SCREEN_WIDTH * 0.14, marginTop: 5}}>
                                <Image
                                    source={require('../assets/Icons/event_website.imageset/safari40.png')}
                                    style={{width: 20, height: 20}}
                                />
                            </View>
                            <View style={{width: SCREEN_WIDTH * 0.86}}>
                                <View style={styles.eventDetailsClickableItem}>
                                    <Text style={styles.eventDetailsText}>
                                        http://www.songkick.com/concerts/Ben…
                                    </Text>
                                    <Image source={require('../assets/Icons/rightArrow.imageset/rightArrow.png')}/>
                                </View>
                                <View style={styles.divider}/>
                            </View>
                        </View>
                        <View style={styles.eventDetailsItemContainer}>
                            <View style={{width: SCREEN_WIDTH * 0.14, marginTop: 5}}>
                                <Image
                                    source={require('../assets/Icons/event_host.imageset/event_host.png')}
                                />
                            </View>
                            <View style={{width: SCREEN_WIDTH * 0.875}}>
                                <View style={styles.eventDetailsClickableItem}>
                                    <Text style={styles.eventDetailsText}>
                                        Confirmed Guests
                                    </Text>
                                    <Image source={require('../assets/Icons/rightArrow.imageset/rightArrow.png')}/>
                                </View>
                                <View style={styles.guestPicsContainer}>
                                    <View style={styles.guestPicThumbnailContainer}>
                                        <Image
                                            source={require('../assets/Pngs/userbigphoto.imageset/userbigphoto.png')}
                                            style={styles.guestPicThumbnail}
                                        />
                                        <Text style={styles.guestName}> Eric </Text>
                                    </View>
                                    <View style={styles.guestPicThumbnailContainer}>
                                        <Image
                                            source={require('../assets/Pngs/userbigphoto.imageset/userbigphoto.png')}
                                            style={styles.guestPicThumbnail}
                                        />
                                        <Text style={styles.guestName}> Flora </Text>
                                    </View>
                                    <View style={styles.guestPicThumbnailContainer}>
                                        <Image
                                            source={require('../assets/Pngs/userbigphoto.imageset/userbigphoto.png')}
                                            style={styles.guestPicThumbnail}
                                        />
                                        <Text style={styles.guestName}> Keith </Text>
                                    </View>
                                    <View style={styles.guestPicThumbnailContainer}>
                                        <Image
                                            source={require('../assets/Pngs/userbigphoto.imageset/userbigphoto.png')}
                                            style={styles.guestPicThumbnail}
                                        />
                                        <Text style={styles.guestName}> Ryan </Text>
                                    </View>
                                </View>
                                <View style={styles.divider}/>
                            </View>
                        </View>
                        <View style={styles.eventDetailsItemContainer}>
                            <View style={{width: SCREEN_WIDTH * 0.14, marginTop: 5}}>
                                <Image
                                    source={require('../assets/Icons/event_report.imageset/event_report.png')}
                                />
                            </View>
                            <View style={{width: SCREEN_WIDTH * 0.875}}>
                                <View style={styles.eventDetailsClickableItem}>
                                    <Text style={styles.eventDetailsText}>
                                        Report Event
                                    </Text>
                                    <Image source={require('../assets/Icons/rightArrow.imageset/rightArrow.png')}/>
                                </View>
                                <View style={styles.divider}/>
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
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20,
        width: '100%',
        height: SCREEN_HEIGHT * 0.08
    },
    icon: {
        width: 20,
        height: 20,
        margin: 20
    },
    headerText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Roboto'
    },
    profilePicContainer: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT * 0.3,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    eventDetailsHostPic: {
        width: 144,
        height: 144,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100
    },
    profilePicContentContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    eventDetailsHostName: {
        fontFamily: 'Roboto',
        fontSize: 23,
        color: '#535151'
    },
    eventDetailsHostName2: {
        fontFamily: 'Roboto',
        fontSize: 12,
        color: '#535151'
    },
    eventDetailsContainer: {
        backgroundColor: '#F2F3F4',
        width: '100%'
    },
    eventDetailsItemContainer: {
        width: SCREEN_WIDTH * 0.86,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        marginLeft: 15
    },
    divider: {
        borderBottomColor: '#cacbcc',
        borderBottomWidth: 1,
        marginTop: 20,
        marginBottom: -20
    },
    eventDetailsText: {
        color: '#8F8E94',
        fontSize: 14,
        fontFamily: 'Roboto',
        marginLeft: 20
    },
    eventDetailsClickableItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    msgAlert: {
        width: 27,
        height: 27,
        borderRadius: 24,
        backgroundColor: '#E3422A',
        marginRight: 10,
        alignItems: 'center'
    },
    alertNum: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Roboto'
    },
    guestPicsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    guestPicThumbnail: {
        width: 63.5,
        height: 63.5,
        borderRadius: 4,
        marginRight: 10,
        marginTop: 24,
        borderWidth: 1,
        borderColor: 'rgba(250, 250, 250, 0.5)'
    },
    guestPicThumbnailContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    guestName: {
        color: '#8C8C8C',
        fontFamily: 'Roboto',
        fontSize: 11
    },
    profileMsgContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        width: '40%',
        marginLeft: 70,
        marginTop: -100
    },
    profileContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'baseline',
        padding: 30
    },
    hostDetailsContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});












