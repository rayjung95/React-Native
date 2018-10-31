import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Image, StatusBar, ImageBackground, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

const window = Dimensions.get('window')

export default class GuestsListEdit extends Component {
    constructor() {
        super();
        this.state = {
            guestsListData:[],
            checked:true,
            selected:false,
            checkBox:[]
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
            ],

        })
    }

    // componentDidMount() {
    //     var newCheckBox = {}
    //     for (var i = 0; i<this.state.guestsListData.length; i++) {
    //         newCheckBox[this.state.guestsListData[i].id] = false;
    //         if (i == this.state.guestsListData.length - 1) {
    //             this.setState({
    //                 checkBox: newCheckBox
    //             })
    //         }
    //     }
        
    // }

    displayGuestsList = ({item}) => {
        return(
                <View style={{height:window.height/8, flexDirection:'column'}}>
                    <View style={styles.guest}>
                        <View style={{flex:2, alignItems:'center'}}>
                            <View style={{width:window.width/7, height:window.width/7}}>
                                <Image style={{width:'100%', height:'100%', borderRadius:window.width, resizeMode:'cover'}} source={{uri: item.imageURL}}/>
                            </View>
                        </View>
                        <View style={{flex:5, alignItems:'flex-start'}}>
                            <Text style={{fontWeight:'bold'}}>{item.guestName}</Text>
                        </View>
                        <View style={{flex:1, alignItems:'center'}}>
                            <TouchableOpacity style={{width:window.height/34, height:window.height/34}}
                            onPress={() => {
                                // this.state.checkBox[item.id] = !this.state.checkBox[item.id];
                                // console.log(this.state.checkBox[item.id]);
                                // this.setState({
                                //     checkBox: this.state.checkBox
                                // })
                                if (this.state.checkBox.indexOf(item.id) >= 0) {
                                    this.state.checkBox.splice(this.state.checkBox.indexOf(item.id), 1 )
                                    this.setState({
                                        checkBox: this.state.checkBox
                                    })
                                } else {
                                    this.state.checkBox.push(item.id)
                                    this.setState({
                                        checkBox: this.state.checkBox
                                    })
                                }
                            }}
                            >
                                <Image style={{width:'100%', height:'100%'}} source={
                                    (this.state.checkBox.indexOf(item.id) >= 0) ? require('../assets/checkbox2.jpg') : require('../assets/checkbox3.jpg')
                                    // () => {
                                    //     if (this.state.checkBox.indexOf(item.id) >= 0) {
                                    //         return require('../assets/checkbox2.jpg')
                                    //     } else {
                                    //         return require('../assets/checkbox3.jpg')
                                    //     }
                                    // }
                                    
                                }/>
                            </TouchableOpacity>
                        </View>
                    </View>
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
                        source={require('../assets/background.png')}
                        style={{ width: "100%", height: "100%" }}
                    >
                        <View style={styles.container}>
                            <View style={styles.headerContainer}>
                                <View style={{flex:1, alignItems:'center'}}>
                                    <Image style={{width:window.height/34, height:window.height/34, resizeMode:'contain'}} source={require('../assets/checkbox.jpg')}/>
                                </View>
                                <View style={{flex:5, alignItems:'flex-start'}}>
                                    <Text style={{color:'white'}}>{this.state.checkBox.length} Selected</Text>
                                </View>
                                <View style={{flex:1, alignItems:'flex-start'}}>
                                    <TouchableOpacity
                                        onPress = {(this.state.checkBox.length > 0)
                                        ? () => {
                                            for (i=0;i<this.state.guestsListData.length;i++) {
                                                if (this.state.checkBox.indexOf(this.state.guestsListData[i].id) >= 0) {
                                                    this.state.guestsListData.splice(i, 1)
                                                    i--;
                                                    // this.state.guestsListData.splice( this.state.guestsListData.indexOf(this.state.checkBox.indexOf(this.state.guestsListData[i].id)), 1 );
                                                }
                                                
                                            }
                                            this.setState({
                                                guestsListData: this.state.guestsListData,
                                                checkBox: []
                                            })

                                        }: () => {
                                            this.props.navigation.navigate('GuestsList')
                                        }}
                                    >
                                        <Text style={{color:'yellow'}}>{(this.state.checkBox.length > 0) ? 'Delete':'Done'}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.guestsList}>
                                <FlatList
                                    data={this.state.guestsListData}
                                    renderItem={this.displayGuestsList}
                                    numColumns={1}
                                    keyExtractor={(item, index) => item.id.toString()}
                                    extraData={this.state}
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