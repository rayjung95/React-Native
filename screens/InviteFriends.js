import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, StatusBar, TouchableOpacity, SectionList } from 'react-native';
import { Contacts, Permissions } from 'expo';


export default class InviteFriends extends Component {

    constructor() {
        super();
        this.state = {
            headerLeftImg: require('../assets/Icons/go-back-left-arrow/go-back-left-arrow.png'),
            headerLeftText: 'Invite Friends',
            myContacts: [],
        }
        this.getContactAsync();
    }

    static navigationOptions = {
        header: null,
    };

    async getContactAsync() {
        // Ask for permission to query contacts.
        const permission = await Permissions.askAsync(Permissions.CONTACTS);

        // if (permission.status !== 'granted') {
        //     // Permission was denied...
        //     return;
        // }
        const contacts = await Contacts.getContactsAsync({
            fields: [
                Contacts.PHONE_NUMBERS
            ],
        });
        var temp = [];
        var tempdata = [];
        var headerString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (indx in headerString) {
            for ( item in contacts.data) {
                if (contacts.data[item].name[0] == headerString[indx]) {
                    tempdata.push({
                        name: contacts.data[item].name,
                        phone: contacts.data[item].phoneNumbers[0].number,
                    });
                }
            }
            if (tempdata.length != 0) {
                temp.push({ head: headerString[indx], data: tempdata});
                tempdata = [];
            }
        }
        this.setState({
            myContacts: temp
        })
    }

    render() {
        return (
            <ImageBackground style={styles.background} source={require('../assets/Pngs/bg.imageset/bg.png')}>
                <StatusBar hidden />
                <View style={styles.header}>
                    <View style={styles.leftHeader}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileSetting')}>
                            <Image style={styles.headerLeftImage} source={this.state.headerLeftImg}/>
                        </TouchableOpacity>
                        <Text style={styles.headerLeftText}>{this.state.headerLeftText}</Text>
                    </View>
                    <View style={styles.rightHeader}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileSetting')}>
                            <Image style={styles.headerMultiSelect} source={require('../assets/Icons/multiselect.imageset/multiselect.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileSetting')}>
                            <Image style={styles.headerMultiSelect} source={require('../assets/Icons/search.imageset/search.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <SectionList
                        initialNumToRender={100}
                        renderItem={({item, index}) => 
                            <TouchableOpacity>
                                <View key={index} style={styles.contactViews}>
                                    <Text style={{fontSize: width / 20, marginLeft: width * 0.04}}>{item.name}</Text>
                                    <Text style={{ fontSize: width / 30, marginLeft: width * 0.04}}>{item.phone}</Text>
                                </View>
                            </TouchableOpacity>}
                        sections={this.state.myContacts}
                        keyExtractor={(item, index) => {console.log(item + index); return item + index}}
                        renderSectionHeader={(item) => 
                            <View style={styles.contactHeader}>
                                <Text style={{ fontSize: width / 20, fontWeight: 'bold', marginLeft: width * 0.04}}>{item.section.head}</Text>
                            </View>
                        }
                    />
                </View>
            </ImageBackground>
        );
    }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        height: height * .08,
        width: width,
    },
    leftHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    headerLeftImage: {
        height: height / 40,
        width: height / 40,
        margin: width * 0.045,
    },
    headerLeftText: {
        color: 'white',
        fontSize: width / 17,
    },
    rightHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: width * 0.03,
    },
    headerMultiSelect: {
        height: height / 40,
        width: height / 40,
        margin: width * 0.02,
    },
    headerSearch: {
        height: height / 40,
        width: height / 40,
    },
    contactViews: {
        flex: 1,
        justifyContent: 'center',
        width: width,
        height: height * 0.1,
        backgroundColor: 'white',
    },
    contactHeader: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        height: height * 0.05
    },
});