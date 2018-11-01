import React, {Component} from "react";
import {Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Layout from "../constants/Layout";
import Hyperlink from 'react-native-hyperlink'
import EventDetailsClickableItemsComponent from "../components/EventDetailsClickableItemsComponent";

const SCREEN_HEIGHT = Layout.window.height;
const SCREEN_WIDTH = Layout.window.width;

export default class EventDetailsScreen extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            eventHostName: props.eventHostName,
            eventTitle: props.eventTitle,
            eventType: props.eventType,
            eventDay: props.eventDay,
            eventTime: props.eventTime,
            eventDate: props.eventDate,
            eventHostPhoto: '../assets/Pngs/profilePhoto.imageset/profilePhoto.png',
            guestNums: props.guestNums,
            eventAway: props.eventAway,
            eventAddress: props.eventAddress,
            eventWebsite: props.eventWebsite
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState = {
            eventHostName: nextProps.eventHostName,
            eventTitle: nextProps.eventTitle,
            eventType: nextProps.eventType,
            eventDay: nextProps.eventDay,
            eventTime: nextProps.eventTime,
            eventDate: nextProps.eventDate,
            eventHostPhoto: '../assets/Pngs/profilePhoto.imageset/profilePhoto.png',
            guestNums: nextProps.guestNums,
            eventAddress: nextProps.eventAddress,
            eventAway: nextProps.eventAway,
            eventWebsite: nextProps.eventWebsite
        }
    }

    render() {
        const eventConfirmed = this.props.navigation.getParam('eventConfirmed');
        return (
            <ImageBackground style={styles.background} source={require('../assets/Pngs/bg.imageset/bg.png')}>
                <View style={styles.headerContainer}>
                    {eventConfirmed ?
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('UserCalender')}>
                            <Image
                                source={require('../assets/Icons/go-back-left-arrow/go-back-left-arrow.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Landing')}>
                            <Image
                                source={require('../assets/Icons/go-back-left-arrow/go-back-left-arrow.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    }

                    <Text style={styles.headerText}> Ketchup & Zombie </Text>
                </View>
                <ScrollView>
                    <View style={styles.profilePicContainer}>
                        <View style={styles.profileContainer}>
                            <TouchableOpacity style={{marginRight: -45, width: 39, zIndex: 1}}
                                              onPress={() => this.props.navigation.navigate('HostProfile')}>
                                <Image
                                    source={require('../assets/Icons/account.imageset/account.png')}
                                    style={{zIndex: 1}}
                                />
                            </TouchableOpacity>

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
                    <View style={styles.eventDetailsContainer}>
                        <View style={styles.eventDetailsItemContainer}>
                            <View style={styles.eventDetailIcons}>
                                <Image
                                    source={require('../assets/Icons/event_detail.imageset/event_detail.png')}
                                />
                            </View>

                            <View style={styles.textDetailsContainer}>
                                <Text style={styles.eventDetailsText}>
                                    Paul and I can't believe how quickly the week went by. It was so great to see you.
                                    Come visit us again soon and let us know how it goes.
                                </Text>
                                <View style={styles.divider}/>
                            </View>
                        </View>
                        <View style={styles.eventDetailsItemContainer}>
                            <View style={styles.eventDetailIcons}>
                                <Image
                                    source={require('../assets/Icons/event_date.imageset/event_date.png')}
                                />
                            </View>
                            <View style={styles.textDetailsContainer}>
                                <Text style={styles.eventDetailsText}>
                                    Saturday, September 26 {"\n"}
                                    at 9:00pm to 5:00am
                                </Text>
                                <View style={styles.divider}/>
                            </View>
                        </View>

                        {eventConfirmed ?
                            <View>
                                <View style={styles.eventDetailsItemContainer}>
                                    <View style={styles.eventDetailIcons}>
                                        <Image
                                            source={require('../assets/Icons/event_away.imageset/event_away.png')}
                                        />
                                    </View>
                                    <View style={styles.textDetailsContainer}>
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
                                    <View style={styles.eventDetailIcons}>
                                        <Image
                                            source={require('../assets/Icons/group_chat.imageset/gc2.png')}
                                            style={{width: 20, height: 20}}
                                        />
                                    </View>
                                    <View style={styles.textDetailsContainer}>
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
                                    <View style={styles.eventDetailIcons}>
                                        <Image
                                            source={require('../assets/Icons/event_website.imageset/safari40.png')}
                                            style={{width: 20, height: 20}}
                                        />
                                    </View>
                                    <View style={styles.textDetailsContainer}>
                                        <View style={styles.eventDetailsClickableItem}>
                                            <Hyperlink linkDefault={true}>
                                                <Text style={styles.eventDetailsText}>
                                                    https://www.google.ca
                                                </Text>
                                            </Hyperlink>
                                            <Image
                                                source={require('../assets/Icons/rightArrow.imageset/rightArrow.png')}/>
                                        </View>
                                        <View style={styles.divider}/>
                                    </View>
                                </View>
                                <View style={styles.eventDetailsItemContainer}>
                                    <View style={styles.eventDetailIcons}>
                                        <Image
                                            source={require('../assets/Icons/event_host.imageset/event_host.png')}
                                        />
                                    </View>
                                    <View style={styles.textDetailsContainer}>
                                        <View style={styles.eventDetailsClickableItem}>
                                            <TouchableOpacity
                                                onPress={() => this.props.navigation.navigate('GuestsList')}>
                                                <Text style={styles.eventDetailsText}>
                                                    Confirmed Guests
                                                </Text>
                                            </TouchableOpacity>
                                            <Image
                                                source={require('../assets/Icons/rightArrow.imageset/rightArrow.png')}/>
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
                                    <View style={styles.eventDetailIcons}>
                                        <Image
                                            source={require('../assets/Icons/event_report.imageset/event_report.png')}
                                        />
                                    </View>
                                    <View style={styles.textDetailsContainer}>
                                        <View style={styles.eventDetailsClickableItem}>
                                            <Text style={styles.eventDetailsText}>
                                                Report Event
                                            </Text>
                                            <Image
                                                source={require('../assets/Icons/rightArrow.imageset/rightArrow.png')}/>
                                        </View>
                                        <View style={styles.divider}/>
                                    </View>
                                </View>
                            </View>
                            :
                            <EventDetailsClickableItemsComponent eventConfirmed={false}/>
                        }


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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        marginTop: SCREEN_HEIGHT * 0.0275
    },
    icon: {
        width: 20,
        height: 20,
        margin: SCREEN_WIDTH * 0.053
    },
    headerText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Roboto'
    },
    profilePicContainer: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT * 0.4203125,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    eventDetailsHostPic: {
        width: SCREEN_WIDTH * 0.4,
        height: SCREEN_WIDTH * 0.4,
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
    textDetailsContainer: {
        width: SCREEN_WIDTH * 0.86,
        paddingLeft: SCREEN_WIDTH * 0.053
    },
    divider: {
        borderBottomColor: '#cacbcc',
        borderBottomWidth: 1,
        marginTop: 20,
        marginBottom: -20,
        marginLeft: SCREEN_WIDTH * 0.053,
        width: '100%'
    },
    eventDetailsText: {
        color: '#8F8E94',
        fontSize: 14,
        fontFamily: 'Roboto',
        marginLeft: SCREEN_WIDTH * 0.053,

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
        alignItems: 'center',
        justifyContent: 'center'
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
        alignItems: 'center',
        marginLeft: SCREEN_WIDTH * 0.053,
        width: '100%'
    },
    guestPicThumbnail: {
        width: '100%',
        height: SCREEN_HEIGHT * 0.099375,
        borderRadius: 4,
        marginTop: 24,
        borderWidth: 1,
        borderColor: 'rgba(250, 250, 250, 0.5)'
    },
    guestPicThumbnailContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10,

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
    },
    eventDetailIcons: {
        width: SCREEN_WIDTH * 0.14,
        marginTop: 5,
        paddingHorizontal: SCREEN_WIDTH * 0.021666667
    }
});












