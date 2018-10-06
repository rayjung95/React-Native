import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, Slider	 } from 'react-native';

export default class UserSettingScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			distance: this.props.distance,
			min: this.props.min,
			max: this.props.max,
			step: this.props.step
		}
	}

	static defaultProps = {
		distance: 1,
		min: 1,
		max: 100,
		step: 1
	}

	render() {
		return (
			<ImageBackground source={
				require('../assets/Pngs/bg.imageset/bg.png')
			} style={
				styles.backgroundImage
			}>
				<View style={
					styles.topSettings
				}>
					<View style={{
						flex: 1
					}}/>
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
							right: '5%',
						}}/>
					</View>
					<View style={{
						flex: 1
					}}/>
					<Image source={
							require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png')
					} style={
						styles.profileImage
					}/>
					<Text style={
						styles.profileNameText
					}>
						{'Zac'}
					</Text>
					<Text style={
						styles.editProfileText
					}>
						{'Edit Profile'}
					</Text>
					<View style={{
						flex: 1
					}}/>
				</View>
				<View style={
					styles.bottomSettings
				}>
					<View style={{
						flex: 1
					}}/>
					<View style={
						styles.searchDistanceContainer
					}>
						<View style={
							styles.searchDistanceTextContainer
						}>
							<Text style={{
								textAlign: 'left',
								margin: 8,
								flex: 1
							}}>
								{'Search distance'}
							</Text>
							<Text style={{
								textAlign: 'right',
								margin: 8,
								flex: 1,
							}}>
								{this.state.distance} km
							</Text>
						</View>
						<Slider
							style={{
								margin: 8,
							}}
							value= {this.state.distance}
							minimumValue={this.state.min}
							maximumValue={this.state.max}
							step={this.state.step}
							onValueChange={(value) => this.setState({
								distance: value
							})}
						/>
					</View>
					<View style={{
						flex: 1
					}}/>
					<View style={
						styles.textButtonWithArrowContainer
					}>
						<Text style={{
							textAlign: 'left',
							margin: 8,
						}}>
							{'Invite Friends'}
						</Text>
						<Image source={
							require('../assets/Icons/rightArrow.imageset/rightArrow.png')
						} style={{
							position: 'absolute',
							right: '3%',

						}}/>
					</View>
					<View style={{
						flex: 1
					}}/>
					<View style={
						styles.textButtonWithArrowContainer
					}>
						<Text style={{
							textAlign: 'left',
							margin: 8,
						}}>
							{'Terms of Service'}
						</Text>
						<Image source={
							require('../assets/Icons/rightArrow.imageset/rightArrow.png')
						} style={{
							position: 'absolute',
							right: '3%',
						}}/>
					</View>
					<View style={
						styles.privacyContainer
					}>
						<Text style={{
							textAlign: 'left',
							margin: 8,
						}}>
							{'Privacy Policy'}
						</Text>
						<Image source={
							require('../assets/Icons/rightArrow.imageset/rightArrow.png')
						} style={{
							position: 'absolute',
							right: '3%',
						}}/>
					</View>
					<View style={{
						flex: 1
					}}/>
					<View style={
						styles.textButtonContainer
					}>
						<Text style={{
							textAlign: 'center',
							margin: 8,
						}}>
							{'Log Out'}
						</Text>
					</View>
					<View style={{
						flex: 1
					}}/>
					<View style={
						styles.textButtonContainer
					}>
						<Text style={{
							textAlign: 'center',
							margin: 8,
						}}>
							{'Delete Account'}
						</Text>
					</View>
					<View style={{
						flex: 1
					}}/>
				</View>
			</ImageBackground>
		)
	}
}

let {height, width} = Dimensions.get("window");
const styles = StyleSheet.create({
	topSettings: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'stretch',
		flex: 2,
	},
	bottomSettings: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'stretch',
		flex: 3,
		backgroundColor: '#F2F3F4',
	},
	titleContainer: {
		flex: 1,
	},
	titleText: {
		justifyContent: 'center',
		alignItems: 'stretch',
		zIndex: 1,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
		textAlignVertical: 'center',
		fontSize: 18,
	},
	profileNameText: {
		justifyContent: 'center',
		flex: 1,
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
		flex: 1,
		alignItems: 'stretch',
		zIndex: 1,
		color: 'white',
		textAlign: 'center',
		textAlignVertical: 'center',
		fontSize: 14,
	},
	profileImage: {
		justifyContent: 'center',
		alignItems: 'stretch',
		flex: 4,
		resizeMode: 'contain',
		borderTopRightRadius: 100,
		borderTopLeftRadius: 100,
		borderBottomLeftRadius: 70,
		borderBottomRightRadius: 70,
	},
	searchDistanceContainer: {
		flex: 3,
		flexDirection: 'column',
		backgroundColor: '#FFFFFF',
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#DEDFDF',
	},
	searchDistanceTextContainer: {
		flex: 1,
		flexDirection: 'row'
	},
	textButtonWithArrowContainer: {
		flex: 1.5,
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
    	alignItems: 'center',
    	borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#DEDFDF',
	},
	privacyContainer: {
		flex: 1.5,
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
    	alignItems: 'center',
    	borderTopWidth: 0,
		borderBottomWidth: 1,
		borderColor: '#DEDFDF',
	},
	textButtonContainer: {
		flex: 1.5,
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
    	justifyContent: 'center',
    	borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#DEDFDF',
	},
	backgroundImage: {
		height: '100%',
		width: '100%',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'stretch',
	},
});