import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat'
import { StyleSheet, Text, View, Dimensions, Image, ImageBackground, StatusBar } from 'react-native';

const window = Dimensions.get('window')

export default class ChattingScreen extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            messages:[],

        }
    }

    componentWillMount() {
        this.setState({
          messages: [
              {
                _id: 4,
                text: 'Yep, cant wait',
                createdAt: new Date(),
                user: {
                  _id: 5,
                  name: 'Annie Hall',
                  avatar: 'https://placeimg.com/140/140/any',
                },
              },
              {
                _id: 3,
                text: 'Are you going to the afternoon party tonight?',
                createdAt: new Date(),
                user: {
                  _id: 4,
                  name: 'Jodee Furrow',
                  avatar: 'https://placeimg.com/140/140/any',
                },
              },
              {
                _id: 2,
                text: 'Pretty good',
                createdAt: new Date(),
                user: {
                  _id: 3,
                  name: 'Ethel Wolfram',
                  avatar: 'https://placeimg.com/140/140/any',
                },
              },
              {
                _id: 1,
                text: 'Hey everyone! How are you guys?',
                createdAt: new Date(),
                user: {
                  _id: 2,
                  name: 'Karl Nyland',
                  avatar: 'https://placeimg.com/140/140/any',
                },
              },
          ],
        })
      }
    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
        console.log(this.state.messages)
    }

    render() {
        return(
            <View style={{flex:1}}>
            <StatusBar hidden/>
                <ImageBackground
                    source={require('../assets/background.png')}
                    style={{ width: "100%", height: "100%" }}
                >
                    <View style={styles.container}>
                        <View style={styles.headerContainer}>
                            <View style={{flex:1, alignItems:'center'}}>
                                <Image style={{width:window.height/32, height:window.height/32, resizeMode:'contain'}} source={require('../assets/Icons/go-back-left-arrow/go-back-left-arrow.png')}/>
                            </View>
                            <View style={{flex:5, alignItems:'flex-start',}}>
                                <Text style={{color:'white', fontSize:window.height/40}}>Hot Tub and Bear</Text>
                            </View>
                        </View>
                        <View style={styles.messagesList}>
                            <GiftedChat
                                messages={this.state.messages}
                                onSend={messages => this.onSend(messages)}
                                user={{
                                _id: 1,
                                }}
                            />  
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
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
    messagesList:{
        flex:9,
        backgroundColor:'white',
    },
    message:{
        flexDirection:'row',
        alignItems:'center',
        flex:60,
    }
})