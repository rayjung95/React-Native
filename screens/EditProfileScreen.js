import React, {Component} from 'react';
import {
    Dimensions,
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class SettingsComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mainImageSource: this.props.mainImageSource,
			smallImage1Source: this.props.smallImage1Source,
			smallImage2Source: this.props.smallImage2Source,
			profileBioText: this.props.profileBioText,
			contactInfoText: this.props.contactInfoText
		}
        this._connectInsta = this._connectInsta.bind(this);
	}

	static navigationOptions = {
		header: null,
	};

	static defaultProps = {
		mainImageSource: require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png'),
		smallImage1Source: require('../assets/Pngs/placeholder-user-photo.imageset/placeholder-user-photo-1.png'),
		smallImage2Source: require('../assets/Pngs/placeholder-user-photo.imageset/placeholder-user-photo-1.png'),
		profileBioText: 'Nam dapibus nisl vitae elit fringilla rutrum.\nAenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisle nunc et massa.',
		contactInfoText: 'Contact Info',
	}

    _connectInsta = () => {
        console.log('ConnectInsta Pressed');
    }

	render() {
		return (
			<View style={styles.background}>
				<ScrollView contentContainerStyle={{ paddingTop: SCREEN_HEIGHT * 0.09 }} showsVerticalScrollIndicator={false}>
					<KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={-200}>
						<View style={styles.imageGallery}>
							<View style={styles.mainImageView}>
								<Image source={this.state.mainImageSource} style={styles.mainImage} />
								<View style={styles.deleteImageView}>
									<Image source={require('../assets/Icons/delete.imageset/delete.png')} style={styles.deleteImage} />
								</View>
							</View>
							<View style={styles.smallImagesView}>
								<Image source={this.state.smallImage1Source} style={styles.smallImage} />
								<Image source={this.state.smallImage2Source} style={styles.smallImage}/>
								<Image source={require('../assets/Icons/add_photo.imageset/add_photo.png')} style={styles.smallImage}/>
							</View>
						</View>

						<View style={styles.profileBio}>
							<TextInput
								style={styles.profileBioText}
								underlineColorAndroid={'transparent'}
								editable={true}
								multiline={true}
								onChangeText ={(text) => this.setState({profileBioText: text})}
								value={this.state.profileBioText}
							/>
						</View>

						<View style={styles.contactInfo}>
							<TextInput
								style={styles.contactInfoText}
								underlineColorAndroid={'transparent'}
								editable={true}
								onChangeText ={(text) => this.setState({contactInfoText: text})}
								value= {this.state.contactInfoText}
							/>
						</View>
                        <TouchableHighlight
                            style={styles.connectInsta}
                            onPress={
                                this._connectInsta
                            }>
                            <View style={styles.connectInstaView}>
                                <Image source={require('../assets/Icons/instagram.imageset/instagram.png')}
                                       style={styles.instaLogo}/>
                                <Text style={styles.connectInstaText}>
                                    Connect Instagram
                                </Text>
                            </View>
                        </TouchableHighlight>
					</KeyboardAvoidingView>
				</ScrollView>
				<ImageBackground source={require('../assets/Pngs/bg.imageset/bg.png')} style={styles.header}>
					<TouchableOpacity onPress={()=>this.props.navigation.navigate('ProfileSetting')}>
						<View style={styles.backArrow}>
							<Image source={require('../assets/Icons/go-back-left-arrow/go-back-left-arrow.png')} />
						</View>
					</TouchableOpacity>
					<Text style={styles.title}>
						Edit Profile
					</Text>
					<TouchableOpacity onPress={()=>this.props.navigation.navigate('ProfileSetting')}>
						<Text style={styles.save}>
							Save
						</Text>
					</TouchableOpacity>
				</ImageBackground>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	backArrow: {
		left: 0,
		marginRight: SCREEN_WIDTH * 0.06,
		elevation: 2,
	},
	background: {
		backgroundColor: '#F2F3F4',
		flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        elevation: -1
	},
	connectInsta: {
		backgroundColor: '#FFFFFF',
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT * 0.07,
		marginTop: SCREEN_HEIGHT * 0.04,
		marginBottom: SCREEN_HEIGHT * 0.04,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		elevation: 1,
	},
	connectInstaText: {
		fontSize: 15,
		fontFamily: 'Roboto',
	},
    connectInstaView: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '100%',
        paddingLeft: SCREEN_WIDTH * 0.27,
        paddingRight: SCREEN_WIDTH * 0.27,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        elevation: 1,
    },
	contactInfo: {
		backgroundColor: '#FFFFFF',
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT * 0.07,
		marginTop: SCREEN_HEIGHT * 0.04,
		paddingLeft: SCREEN_WIDTH * 0.046,
		paddingRight: SCREEN_WIDTH * 0.046,
		justifyContent: 'center',
        elevation: 1,
	},
	contactInfoText: {
		color: '#8E8E93',
		fontSize: 15,
		fontFamily: 'Roboto',
		textAlign: 'left',
	},
	deleteImage: {

	},
	deleteImageView: {
		position: 'absolute',
		right: SCREEN_WIDTH * 0.05,
		top: SCREEN_WIDTH * 0.05,
	},
	header: {
		left: 0,
		flexDirection: 'row',
		alignItems: 'center',
        width: '100%',
        height: SCREEN_HEIGHT * 0.091,
        top: '0%',
        paddingLeft: SCREEN_WIDTH * 0.06,
        paddingRight: SCREEN_WIDTH * 0.06,
        elevation: 1,
        position: 'absolute',
	},
	imageGallery: {
		backgroundColor: '#FFFFFF',
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT * 0.75, 
		flexDirection: 'column',
		alignItems: 'center',
        justifyContent: 'center',
        elevation: 1,
        paddingBottom: SCREEN_WIDTH * 0.014,
	},
	instaLogo: {

	},
	mainImage: {
		width: SCREEN_WIDTH * 0.94,
		height: SCREEN_WIDTH * 0.94,
		resizeMode: 'contain',
	},
	mainImageView: {
		flex: 3,
		padding: SCREEN_WIDTH * 0.035,
	},
	profileBio: {
		backgroundColor: '#FFFFFF',
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT * 0.16,
		marginTop: SCREEN_HEIGHT * 0.04,
		alignItems: 'center',
        justifyContent: 'center',
        elevation: 1,
        padding: SCREEN_WIDTH * 0.046,
	},
	profileBioText: {
		color: '#8E8E93',
		fontSize: 15,
		fontFamily: 'Roboto',
	},
	smallImage: {
		width: SCREEN_WIDTH * 0.3,
		height: SCREEN_WIDTH * 0.3,
		margin: SCREEN_WIDTH * 0.014,
	},
	smallImagesView: {
		padding: SCREEN_WIDTH * 0.03,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	save: {
		fontFamily: 'Roboto',
		fontSize: 18,
		color: '#FDD302',
		textAlign: 'right',
		elevation: 2,
	},
	title: {
		fontFamily: 'Roboto',
		fontSize: 18,
		color: 'white',
		textAlign: 'left',
		elevation: 2,
		marginRight: SCREEN_WIDTH * 0.43,
	},
});