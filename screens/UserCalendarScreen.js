import React, {Component} from "react";
import {Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import EventComponent from "../components/EventComponent";
import Layout from "../constants/Layout";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getUserBookings} from "../actions/userActions";

const SCREEN_HEIGHT = Layout.window.height;
const SCREEN_WIDTH = Layout.window.width;

class UserCalendarScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    componentDidMount() {
        this.props.getUserBookings(199);
    }

    renderNotifs = () => {
        if (this.props.user.myEvents.length > 0) {
            return this.props.user.myEvents.map((item, i) => {
                return (
                    <TouchableOpacity  key={i} onPress={() => this.props.navigation.navigate('Guest')} activeOpacity={0.9}>
                        <View style={styles.notifBox}>
                            <Text style={styles.notifText}>
                                <Text style={styles.notifMainText}> {item.event.name} {"\n"}</Text>
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
                    </TouchableOpacity>
                )
            })
        }
    };

    renderEvents = () => {
        if (this.props.user.userBookings.length > 0) {
            console.log(this.props.user.userBookings.length);
            return this.props.user.userBookings.map((item, i) => {
                let isSongkick = 'performance' in item;
                let isCurrentUserHost = !isSongkick && item.isCurrentUserHost;
                if (item['owner']['first'] && !isSongkick) {
                    return (
                        <TouchableOpacity
                            key={i}
                            onPress={() => this.props.navigation.navigate('EventDetails', {
                                event: item,
                                eventConfirmed: true,
                                isSongkick: isSongkick
                            })}
                            style={{borderRadius: 8}} activeOpacity={0.9}
                        >
                            <View style={styles.CalendarCardContainer}>
                                <EventComponent event={item} eventConfirmed={true}
                                                isCurrentUserHost={isCurrentUserHost} isSongkick={isSongkick}/>
                            </View>
                        </TouchableOpacity>
                    )
                }
            })
        } else {
            return (<View/>)
        }
    };

    render() {
        return (
            <ImageBackground style={styles.background} source={require('../assets/Pngs/bg.imageset/bg.png')}>
                <StatusBar hidden/>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Landing')} activeOpacity={0.9}>
                        <Image source={require('../assets/Icons/main_feed.imageset/main_feed.png')}
                               style={styles.menu1}/>
                    </TouchableOpacity>
                    <Text style={styles.yourCalendar}> Your Calendar </Text>
                    <View style={{width: 20, height: 20}}/>
                </View>

                <ScrollView style={{zIndex: 1, paddingBottom: 10}} showsVerticalScrollIndicator={false}>
                    {this.renderNotifs()}
                    {this.renderEvents()}

                </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: SCREEN_HEIGHT * 0.0265625,
        width: SCREEN_WIDTH * 0.8722
    },
    menu1: {
        width: 20,
        height: 20
    },
    yourCalendar: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'sans-serif',
        alignItems: 'center'
    },
    CalendarCardContainer: {
        flex: 1,
        width: SCREEN_WIDTH * 0.8722,
        height: SCREEN_HEIGHT * 0.6231375,
        marginTop: SCREEN_HEIGHT * 0.05,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    notifBox: {
        backgroundColor: '#fff',
        width: SCREEN_WIDTH * 0.8722,
        height: SCREEN_HEIGHT * 0.09375,
        marginTop: SCREEN_HEIGHT * 0.025,
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
    buttons: {
        marginTop: 0,
        width: 10,
    }
});

const mapStateToProps = (state) => {
    const {user} = state;
    return {user}
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getUserBookings
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(UserCalendarScreen);




