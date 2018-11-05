import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, StatusBar, TouchableOpacity, SectionList, TextInput } from 'react-native';
import { Contacts, Permissions } from 'expo';

//TODOS: create method for searching 


export default class InviteFriends extends Component {

    constructor() {
        super();
        //Usage of states:
        //myContacts - base array with all contacts
        //shownContacts - initially equal to myContacts. will change depending on search parameters.
        this.state = {
            headerLeftImg: require('../assets/Icons/go-back-left-arrow/go-back-left-arrow.png'),
            contactUnselected: require('../assets/Icons/selectContact.imageset/unchecked.png'),
            contactSelected: require('../assets/Icons/selectContact.imageset/checked.png'),
            headerLeftText: 'Invite Friends',
            myContacts: [],
            shownContacts: [],
            numSelectedContacts: 0,
            search: false,
            selectedContactsList: [],
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
        const contacts = await Contacts.getContactsAsync();
        // console.log(contacts.data);
        var temp = [];
        var tempdata = [];
        var headerString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var primaryNumSaved = false;
        //loop thru alphabet string a letter at a time
        for (indx in headerString) {
            //loop thru each contact
            for ( item in contacts.data) {
                //if contact has a phone number saved, proceed, else ignore
                if (contacts.data[item].phoneNumbers.length != 0) {
                    //if contact name first letter in uppercase is same as current letter being looped
                    if (contacts.data[item].name[0].toUpperCase() == headerString[indx]) {
                        //if contact only has 1 number, use number
                        if (contacts.data[item].phoneNumbers.length == 1) {
                            tempdata.push({
                                name: contacts.data[item].name,
                                phone: contacts.data[item].phoneNumbers[0].number,
                                id: contacts.data[item].id,
                            });
                        } else if (contacts.data[item].phoneNumbers.length > 1) {
                            //if contact has more than 1 number saved, look if there is a primary assigned,
                            //else get the first number in the array
                            // TODO: ask Austin how he wants to this to behave and update function to include numbers and symbols
                            for (c in contacts.data[item].phoneNumbers) {
                                if (contacts.data[item].phoneNumbers[c].isPrimary == 1) {
                                    tempdata.push({
                                        name: contacts.data[item].name,
                                        phone: contacts.data[item].phoneNumbers[c].number,
                                        id: contacts.data[item].id,
                                    });
                                    primaryNumSaved = true;
                                }
                            }
                            if (primaryNumSaved == false) {
                                tempdata.push({
                                    name: contacts.data[item].name,
                                    phone: contacts.data[item].phoneNumbers[0].number,
                                    id: contacts.data[item].id,
                                });
                            }
                            primaryNumSaved = false;
                        }
                    }
                }
            }
            if (tempdata.length != 0) {
                temp.push({ head: headerString[indx], data: tempdata});
                tempdata = [];
            }
        }
        this.setState({
            myContacts: temp,
            shownContacts: temp
        })
    }

    showContacts = ({item, index}) => {
        return (
            <TouchableOpacity onPress={() => {
                    if (this.state.selectedContactsList.includes(item.phone)) {
                        this.state.selectedContactsList.splice(this.state.selectedContactsList.indexOf(item.phone))
                    } else {
                        this.state.selectedContactsList.push(item.phone)
                    }
                    this.setState({
                        numSelectedContacts: this.state.selectedContactsList.length
                    })
                }}>
                <View key={index} style={styles.contactViews}>
                    <Text style={{ fontSize: width / 20, marginLeft: width * 0.04 }}>{item.name}</Text>
                    <Text style={{ fontSize: width / 30, marginLeft: width * 0.04 }}>{item.phone}</Text>
                    <Image style={{position: 'absolute', right: width * 0.07, top: 0, bottom: 0, width: width * 0.05, resizeMode: 'contain'}}
                        source={this.state.selectedContactsList.includes(item.phone) ? this.state.contactSelected : this.state.contactUnselected} />
                </View>
            </TouchableOpacity>
        )
    }

    showHeaders = (item) => {
        return (
            <View style={styles.contactHeader}>
                <Text style={{ fontSize: width / 20, fontWeight: 'bold', marginLeft: width * 0.04 }}>{item.section.head}</Text>
            </View>
        )
    }

    openSearch = () => {
        if (this.state.search) {
            return <TextInput style={styles.searchBar}/>
        } else {
            return null;
        }
    }

    render() {
        return (
            <ImageBackground style={styles.background} source={require('../assets/Pngs/bg.imageset/bg.png')}>
                <View style={styles.header}>
                    <View style={styles.leftHeader}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileSetting')}>
                            <Image style={styles.headerLeftImage} source={this.state.headerLeftImg}/>
                        </TouchableOpacity>
                        <Text style={styles.headerLeftText}>{this.state.headerLeftText}</Text>
                    </View>
                    <View style={styles.rightHeader}>
                        <TouchableOpacity onPress={() => {console.log('Before ' + this.state.search);}}>
                            <Image style={styles.headerMultiSelect} source={require('../assets/Icons/multiselect.imageset/multiselect.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                                this.setState({
                                    search: this.state.search ? false : true
                                })
                                this.openSearch();
                            }}>
                            <Image style={styles.headerMultiSelect} source={require('../assets/Icons/search.imageset/search.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <TextInput style={{width: width, fontSize: width / 20, marginLeft: width * 0.03}} placeholder={'Search'} underlineColorAndroid={'transparent'}/>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <SectionList
                        initialNumToRender={100}
                        renderItem={this.showContacts}
                        sections={this.state.shownContacts}
                        keyExtractor={(item, index) => {return item + index}}
                        renderSectionHeader={this.showHeaders}
                    />
                </View>
                {/*-TODO: find a way to have <TouchableOpacity> while absolute. currently dont work.-*/}
                <View style={styles.sendInviteButton}>
                    <View style={styles.selectCounterBg}>
                        <Text style={styles.selectCounter}>{this.state.numSelectedContacts}</Text>
                    </View>
                    <Text style={styles.sendInviteText}>Invite Friends</Text>
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
        marginTop: StatusBar.currentHeight
    },
    leftHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    headerLeftImage: {
        height: height / 30,
        width: height / 30,
        margin: width * 0.045,
    },
    headerLeftText: {
        color: 'white',
        fontSize: width / 19,
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
    searchBar: {
        width: width,
        height: height * 0.05,
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
    sendInviteButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: width,
        height: height * 0.08,
        backgroundColor: 'yellow',
    },
    selectCounterBg: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: width * 0.12,
        borderRadius: 20,
        marginRight: width * 0.01
    },
    selectCounter: {
        color: 'yellow',
        fontSize: width / 20,
    },
    sendInviteText: {
        color: 'white',
        fontSize: width / 20,

    },
});