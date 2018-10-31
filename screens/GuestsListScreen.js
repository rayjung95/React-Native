import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, Text, View, FlatList, Dimensions, Image, StatusBar, ImageBackground, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

const window = Dimensions.get('window')

export default class GuestsList extends Component {
    constructor() {
        super();
        this.state = {
            guestsListData:[]
        }
    }

    componentWillMount() {
        this.setState({
            guestsListData:[
                {   'id':'001',
                    'guestName':'Annie Hall',
                    'imageURL': 'https://pixabay.com/get/ea32b50b2ef0083ed1584d05fb1d4796e77ee4d719b90c4090f4c17fafe4b2b8dc_640.jpg'
                },
                {
                    'id':'002',
                    'guestName':'Something',
                    'imageURL': 'https://pixabay.com/get/ea32b30928f7013ed1584d05fb1d4796e77ee4d719b90c4090f4c17fafe4b2b8dc_640.jpg'
                },
                {
                    'id':'003',
                    'guestName':'Something',
                    'imageURL': 'https://pixabay.com/get/ea32b50b2ef0083ed1584d05fb1d4796e77ee4d719b90c4090f4c17faeedb4b1da_1280.jpg'
                },
                {
                    'id':'004',
                    'guestName':'Something',
                    'imageURL': 'https://pixabay.com/get/ea32b30928f7013ed1584d05fb1d4796e77ee4d719b90c4090f4c17fafe4b2b8dc_640.jpg'
                },
                {
                    'id':'005',
                    'guestName':'Something',
                    'imageURL': 'https://pixabay.com/get/ea32b50b2ef0083ed1584d05fb1d4796e77ee4d719b90c4090f4c17faeedb4b1da_1280.jpg'
                },
                {
                    'id':'006',
                    'guestName':'Something',
                    'imageURL': 'https://pixabay.com/get/ea32b50b2ef0083ed1584d05fb1d4796e77ee4d719b90c4090f4c17faeedb4b1da_1280.jpg'
                },
                {
                    'id':'007',
                    'guestName':'Something',
                    'imageURL': 'https://pixabay.com/get/ea32b50b2ef0083ed1584d05fb1d4796e77ee4d719b90c4090f4c17faeedb4b1da_1280.jpg'
                },
                {
                    'id':'008',
                    'guestName':'Something',
                    'imageURL': 'https://pixabay.com/get/ea32b50b2ef0083ed1584d05fb1d4796e77ee4d719b90c4090f4c17faeedb4b1da_1280.jpg'
                },
                {
                    'id':'009',
                    'guestName':'Something',
                    'imageURL': 'https://pixabay.com/get/ea32b50b2ef0083ed1584d05fb1d4796e77ee4d719b90c4090f4c17faeedb4b1da_1280.jpg'
                },
                {
                    'id':'010',
                    'guestName':'Something',
                    'imageURL': 'https://pixabay.com/get/ea32b50b2ef0083ed1584d05fb1d4796e77ee4d719b90c4090f4c17faeedb4b1da_1280.jpg'
                },
                {
                    'id':'011',
                    'guestName':'Something',
                    'imageURL': 'https://pixabay.com/get/ea32b50b2ef0083ed1584d05fb1d4796e77ee4d719b90c4090f4c17faeedb4b1da_1280.jpg'
                }
            ]
        })
    }

    displayGuestsList = ({item}) => {
        return(
                <View style={{height:window.height/8, flexDirection:'column'}}>
                    <TouchableOpacity style={styles.guest}
                        onPress={()=>this.props.navigation.navigate('GuestProfile')}
                    >
                        <View style={{flex:2, alignItems:'center'}}>
                            <View style={{width:window.width/7, height:window.width/7}}>
                                <Image style={{width:'100%', height:'100%', borderRadius:window.width, resizeMode:'cover'}} source={{uri: item.imageURL}}/>
                            </View>
                        </View>
                        <View style={{flex:5, alignItems:'flex-start'}}>
                            <Text style={{fontWeight:'bold'}}>{item.guestName}</Text>
                        </View>
                        <View style={{flex:1, alignItems:'center'}}>
                            <Image style={{width:window.height/45, height:window.height/45, resizeMode:'contain'}} source={require('../assets/Icons/rightArrow.imageset/rightArrow.png')}/>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex:1, alignItems:'flex-end'}}>
                        <View style={{flex:1, backgroundColor:'#A9A9A9', width:'95%'}}></View>
                    </View>
                </View>
        )
    }

    render() {
        return(
            <View style={{flex:1}}>
                <View 
                style={{height:StatusBar.currentHeight, backgroundColor:'black'}}>
                </View>
                <View style={{flex:1}}>
                    <ImageBackground
                        source={require('../assets/Pngs/bg.imageset/bg.png')}
                        style={{ width: "100%", height: "100%" }}
                    >
                        <View style={styles.container}>
                            <View style={styles.headerContainer}>
                                <View style={{flex:1, alignItems:'center'}}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('EventDetails')}>
                                        <Image style={{width:window.height/32, height:window.height/32, resizeMode:'contain'}} source={require('../assets/go-back-left-arrow.png')}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:5, alignItems:'flex-start',}}>
                                    <Text style={{color:'white'}}>Confirmed Guests</Text>
                                </View>
                                <View style={{flex:1, alignItems:'center'}}>
                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('GuestsListEdit')}>
                                        <Text style={{color:'yellow'}}>Edit</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.guestsList}>
                                <FlatList
                                    data={this.state.guestsListData}
                                    renderItem={this.displayGuestsList}
                                    numColumns={1}
                                    keyExtractor={(item, index) => item.id.toString()}
                                />
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}


styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
    },
    headerContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    guestsList:{
        flex:9,
        backgroundColor:'white',
    },
    guest:{
        flexDirection:'row',
        alignItems:'center',
        flex:60,
    }
})