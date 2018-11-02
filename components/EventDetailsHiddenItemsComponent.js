import React, {Component} from 'react'
import {Image, StyleSheet, Text, View} from 'react-native';
import Layout from "../constants/Layout";

const SCREEN_HEIGHT = Layout.window.height;
const SCREEN_WIDTH = Layout.window.width;

export default class EventDetailsHiddenItemsComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            location: {
                icon: require('../assets/Icons/event_away_lock.imageset/event_away_lock.png'),
                value: 'Address is locked till approved by host'
            },
            groupChat: {
                icon: require('../assets/Icons/event_host_lock.imageset/event_host_lock.png'),
                value: 'Group chat is locked till approved by host'
            },
            website: {
                icon: require('../assets/Icons/event_host_lock.imageset/event_host_lock.png'),
                value: 'Website info is locked till approved by host'
            },
            guestsInfo: {
                icon: require('../assets/Icons/event_host_lock.imageset/event_host_lock.png'),
                value: 'Guests info is locked till approved by host'
            }
        }

    }

    renderEventDetailsItems = () => {
        return Object.values(this.state).map((item, i) => {
            return (
                <View style={styles.eventDetailsItemContainer}>
                    <View style={styles.eventDetailIcons}>
                        <Image source={item.icon}/>
                    </View>
                    <View style={styles.textDetailsContainer}>
                        <Text style={styles.eventDetailsText}>
                            {item.value}
                        </Text>
                        <View style={styles.divider}/>
                    </View>
                </View>
            )
        })
    };

    render() {
        return (
            <View>
                {this.renderEventDetailsItems()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
    eventDetailIcons: {
        width: SCREEN_WIDTH * 0.14,
        marginTop: 5,
        paddingHorizontal: SCREEN_WIDTH * 0.021666667
    }
});