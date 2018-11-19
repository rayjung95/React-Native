import React, {Component} from "react";
import {Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";

import Layout from "../constants/Layout";
import {WebBrowser} from 'expo';
import EventDetailsHiddenItemsComponent from "../components/EventDetailsHiddenItemsComponent";
import ReportEventComponent from "../components/ReportEventComponent";

const SCREEN_HEIGHT = Layout.window.height;
const SCREEN_WIDTH = Layout.window.width;

export default class EventDetailsScreen extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            eventHostName: 'Joseph',
            eventTitle: 'POOL PARTY',
            eventDescription: 'Paul and I can\'t believe how quickly the week went by. It was so great to see you.\n' +
                'Come visit us again soon and let us know how it goes.',
            eventDay: 'WED',
            eventTime: '7:00 PM',
            eventDate: 'SEPTEMBER 23',
            eventHostPhoto: require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png'),
            guestNums: 12,
            eventAway: 2.5,
            eventAddress: '123 Main st',
            eventConfirmed: false,
            isModalVisible: false,
            eventWebsite: 'No website',
            eventGuests: []
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const dayNames = ["MON", "TUES", "WED", "THUR", "FRI", "SAT", "SUN"];

        this.setState({
            eventHostName: this.props.navigation.getParam('event')['owner']['first'],
            eventTitle: this.props.navigation.getParam('event')['name'],
            eventDescription: this.props.navigation.getParam('event')['detail'],
            eventDay: dayNames[new Date(this.props.navigation.getParam('event')['start']).getDay()],
            eventTime: this._formatAMPM(new Date(this.props.navigation.getParam('event')['start'])),
            eventDate: monthNames[new Date(this.props.navigation.getParam('event')['start']).getMonth()] + ' ' +
                new Date(this.props.navigation.getParam('event')['start']).getDate(),
            eventHostPhoto: {uri: this.props.navigation.getParam('event')['owner']['photo1_url']},
            guestNums: this.props.navigation.getParam('event')['guests'].length,
            eventAddress: this.props.navigation.getParam('event')['location_name'],
            eventAway: '2.5',
            eventConfirmed: this.props.navigation.getParam('eventConfirmed'),
            eventWebsite: this.props.navigation.getParam('event')['website'] ? this.props.navigation.getParam('event')['website'] : 'No website',
            eventGuests: this.props.navigation.getParam('event')['guests']
        })
    }

    _formatAMPM = (date) => {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return hours + ':' + minutes + ' ' + ampm;
    };

    _handlePressSlack = () => {
        WebBrowser.openBrowserAsync(this.state.eventWebsite);
    };

    toggleModal() {
        this.setState({
            isModalVisible: !this.state.isModalVisible
        })
    }

    renderGuests = () => {
        return this.state.eventGuests.slice(0, 4).map((item, i) => {
            return (
                <View key={i} style={styles.guestPicThumbnailContainer}>
                    <Image
                        source={{uri: item['photo1_url']}}
                        style={styles.guestPicThumbnail}
                    />
                    <Text style={styles.guestName}> {item['first']} </Text>
                </View>
            )
        })
    }

    render() {
        const eventConfirmed = this.props.navigation.getParam('eventConfirmed');
        return (
            <ImageBackground style={styles.background} source={require('../assets/Pngs/bg.imageset/bg.png')}>
                <StatusBar hidden/>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image
                            source={require('../assets/Icons/go-back-left-arrow/go-back-left-arrow.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>

                    <Text style={styles.headerText}> {this.state.eventTitle} </Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.profilePicContainer}>
                        <View style={styles.profileContainer}>
                            <TouchableOpacity style={{marginRight: -45, width: 39, zIndex: 1}}
                                              onPress={() => this.props.navigation.navigate('Profile', {
                                                  message: eventConfirmed
                                              })}>
                                <Image
                                    source={require('../assets/Icons/account.imageset/account.png')}
                                    style={{zIndex: 1}}
                                />
                            </TouchableOpacity>

                            <Image
                                source={this.state.eventHostPhoto}
                                style={styles.eventDetailsHostPic}
                            />
                            {eventConfirmed ?
                                <TouchableOpacity
                                    style={{marginLeft: -40, zIndex: 1, width: 39}}
                                    onPress={() => this.props.navigation.navigate('ChatRoom')}>
                                    <Image
                                        source={require('../assets/Icons/chatting.imageset/chatting.png')}
                                        style={{zIndex: 1}}
                                    />
                                </TouchableOpacity>
                                : <View/>
                            }

                        </View>
                        <View style={styles.hostDetailsContainer}>
                            <Text style={styles.eventDetailsHostName}> {this.state.eventHostName} </Text>
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
                                <Text style={styles.eventDetailsText}> {this.state.eventDescription} </Text>
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
                                                {this.state.eventAddress}
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
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate('ChatRoom')}>
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
                                        </TouchableOpacity>
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
                                        <TouchableOpacity onPress={this._handlePressSlack}>
                                            <View style={styles.eventDetailsClickableItem}>
                                                <Text style={styles.eventDetailsText}>
                                                    {this.state.eventWebsite}
                                                </Text>
                                                <Image
                                                    source={require('../assets/Icons/rightArrow.imageset/rightArrow.png')}/>
                                            </View>
                                        </TouchableOpacity>
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
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate('GuestsList', {
                                                guests: this.state.eventGuests
                                            })}>
                                            <View style={styles.eventDetailsClickableItem}>

                                                <Text style={styles.eventDetailsText}>
                                                    Confirmed Guests
                                                </Text>

                                                <Image
                                                    source={require('../assets/Icons/rightArrow.imageset/rightArrow.png')}/>

                                            </View>
                                        </TouchableOpacity>

                                        <View style={styles.guestPicsContainer}>
                                            {this.renderGuests()}
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
                                        <TouchableOpacity
                                            style={styles.eventDetailsClickableItem}
                                            onPress={this.toggleModal}
                                        >
                                            <Text style={styles.eventDetailsText}>
                                                Report Event
                                            </Text>
                                            <Image
                                                source={require('../assets/Icons/rightArrow.imageset/rightArrow.png')}/>
                                        </TouchableOpacity>
                                        <View style={styles.divider}/>
                                    </View>
                                </View>
                            </View>
                            :
                            <EventDetailsHiddenItemsComponent/>
                        }
                        <ReportEventComponent isModalVisible={this.state.isModalVisible}/>
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
        width: '100%'
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
        width: SCREEN_HEIGHT * 0.24,
        height: SCREEN_HEIGHT * 0.24,
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
        width: SCREEN_WIDTH,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
    },
    textDetailsContainer: {
        width: SCREEN_WIDTH * 0.85,
        paddingLeft: 5
    },
    divider: {
        borderBottomColor: '#cacbcc',
        borderBottomWidth: 1,
        marginTop: 20,
        marginBottom: -20,
        width: '100%'
    },
    eventDetailsText: {
        color: '#8F8E94',
        fontSize: 14,
        fontFamily: 'Roboto',

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
        width: '100%'
    },
    guestPicThumbnail: {
        width: '90%',
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
        width: SCREEN_WIDTH * 0.15,
        marginTop: 5,
        paddingHorizontal: 5
    }
});












