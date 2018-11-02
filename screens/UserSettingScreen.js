import React, {Component} from 'react';
import {
    Alert,
    Dimensions,
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';
import Slider from 'react-native-slider';
import WebBrowser from 'expo';

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;


export default class SettingsScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			distance: this.props.distance,
			min: this.props.min,
			max: this.props.max,
			step: this.props.step,
			name: this.props.name,
		}
		this._openLink = this._openLink.bind(this);
	}

	static navigationOptions = {
		header: null,
	};

	static defaultProps = {
		distance: 1,
		min: 1,
		max: 100,
		step: 1,
		name: 'Zac',
		tos_url: 'http://www.rendevousapp.com/terms-of-service/',
		privacy_url: 'http://www.rendevousapp.com/privacy-policy/',
	}

	testPress() {
		console.log('touchable pressed!\n');
	}

	_openLink = async (link) => {
		await WebBrowser.WebBrowser.openBrowserAsync(link);
	}

    _logOut = () => {
        Alert.alert(
            '',
            'Log out of Rendevous?',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
                {text: 'Log Out', onPress: () => console.log('LogOut Pressed')},
            ],
            {cancelable: false}
        )
    }

    _deleteAccount = () => {
        Alert.alert(
            'Warning',
            'Are you sure you want to delete your account? All content will be lost.',
            [
                {text: 'Yes', onPress: () => console.log('Yes Pressed')},
                {text: 'No', onPress: () => console.log('No Pressed')},
            ],
            {cancelable: false}
        )
    }

	render() {
		return (
			<ImageBackground source={
				require('../assets/Pngs/bg.imageset/bg.png')
			} style={
				styles.backgroundImage
			}>
				<ScrollView showsVerticalScrollIndicator={false}>
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
							<TouchableOpacity onPress={()=>this.props.navigation.navigate('Landing')}>
								<Image source={
									require('../assets/Icons/main_feed.imageset/main_feed.png')
								}/>
							</TouchableOpacity>
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
						<TouchableOpacity onPress={()=>this.props.navigation.navigate('EditProfile')}>
							<Text style={
								styles.editProfileText
							}>
								{'Edit Profile'}
							</Text>
						</TouchableOpacity>
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
								thumbTintColor= {'#FFFFFF'}
								thumbStyle= {{ elevation: 4, }}
								trackStyle= {{transform: [{ scaleY: 0.6 }]}}
								minimumTrackTintColor= {'#FDDA29'}
								value= {this.state.distance}
								minimumValue={this.state.min}
								maximumValue={this.state.max}
								step={this.state.step}
								onValueChange={(value) => this.setState({
									distance: value
								})}
							/>
						</View>
						<TouchableHighlight style={
							styles.textButtonWithArrowContainer
						} onPress={
							this.testPress
						}>
							<View style={styles.highlightView}>
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
						</TouchableHighlight>
						<TouchableHighlight style={
							styles.textButtonWithArrowContainer
						} onPress={
							() => this._openLink(this.props.tos_url)
						}>
							<View style={styles.highlightView}>
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
						</TouchableHighlight>
						<TouchableHighlight style={
							styles.privacyContainer
						} onPress={
							() => this._openLink(this.props.privacy_url)
						}>
							<View style={styles.highlightView}>
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
						</TouchableHighlight>
						<TouchableHighlight style={
							styles.textButtonContainer
						} onPress={
                            this._logOut
						}>
							<View style={styles.textButtonHighlight}>
								<Text style={{
									textAlign: 'center',
									margin: 8,
									fontSize: 16,
								}}>
									{'Log Out'}
								</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight style={
							styles.textButtonContainer
						} onPress={
                            this._deleteAccount
						}>
							<View style={styles.textButtonHighlight}>
								<Text style={{
									textAlign: 'center',
									margin: 8,
									fontSize: 16,
								}}>
									{'Delete Account'}
								</Text>
							</View>
						</TouchableHighlight>
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
		alignItems: 'center',
		flexDirection: 'row',
	},
	titleText: {
		justifyContent: 'center',
		alignItems: 'stretch',
		zIndex: 1,
		color: 'white',
		textAlign: 'center',
		textAlignVertical: 'center',
		fontSize: 18,
		marginLeft: SCREEN_WIDTH * 0.35,
		marginRight: SCREEN_WIDTH * 0.31,
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
		overflow: 'visible',
	},
	searchDistanceTextContainer: {
		
		flexDirection: 'row'
	},
	textButtonWithArrowContainer: {
		backgroundColor: '#FFFFFF',
    	elevation: 1,
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
	textButtonHighlight: {
		width: '100%',
		height: '100%',
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
    	alignItems: 'center',
    	justifyContent: 'center',
	},
	backgroundImage: {
		height: '100%',
		width: '100%',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'stretch',
	},
	highlightView: {
		width: '100%',
		height: '100%',
		backgroundColor: '#FFFFFF',
		paddingLeft: SCREEN_WIDTH * 0.026,
    	paddingRight: SCREEN_WIDTH * 0.026,
		flexDirection: 'row',
    	alignItems: 'center',
	},
});