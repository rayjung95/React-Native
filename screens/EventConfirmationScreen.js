import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, ImageBackground} from 'react-native';

export default class EventConfirmationScreen extends Component {
	render() {
		return (
				<ImageBackground
	          	source={require('../assets/Pngs/bg.imageset/bg.png')}
	          	style={{width:'100%', height:'100%'}}
	        	>
					<View style={{flexDirection: 'column', justifyContent: 'space-between',height:'100%'}}>
						<View style={topStyles.container}>
							<View style={topStyles.headerFiller}>
							</View>
							<View style={topStyles.headerContainer}>
								<View style={topStyles.filler}>
								</View>
								<View style={topStyles.back}>
								</View>
								<View style={topStyles.party}>
									<Text style={[topStyles.text, {fontSize:14, fontWeight:'bold'}]}>Amazing friday night</Text>
									<Text style={[topStyles.text, {fontSize:12}]}>Sat, 10:00 pm, Sep 26</Text>
								</View>
								<View style={topStyles.message}>
									<Image style={{width:25, height:25, resizeMode: 'contain'}} source={require('../assets/Icons/not_message.imageset/not_message.png')}/>
								</View>
								<View style={topStyles.calendar}>
									<Image style={topStyles.imgSize} source={require('../assets/Icons/calendar_icon.imageset/calendar_icon.png')}/>
								</View>
							</View>
						</View>
						<View style={midStyles.container}>
							<View style={midStyles.smallContainer}>
								<View style={midStyles.imageOutFiller}>
								</View>
								<View style={midStyles.imageFillerContainer}>
									<View style={midStyles.imageFiller}>
									</View>
									<Image source={require('../assets/Pngs/girlphoto.imageset/girlphoto.png')} style={midStyles.image}/>
									<View style={midStyles.imageFiller}>
									</View>
								</View>
								<View style={midStyles.textFillerContainer}>
									<View style={midStyles.textFiller}>
									</View>
									<Text style={midStyles.text}>Scarlett, 31</Text>
									<View style={midStyles.textFiller}>
									</View>
								</View>
							</View>
						</View>
						<View style={bottomStyles.container}>
							<View style={bottomStyles.lockFiller}>
								<View style={bottomStyles.sideLockFiller}>
								</View>
								<Image source={require('../assets/Icons/lock_highlight.imageset/lock_highlight.png')} style={bottomStyles.locks}/>
								<View style={bottomStyles.midLockFiller}>
								</View>
								<Image source={require('../assets/Icons/unlock_highlight.imageset/unlock_highlight.png')} style={bottomStyles.locks}/>
								<View style={bottomStyles.sideLockFiller}>
								</View>
							</View>
							{/* <Image source={require('../assets/footer_selected_edit.png')}/> */}
						</View>
					</View>
				</ImageBackground>
		);
	}
}

const midStyles = StyleSheet.create({
	container:{
		flex:32,
		justifyContent: 'center',
		alignItems: 'center'
	},
	smallContainer:{
		backgroundColor: 'white',
		width:'85%',
		height:'80%',
		borderRadius: 5,
		flexDirection:'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	image:{
		flex:23
	},
	imageFillerContainer:{
		flex:18,
		flexDirection: 'row',
		alignItems:'center',
		justifyContent:'space-between',
		backgroundColor:'transparent'
	},
	imageFiller:{
		flex:1,
	},
	text:{
		flex:1,
		backgroundColor:'transparent',
		fontSize:18,
		color:'#525151'
	},
	textFillerContainer:{
		flex:6,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	textFiller:{
		flex:1
	},
	imageOutFiller:{
		flex:1
	}


})

const bottomStyles = StyleSheet.create({
	container:{
		flex:10,
		flexDirection:'column',
		justifyContent:'space-between',
		alignItems:'center'
	},
	lockFiller:{
		flex:3,
		flexDirection:'row',
		justifyContent: 'space-between',
	},
	midLockFiller:{
		flex:40
	},
	sideLockFiller:{
		flex:29
	},
	locks:{
		flex:27
	}
})


const topStyles = StyleSheet.create({
	container:{
		flex:6,
		backgroundColor:'#1d1d1d',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	headerContainer:{
		flex:3,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	headerFiller:{
		flex:1
	},
	calendar:{
		flex:4
	},
	message:{
		flex:5
	},
	party:{
		flex:32
	},
	filler:{
		flex:2
	},
	back:{
		flex:4
	},
	imgSize: {
		width:20,
		height:20,
		resizeMode: 'contain'
	},
	text: {
		color: 'white'
	}

});