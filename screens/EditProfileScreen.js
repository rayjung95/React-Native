import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, StatusBar, TextInput, KeyboardAvoidingView, ImageBackground } from 'react-native';

import Layout from '../constants/Layout';

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

	render() {
		return (
			<View style={styles.background}>
				<ImageBackground source={require('../assets/Pngs/bg.imageset/bg.png')} style={styles.header}>
					<View style={styles.backArrow}>
						<Image source={require('../assets/Icons/go-back-left-arrow/go-back-left-arrow.png')} />
					</View>
					<Text style={styles.title}>
						Edit Profile
					</Text>
					<Text style={styles.save}>
						Save
					</Text>
				</ImageBackground>
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
					
						<View style={styles.connectInsta}>
							<Image source={require('../assets/Icons/instagram.imageset/instagram.png')} style={styles.instaLogo} />
							<Text style={styles.connectInstaText}>
								Connect Instagram
							</Text>
						</View>
					</KeyboardAvoidingView>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	backArrow: {
		flex: 1,
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
		paddingLeft: SCREEN_WIDTH * 0.27,
		paddingRight: SCREEN_WIDTH * 0.27,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		elevation: 1,
	},
	connectInstaText: {
		fontSize: 15,
		fontFamily: 'Roboto',
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
		flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: '100%',
        height: SCREEN_HEIGHT * 0.091,
        top: StatusBar.currentHeight,
        padding: 15,
        elevation: 1,
        overflow: 'hidden',
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
		flex: 1,
		fontFamily: 'Roboto',
		fontSize: 18,
		color: '#FDD302',
		textAlign: 'right',
	},
	title: {
		flex: 5,
		fontFamily: 'Roboto',
		fontSize: 18,
		color: 'white',
		textAlign: 'left',
	},
});