import React, {Component} from 'react';
import {Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';

import Slider from 'react-native-slider';
import Layout from "../constants/Layout";

const SCREEN_HEIGHT = Layout.window.height;
const SCREEN_WIDTH = Layout.window.width;


export default class SettingsComponent extends Component {
	static navigationOptions = {
        header: null,
    };
    static defaultProps = {
        distance: 1,
        min: 1,
        max: 100,
        step: 1,
        name: 'Zac',
    };

    constructor(props) {
        super(props);
        this.state = {
            distance: this.props.distance,
            min: this.props.min,
            max: this.props.max,
            step: this.props.step,
            name: this.props.name,
        }
    }

	render() {
		return (
			<ImageBackground source={
				require('../assets/Pngs/bg.imageset/bg.png')
			} style={
				styles.backgroundImage
			}>
                <ScrollView showsVerticalScrollIndicator={false}>
					{/* <View style={{
                        height: StatusBar.currentHeight,
                        backgroundColor: 'black',
					}}/> */}

                    <View style={
                        styles.topSettings
                    }>
                        <View style={
                            styles.titleContainer
                        }>
                            <Text style={
                                styles.titleText
                            }>
                                {'Settings'}
                            </Text>
                            <Image source={
                                require('../assets/Icons/main_feed.imageset/main_feed.png')
                            } style={{
                                position: 'absolute',
                                right: SCREEN_WIDTH * -0.35,
                            }}/>
                        </View>
                        <Image source={
                            require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png')
                        } style={
                            styles.profileImage
                        }/>
                        <Text style={
                            styles.profileNameText
                        }>
                            {this.state.name}
                        </Text>
                        <Text style={
                            styles.editProfileText
                        }>
                            {'Edit Profile'}
                        </Text>
                    </View>
                    <View style={
                        styles.bottomSettings
                    }>
                        <View style={
                            styles.searchDistanceContainer
                        }>
                            <View style={
                                styles.searchDistanceTextContainer
                            }>
                                <Text style={{
                                    textAlign: 'left',
                                    margin: 8,
                                    flex: 1,
                                    fontSize: 16,
                                }}>
                                    {'Search distance'}
                                </Text>
                                <Text style={{
                                    textAlign: 'right',
                                    margin: 8,
                                    flex: 1,
                                    fontSize: 16,
                                }}>
                                    {this.state.distance} km
                                </Text>
                            </View>
                            <Slider
                                style={{
                                    width: SCREEN_WIDTH * 0.9,
                                    justifyContent: 'center',
                                }}
                                thumbTintColor={'#FFFFFF'}
                                thumbStyle={{elevation: 4,}}
                                trackStyle={{transform: [{scaleY: 0.6}]}}
                                minimumTrackTintColor={'#FDDA29'}
                                value={this.state.distance}
                                minimumValue={this.state.min}
                                maximumValue={this.state.max}
                                step={this.state.step}
                                onValueChange={(value) => this.setState({
                                    distance: value
                                })}
                            />
                        </View>
                        <View style={
                            styles.textButtonWithArrowContainer
                        }>
                            <Text style={{
                                textAlign: 'left',
                                margin: 8,
                                fontSize: 16,
                            }}>
                                {'Invite Friends'}
                            </Text>
                            <Image source={
                                require('../assets/Icons/rightArrow.imageset/rightArrow.png')
                            } style={{
                                position: 'absolute',
                                right: SCREEN_WIDTH * 0.05,

                            }}/>
                        </View>
                        <View style={
                            styles.textButtonWithArrowContainer
                        }>
                            <Text style={{
                                textAlign: 'left',
                                margin: 8,
                                fontSize: 16,
                            }}>
                                {'Terms of Service'}
                            </Text>
                            <Image source={
                                require('../assets/Icons/rightArrow.imageset/rightArrow.png')
                            } style={{
                                position: 'absolute',
                                right: SCREEN_WIDTH * 0.05,
                            }}/>
                        </View>
                        <View style={
                            styles.privacyContainer
                        }>
                            <Text style={{
                                textAlign: 'left',
                                margin: 8,
                                fontSize: 16,
                            }}>
                                {'Privacy Policy'}
                            </Text>
                            <Image source={
                                require('../assets/Icons/rightArrow.imageset/rightArrow.png')
                            } style={{
                                position: 'absolute',
                                right: SCREEN_WIDTH * 0.05,
                            }}/>
                        </View>
                        <View style={
                            styles.textButtonContainer
                        }>
                            <Text style={{
                                textAlign: 'center',
                                margin: 8,
                                fontSize: 16,
                            }}>
                                {'Log Out'}
                            </Text>
                        </View>
                        <View style={
                            styles.textButtonContainer
                        }>
                            <Text style={{
                                textAlign: 'center',
                                margin: 8,
                                fontSize: 16,
                            }}>
                                {'Delete Account'}
                            </Text>
                        </View>
                    </View>
                </ScrollView>
			</ImageBackground>
		)
	}
}

const styles = StyleSheet.create({
    emptySpace: {
        flex: 1,
    },
	topSettings: {
		justifyContent: 'center',
        alignItems: 'center',
        height: SCREEN_HEIGHT * 0.5,
        padding: SCREEN_HEIGHT * 0.034,
	},
	bottomSettings: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'stretch',
		backgroundColor: '#F2F3F4',
        height: SCREEN_HEIGHT * 0.75,
	},
	titleContainer: {
		flex: 1,
	},
	titleText: {
		justifyContent: 'center',
		alignItems: 'stretch',
		zIndex: 1,
		color: 'white',
		textAlign: 'center',
		textAlignVertical: 'center',
		fontSize: 18,
	},
	profileNameText: {
		justifyContent: 'center',

        alignItems: 'stretch',
		zIndex: 1,
		fontFamily: 'sans-serif-thin',
		color: 'white',
		textAlign: 'center',
		textAlignVertical: 'center',
		fontSize: 24,
	},
	editProfileText: {
		justifyContent: 'center',
		alignItems: 'stretch',
		zIndex: 1,
		color: 'white',
		textAlign: 'center',
		textAlignVertical: 'center',
		fontSize: 14,
	},
	profileImage: {
		justifyContent: 'center',
        alignItems: 'center',
		resizeMode: 'contain',
		borderTopRightRadius: 100,
		borderTopLeftRadius: 100,
		borderBottomLeftRadius: 70,
		borderBottomRightRadius: 70,
        marginTop: SCREEN_HEIGHT * 0.063,
        marginBottom: SCREEN_HEIGHT * 0.037,
        width: SCREEN_WIDTH * 0.4,
        height: SCREEN_HEIGHT * 0.23,
	},
	searchDistanceContainer: {
		flexDirection: 'column',
		backgroundColor: '#FFFFFF',
        elevation: 1,
        padding: SCREEN_WIDTH * 0.026,
        marginTop: SCREEN_HEIGHT * 0.04,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT * 0.14,
        justifyContent: 'center',
        alignItems: 'center',
	},
	searchDistanceTextContainer: {

        flexDirection: 'row'
	},
	textButtonWithArrowContainer: {
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
    	alignItems: 'center',
        elevation: 1,
        paddingLeft: SCREEN_WIDTH * 0.026,
        paddingRight: SCREEN_WIDTH * 0.026,
        marginTop: SCREEN_HEIGHT * 0.04,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT * 0.07,
	},
	privacyContainer: {
		flex: 1.5,
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
    	alignItems: 'center',
        elevation: 1,
        paddingLeft: SCREEN_WIDTH * 0.026,
        paddingRight: SCREEN_WIDTH * 0.026,
        marginBottom: SCREEN_HEIGHT * 0.04,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT * 0.07,
	},
	textButtonContainer: {
		flex: 1.5,
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
    	justifyContent: 'center',
        alignItems: 'center',
        elevation: 1,
        marginBottom: SCREEN_HEIGHT * 0.04,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT * 0.07,
	},
	backgroundImage: {
		height: '100%',
		width: '100%',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'stretch',
	},
});