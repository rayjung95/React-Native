import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image, StatusBar, TouchableHighlight, TouchableOpacity, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';

const window = Dimensions.get('window')


export default class GuestProfile extends Component {

    constructor() {
        super();
        this.state = {
            mutualFriendsData:[]
        }
    }

    componentWillMount() {
        this.setState({
            mutualFriendsData:[
                {   
                    'id':'001',
                    'mutualFriendName':'Annie',
                    'imageURL': 'https://pixabay.com/get/ea32b50b2ef0083ed1584d05fb1d4796e77ee4d719b90c4090f4c17fafe4b2b8dc_640.jpg'
                },
                {   
                    'id':'002',
                    'mutualFriendName':'Annie',
                    'imageURL': 'https://pixabay.com/get/ea32b50b2ef0083ed1584d05fb1d4796e77ee4d719b90c4090f4c17fafe4b2b8dc_640.jpg'
                },
                {   
                    'id':'003',
                    'mutualFriendName':'Annie',
                    'imageURL': 'https://pixabay.com/get/ea32b50b2ef0083ed1584d05fb1d4796e77ee4d719b90c4090f4c17fafe4b2b8dc_640.jpg'
                },
                {   
                    'id':'004',
                    'mutualFriendName':'Annie',
                    'imageURL': 'https://pixabay.com/get/ea32b50b2ef0083ed1584d05fb1d4796e77ee4d719b90c4090f4c17fafe4b2b8dc_640.jpg'
                },
                {   
                    'id':'005',
                    'mutualFriendName':'Annie',
                    'imageURL': 'https://pixabay.com/get/ea32b50b2ef0083ed1584d05fb1d4796e77ee4d719b90c4090f4c17fafe4b2b8dc_640.jpg'
                },
                {   
                    'id':'006',
                    'mutualFriendName':'Annie',
                    'imageURL': 'https://pixabay.com/get/ea32b50b2ef0083ed1584d05fb1d4796e77ee4d719b90c4090f4c17fafe4b2b8dc_640.jpg'
                },
                {   
                    'id':'007',
                    'mutualFriendName':'Annie',
                    'imageURL': 'https://pixabay.com/get/ea32b50b2ef0083ed1584d05fb1d4796e77ee4d719b90c4090f4c17fafe4b2b8dc_640.jpg'
                },
                {   
                    'id':'008',
                    'mutualFriendName':'Annie',
                    'imageURL': 'https://pixabay.com/get/ea32b50b2ef0083ed1584d05fb1d4796e77ee4d719b90c4090f4c17fafe4b2b8dc_640.jpg'
                },
                {   
                    'id':'009',
                    'mutualFriendName':'Annie',
                    'imageURL': 'https://pixabay.com/get/ea32b50b2ef0083ed1584d05fb1d4796e77ee4d719b90c4090f4c17fafe4b2b8dc_640.jpg'
                },
                {   
                    'id':'010',
                    'mutualFriendName':'Annie',
                    'imageURL': 'https://pixabay.com/get/ea32b50b2ef0083ed1584d05fb1d4796e77ee4d719b90c4090f4c17fafe4b2b8dc_640.jpg'
                },
            ]
        })
    }

    displayMutualFriends = ({item}) => {
        return(
            <View style={styles.friends}>
                <TouchableHighlight>
                    <Image source={{uri:item.imageURL}} style={styles.friendsImages}/>
                </TouchableHighlight>
                <Text style={{fontSize:window.height/50}}>Eric</Text>
            </View>
        )
    }

    render() {
      return (
        <View style={{flex:1}}>
            <View style={{height:StatusBar.currentHeight, backgroundColor:'black'}}></View>
            <View>
                <View style={styles.profPicContainer}>
                    <Swiper horizontal={true} style={{flex:1}} activeDotStyle={{backgroundColor:'yellow'}}>
                        <Image style={styles.images} source={require('../assets/girlphoto.png')}/>
                        <Image style={styles.images} source={require('../assets/profilePhoto.png')}/>
                        <Image style={styles.images} source={require('../assets/userbigphoto.png')}/>
                        <Image style={styles.images} source={require('../assets/userbigphoto.png')}/>
                    </Swiper>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('GuestsList')}>
                        <Image style={{width:window.height/16,height:window.height/16,position:'absolute', top:window.height/46, left:window.height/46}} source={require('../assets/Icons/minimize.imageset/minimize.png')}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.profInfoContainer}>
                    <View style={styles.nameAge}>
                        <View style={{alignItems:'flex-start', justifyContent:'center', flex:1}}>
                            <Text style={{fontSize:window.height/28, fontWeight:'bold', margin:10}}>Scarlett, 31</Text>
                        </View>
                        <View style={{alignItems:'flex-end', justifyContent:'center', flex:1}}>
                            <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}>
                                <Text style={{fontSize:window.height/50}}>Instagram</Text>
                                <Image source={require('../assets/instagram.png')} style={{resizeMode:'contain',width:window.height/24, height:window.height/24, margin:10}}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.description}>
                        <Text style={{marginLeft:10, marginRight:10, marginBottom:10, fontSize:window.height/45}}>
                            Johasson began acting during childhood, after her mother started taking her to auditions. 
                            She would audition for commercials but took rejection so hard that her mother began limiting her to film tryouts.
                        </Text>
                    </View>
                    <View style={styles.mutualFriends}>
                        <View style={{flex:0.75, justifyContent:'center'}}>
                            <Text style={{marginLeft:10, marginRight:10, fontSize:window.height/40}}>Mutual friends: </Text>
                        </View>
                        <View style={{flex:4}} >
                            <View style={{flex:1, marginLeft:10, marginRight:10}}>
                                <FlatList
                                    data={this.state.mutualFriendsData}
                                    renderItem={this.displayMutualFriends}
                                    keyExtractor={(item, index) => item.id.toString()}
                                    horizontal={true}
                                />
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    profPicContainer: {
        width:window.width,
        height:window.height/2 + window.height/12,
    },
    profInfoContainer: {
        width:window.width,
        height:window.height/2,
        flexDirection:'column',
    },
    locks:{
        width:window.width,
        backgroundColor:'red'
    },
    images:{
        width:'100%',
        height:'100%',
    },
    nameAge:{
        flex:2,
        flexDirection:'row',
    },
    description:{
        flex:3.25,
    },
    mutualFriends:{
        flex:9,
        flexDirection: 'column',
    },
    friends:{
        flexDirection:'column',
        alignItems:'center',
        height:window.height/8,
        width: window.height/9,
        justifyContent:'flex-end',
        marginLeft:-5,
    },
    friendsImages:{
        height:window.height/10.5,
        width:window.height/10.5,
        borderRadius:5
    },
})