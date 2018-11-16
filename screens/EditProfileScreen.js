import React, {Component} from 'react';
import {
	Animated,
    Dimensions,
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    PanResponder,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';

import update from 'immutability-helper';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const HEADER_HEIGHT = SCREEN_HEIGHT * 0.091;

export default class EditProfileScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mainImageSource: this.props.mainImageSource,
			smallImage1Source: this.props.smallImage1Source,
			smallImage2Source: this.props.smallImage2Source,
			smallImage3Source: this.props.smallImage3Source,
			profileBioText: this.props.profileBioText,
			contactInfoText: this.props.contactInfoText,

			image1Exists: true,
			image1Hovered: [false, false, false],
			image1OrigScale: 3.13,
			image1OrigX: SCREEN_WIDTH * 0.35,
			image1OrigY: SCREEN_WIDTH * 0.35,
			image1Scale: new Animated.Value(3.13),
			image1XY: new Animated.ValueXY({x: SCREEN_WIDTH * 0.35, y: SCREEN_WIDTH * 0.35}),
			image1ZIndex: 2,

			image2Exists: true,
			image2Hovered: [false, false, false],
			image2OrigScale: 1,
			image2OrigX: SCREEN_WIDTH * 0.03,
			image2OrigY: SCREEN_HEIGHT * 0.555,
			image2Scale: new Animated.Value(1),
			image2XY: new Animated.ValueXY({x: SCREEN_WIDTH * 0.03, y: SCREEN_HEIGHT * 0.555}),
			image2ZIndex: 1,

			image3Exists: true,
			image3Hovered: [false, false, false],
			image3OrigScale: 1,
			image3OrigX: SCREEN_WIDTH * 0.35,
			image3OrigY: SCREEN_HEIGHT * 0.555,
			image3Scale: new Animated.Value(1),
			image3XY: new Animated.ValueXY({x: SCREEN_WIDTH * 0.35, y: SCREEN_HEIGHT * 0.555}),
			image3ZIndex: 1,

			image4Exists: true,
			image4Hovered: [false, false, false],
			image4OrigScale: 1,
			image4OrigX: SCREEN_WIDTH * 0.67,
			image4OrigY: SCREEN_HEIGHT * 0.555,
			image4Scale: new Animated.Value(1),
			image4XY: new Animated.ValueXY({x: SCREEN_WIDTH * 0.67, y: SCREEN_HEIGHT * 0.555}),
			image4ZIndex: 1,
		}

        this._addPhoto = this._addPhoto.bind(this);
        this._animateMove = this._animateMove.bind(this);
        this._animateResize = this._animateResize.bind(this);
        this._connectInsta = this._connectInsta.bind(this);
        this._createResponders = this._createResponders.bind(this);
        this._isInimage = this._isInImage.bind(this);
        
        this._createResponders();
	}

	static navigationOptions = {
		header: null,
	};

	static defaultProps = {
		mainImageSource: require('../assets/Pngs/profilePhoto.imageset/profilePhoto.png'),
		smallImage1Source: require('../assets/Pngs/placeholder-user-photo.imageset/placeholder-user-photo-1.png'),
		smallImage2Source: require('../assets/Pngs/placeholder-user-photo.imageset/placeholder-user-photo-1.png'),
		smallImage3Source: require('../assets/Pngs/placeholder-user-photo.imageset/placeholder-user-photo-1.png'),
		addImageSource: require('../assets/Icons/add_photo.imageset/add_photo.png'),
		profileBioText: 'Nam dapibus nisl vitae elit fringilla rutrum.\nAenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisle nunc et massa.',
		contactInfoText: 'Contact Info',

		mainImageOffset: 0.1502,
	}

	_createResponders () {

		this.image1PanResponder = PanResponder.create({
	        onStartShouldSetPanResponder : () => true,
	        onPanResponderGrant : (e, gesture) => {
	        	if (this.state.image1Exists) {
		        	this.setState({image1ZIndex: 2, image2ZIndex: 1, image3ZIndex: 1, image4ZIndex: 1});
		        	this._animateResize(this.state.image1Scale, this.state.image1OrigScale + 0.1);
		        	this.profileScroll.scrollTo({y: 0, animated: true});
		        }
	        },
	        onPanResponderMove : (e, gesture) => {
	        	if (this.state.image1Exists) {
		        	var curX = gesture.dx + this.state.image1OrigX;
		        	var curY = gesture.dy + this.state.image1OrigY;

		        	if (this._isInImage(gesture.moveX, gesture.moveY, this.state.image2OrigX - (this.state.image2OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH, this.state.image2OrigY - (this.state.image2OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH + HEADER_HEIGHT, SCREEN_WIDTH * this.state.image2OrigScale * 0.3) && 
		        	this.state.image2Hovered[0] === false && this.state.image2Exists) {
		        		this.setState({image2Hovered: update(this.state.image2Hovered, {0: {$set: true}})});
		        		this._animateMove(this.state.image2XY, this.state.image1OrigX, this.state.image1OrigY);
		        		this._animateResize(this.state.image1Scale, this.state.image2OrigScale);
		        		this._animateResize(this.state.image2Scale, this.state.image1OrigScale);
		        	}
		        	else if (!(this._isInImage(gesture.moveX, gesture.moveY, this.state.image2OrigX - (this.state.image2OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH, this.state.image2OrigY - (this.state.image2OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH + HEADER_HEIGHT, SCREEN_WIDTH * this.state.image2OrigScale * 0.3)) && 
		        	this.state.image2Hovered[0] === true && this.state.image2Exists) {
		        		this.setState({image2Hovered: update(this.state.image2Hovered, {0: {$set: false}})});
		        		this._animateMove(this.state.image2XY, this.state.image2OrigX, this.state.image2OrigY);
		        		this._animateResize(this.state.image1Scale, this.state.image1OrigScale);
		        		this._animateResize(this.state.image2Scale, this.state.image2OrigScale);
		        	}

		        	if (this._isInImage(gesture.moveX, gesture.moveY, this.state.image3OrigX - (this.state.image3OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH, this.state.image3OrigY - (this.state.image3OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH + HEADER_HEIGHT, SCREEN_WIDTH * this.state.image3OrigScale * 0.3) && 
		        	this.state.image3Hovered[0] === false && this.state.image3Exists) {
		        		this.setState({image3Hovered: update(this.state.image3Hovered, {0: {$set: true}})});
		        		this._animateMove(this.state.image3XY, this.state.image1OrigX, this.state.image1OrigY);
		        		this._animateResize(this.state.image1Scale, this.state.image3OrigScale);
		        		this._animateResize(this.state.image3Scale, this.state.image1OrigScale);
		        	}
		        	else if (!(this._isInImage(gesture.moveX, gesture.moveY, this.state.image3OrigX - (this.state.image3OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH, this.state.image3OrigY - (this.state.image3OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH + HEADER_HEIGHT, SCREEN_WIDTH * this.state.image3OrigScale * 0.3)) && 
		        	this.state.image3Hovered[0] === true && this.state.image3Exists) {
		        		this.setState({image3Hovered: update(this.state.image3Hovered, {0: {$set: false}})});
		        		this._animateMove(this.state.image3XY, this.state.image3OrigX, this.state.image3OrigY);
		        		this._animateResize(this.state.image1Scale, this.state.image1OrigScale);
		        		this._animateResize(this.state.image3Scale, this.state.image3OrigScale);
		        	}

		        	if (this._isInImage(gesture.moveX, gesture.moveY, this.state.image4OrigX - (this.state.image4OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH, this.state.image4OrigY - (this.state.image4OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH + HEADER_HEIGHT, SCREEN_WIDTH * this.state.image4OrigScale * 0.3) && 
		        	this.state.image4Hovered[0] === false && this.state.image4Exists) {
		        		this.setState({image4Hovered: update(this.state.image4Hovered, {0: {$set: true}})});
		        		this._animateMove(this.state.image4XY, this.state.image1OrigX, this.state.image1OrigY);
		        		this._animateResize(this.state.image1Scale, this.state.image4OrigScale);
		        		this._animateResize(this.state.image4Scale, this.state.image1OrigScale);
		        	}
		        	else if (!(this._isInImage(gesture.moveX, gesture.moveY, this.state.image4OrigX - (this.state.image4OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH, this.state.image4OrigY - (this.state.image4OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH + HEADER_HEIGHT, SCREEN_WIDTH * this.state.image4OrigScale * 0.3)) && 
		        	this.state.image4Hovered[0] === true && this.state.image4Exists) {
		        		this.setState({image4Hovered: update(this.state.image4Hovered, {0: {$set: false}})});
		        		this._animateMove(this.state.image4XY, this.state.image4OrigX, this.state.image4OrigY);
		        		this._animateResize(this.state.image1Scale, this.state.image1OrigScale);
		        		this._animateResize(this.state.image4Scale, this.state.image4OrigScale);
		        	}
		        	
		        	this._animateMove(this.state.image1XY, curX, curY);
		        }
	        },
	        onPanResponderRelease : (e, gesture) => {
	        	if (this.state.image1Exists) {
		        	if (this.state.image2Hovered[0]) {
		        		this._animateMove(this.state.image1XY, this.state.image2OrigX, this.state.image2OrigY);
				        this.setState((prevState) => ({
				        	image1OrigScale: prevState.image2OrigScale,
				        	image1OrigX: prevState.image2OrigX,
				        	image1OrigY: prevState.image2OrigY,
				        	image2OrigScale: prevState.image1OrigScale,
				        	image2OrigX: prevState.image1OrigX,
				        	image2OrigY: prevState.image1OrigY,
				        }));
		        	}
		        	else if (this.state.image3Hovered[0]) {
		        		this._animateMove(this.state.image1XY, this.state.image3OrigX, this.state.image3OrigY);
				        this.setState((prevState) => ({
				        	image1OrigScale: prevState.image3OrigScale,
				        	image1OrigX: prevState.image3OrigX,
				        	image1OrigY: prevState.image3OrigY,
				        	image3OrigScale: prevState.image1OrigScale,
				        	image3OrigX: prevState.image1OrigX,
				        	image3OrigY: prevState.image1OrigY,
				        }));
		        	}
		        	else if (this.state.image4Hovered[0]) {
		        		this._animateMove(this.state.image1XY, this.state.image4OrigX, this.state.image4OrigY);
				        this.setState((prevState) => ({
				        	image1OrigScale: prevState.image4OrigScale,
				        	image1OrigX: prevState.image4OrigX,
				        	image1OrigY: prevState.image4OrigY,
				        	image4OrigScale: prevState.image1OrigScale,
				        	image4OrigX: prevState.image1OrigX,
				        	image4OrigY: prevState.image1OrigY,
				        }));
		        	}
		        	else {
		        		this._animateMove(this.state.image1XY, this.state.image1OrigX, this.state.image1OrigY);
		        		this._animateResize(this.state.image1Scale, this.state.image1OrigScale);
		        	}
		        }
	        },
	        onPanResponderTerminate: (e, gesture) => {
	        	if (this.state.image1Exists) {
		        	this._animateMove(this.state.image1XY, this.state.image1OrigX, this.state.image1OrigY);
		        	this._animateResize(this.state.image1Scale, this.state.image1OrigScale);
		        }
	        },
	    });

		this.image2PanResponder = PanResponder.create({
			onStartShouldSetPanResponder : () => true,
	        onPanResponderGrant : (e, gesture) => {
	        	if (this.state.image2Exists) {
		        	this.setState({image1ZIndex: 1, image2ZIndex: 2, image3ZIndex: 1, image4ZIndex: 1});
		        	this._animateResize(this.state.image2Scale, this.state.image2OrigScale + 0.1);
		        	this.profileScroll.scrollTo({y: 0, animated: true});
		        }
	        },
	        onPanResponderMove : (e, gesture) => {
	        	if (this.state.image2Exists) {
		        	var curX = gesture.dx + this.state.image2OrigX;
		        	var curY = gesture.dy + this.state.image2OrigY;

		        	if (this._isInImage(gesture.moveX, gesture.moveY, this.state.image1OrigX - (this.state.image1OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH, this.state.image1OrigY - (this.state.image1OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH + HEADER_HEIGHT, SCREEN_WIDTH * this.state.image1OrigScale * 0.3) && 
		        	this.state.image1Hovered[0] === false && this.state.image1Exists) {
		        		this.setState({image1Hovered: update(this.state.image1Hovered, {0: {$set: true}})});
		        		this._animateMove(this.state.image1XY, this.state.image2OrigX, this.state.image2OrigY);
		        		this._animateResize(this.state.image1Scale, this.state.image2OrigScale);
		        		this._animateResize(this.state.image2Scale, this.state.image1OrigScale);
		        	}
		        	else if (!(this._isInImage(gesture.moveX, gesture.moveY, this.state.image1OrigX - (this.state.image1OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH, this.state.image1OrigY - (this.state.image1OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH + HEADER_HEIGHT, SCREEN_WIDTH * this.state.image1OrigScale * 0.3)) && 
		        	this.state.image1Hovered[0] === true && this.state.image1Exists) {
		        		this.setState({image1Hovered: update(this.state.image1Hovered, {0: {$set: false}})});
		        		this._animateMove(this.state.image1XY, this.state.image1OrigX, this.state.image1OrigY);
		        		this._animateResize(this.state.image1Scale, this.state.image1OrigScale);
		        		this._animateResize(this.state.image2Scale, this.state.image2OrigScale);
		        	}

		        	if (this._isInImage(gesture.moveX, gesture.moveY, this.state.image3OrigX - (this.state.image3OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH, this.state.image3OrigY - (this.state.image3OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH + HEADER_HEIGHT, SCREEN_WIDTH * this.state.image3OrigScale * 0.3) && 
		        	this.state.image3Hovered[1] === false && this.state.image3Exists) {
		        		this.setState({image3Hovered: update(this.state.image3Hovered, {1: {$set: true}})});
		        		this._animateMove(this.state.image3XY, this.state.image2OrigX, this.state.image2OrigY);
		        		this._animateResize(this.state.image3Scale, this.state.image2OrigScale);
		        		this._animateResize(this.state.image2Scale, this.state.image3OrigScale);
		        	}
		        	else if (!(this._isInImage(gesture.moveX, gesture.moveY, this.state.image3OrigX - (this.state.image3OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH, this.state.image3OrigY - (this.state.image3OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH + HEADER_HEIGHT, SCREEN_WIDTH * this.state.image3OrigScale * 0.3)) && 
		        	this.state.image3Hovered[1] === true && this.state.image3Exists) {
		        		this.setState({image3Hovered: update(this.state.image3Hovered, {1: {$set: false}})});
		        		this._animateMove(this.state.image3XY, this.state.image3OrigX, this.state.image3OrigY);
		        		this._animateResize(this.state.image3Scale, this.state.image3OrigScale);
		        		this._animateResize(this.state.image2Scale, this.state.image2OrigScale);
		        	}

		        	if (this._isInImage(gesture.moveX, gesture.moveY, this.state.image4OrigX - (this.state.image4OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH, this.state.image4OrigY - (this.state.image4OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH + HEADER_HEIGHT, SCREEN_WIDTH * this.state.image4OrigScale * 0.3) && 
		        	this.state.image4Hovered[1] === false && this.state.image4Exists) {
		        		this.setState({image4Hovered: update(this.state.image4Hovered, {1: {$set: true}})});
		        		this._animateMove(this.state.image4XY, this.state.image2OrigX, this.state.image2OrigY);
		        		this._animateResize(this.state.image4Scale, this.state.image2OrigScale);
		        		this._animateResize(this.state.image2Scale, this.state.image4OrigScale);
		        	}
		        	else if (!(this._isInImage(gesture.moveX, gesture.moveY, this.state.image4OrigX - (this.state.image4OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH, this.state.image4OrigY - (this.state.image4OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH + HEADER_HEIGHT, SCREEN_WIDTH * this.state.image4OrigScale * 0.3)) && 
		        	this.state.image4Hovered[1] === true && this.state.image4Exists) {
		        		this.setState({image4Hovered: update(this.state.image4Hovered, {1: {$set: false}})});
		        		this._animateMove(this.state.image4XY, this.state.image4OrigX, this.state.image4OrigY);
		        		this._animateResize(this.state.image4Scale, this.state.image4OrigScale);
		        		this._animateResize(this.state.image2Scale, this.state.image2OrigScale);
		        	}
		        	
		        	this._animateMove(this.state.image2XY, curX, curY);
		        }
	        },
	        onPanResponderRelease : (e, gesture) => {
	        	if (this.state.image2Exists) {
		        	if (this.state.image1Hovered[0]) {
		        		this._animateMove(this.state.image2XY, this.state.image1OrigX, this.state.image1OrigY);
				        this.setState((prevState) => ({
				        	image1OrigScale: prevState.image2OrigScale,
				        	image1OrigX: prevState.image2OrigX,
				        	image1OrigY: prevState.image2OrigY,
				        	image2OrigScale: prevState.image1OrigScale,
				        	image2OrigX: prevState.image1OrigX,
				        	image2OrigY: prevState.image1OrigY,
				        }));
		        	}
		        	else if (this.state.image3Hovered[1]) {
		        		this._animateMove(this.state.image2XY, this.state.image3OrigX, this.state.image3OrigY);
				        this.setState((prevState) => ({
				        	image2OrigScale: prevState.image3OrigScale,
				        	image2OrigX: prevState.image3OrigX,
				        	image2OrigY: prevState.image3OrigY,
				        	image3OrigScale: prevState.image2OrigScale,
				        	image3OrigX: prevState.image2OrigX,
				        	image3OrigY: prevState.image2OrigY,
				        }));
		        	}
		        	else if (this.state.image4Hovered[1]) {
		        		this._animateMove(this.state.image2XY, this.state.image4OrigX, this.state.image4OrigY);
				        this.setState((prevState) => ({
				        	image2OrigScale: prevState.image4OrigScale,
				        	image2OrigX: prevState.image4OrigX,
				        	image2OrigY: prevState.image4OrigY,
				        	image4OrigScale: prevState.image2OrigScale,
				        	image4OrigX: prevState.image2OrigX,
				        	image4OrigY: prevState.image2OrigY,
				        }));
		        	}
		        	else {
		        		this._animateMove(this.state.image2XY, this.state.image2OrigX, this.state.image2OrigY);
			        	this._animateResize(this.state.image2Scale, this.state.image2OrigScale);
		        	}
		        }
	        },
	        onPanResponderTerminate: (e, gesture) => {
	        	if (this.state.image2Exists) {
		        	this._animateMove(this.state.image2XY, this.state.image2OrigX, this.state.image2OrigY);
		        	this._animateResize(this.state.image2Scale, this.state.image2OrigScale);
		        }
	        },
		});

		this.image3PanResponder = PanResponder.create({
			onStartShouldSetPanResponder : () => true,
	        onPanResponderGrant : (e, gesture) => {
	        	if (this.state.image3Exists) {
		        	this.setState({image1ZIndex: 1, image2ZIndex: 1, image3ZIndex: 2, image4ZIndex: 1});
		        	this._animateResize(this.state.image3Scale, this.state.image3OrigScale + 0.1);
		        	this.profileScroll.scrollTo({y: 0, animated: true});
		        }
	        },
	        onPanResponderMove : (e, gesture) => {
	        	if (this.state.image3Exists) {
		        	var curX = gesture.dx + this.state.image3OrigX;
		        	var curY = gesture.dy + this.state.image3OrigY;

		        	if (this._isInImage(gesture.moveX, gesture.moveY, this.state.image1OrigX - (this.state.image1OrigScale - 1) *
		        	this.props.mainImageOffset * SCREEN_WIDTH, this.state.image1OrigY - (this.state.image1OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH + HEADER_HEIGHT, SCREEN_WIDTH * this.state.image1OrigScale * 0.3) && 
		        	this.state.image1Hovered[1] === false && this.state.image1Exists) {
		        		this.setState({image1Hovered: update(this.state.image1Hovered, {1: {$set: true}})});
		        		this._animateMove(this.state.image1XY, this.state.image3OrigX, this.state.image3OrigY);
		        		this._animateResize(this.state.image1Scale, this.state.image3OrigScale);
		        		this._animateResize(this.state.image3Scale, this.state.image1OrigScale);
		        	}
		        	else if (!(this._isInImage(gesture.moveX, gesture.moveY, this.state.image1OrigX - (this.state.image1OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH, this.state.image1OrigY - (this.state.image1OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH + HEADER_HEIGHT, SCREEN_WIDTH * this.state.image1OrigScale * 0.3)) && 
		        	this.state.image1Hovered[1] === true && this.state.image1Exists) {
		        		this.setState({image1Hovered: update(this.state.image1Hovered, {1: {$set: false}})});
		        		this._animateMove(this.state.image1XY, this.state.image1OrigX, this.state.image1OrigY);
		        		this._animateResize(this.state.image1Scale, this.state.image1OrigScale);
		        		this._animateResize(this.state.image3Scale, this.state.image3OrigScale);
		        	}

		        	if (this._isInImage(gesture.moveX, gesture.moveY, this.state.image2OrigX - (this.state.image2OrigScale - 1) *
		        	this.props.mainImageOffset * SCREEN_WIDTH, this.state.image2OrigY - (this.state.image2OrigScale - 1) *
		        	this.props.mainImageOffset * SCREEN_WIDTH + HEADER_HEIGHT, SCREEN_WIDTH * this.state.image2OrigScale * 0.3) && 
		        	this.state.image2Hovered[1] === false && this.state.image2Exists) {
		        		this.setState({image2Hovered: update(this.state.image2Hovered, {1: {$set: true}})});
		        		this._animateMove(this.state.image2XY, this.state.image3OrigX, this.state.image3OrigY);
		        		this._animateResize(this.state.image3Scale, this.state.image2OrigScale);
		        		this._animateResize(this.state.image2Scale, this.state.image3OrigScale);
		        	}
		        	else if (!(this._isInImage(gesture.moveX, gesture.moveY, this.state.image2OrigX - (this.state.image2OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH, this.state.image2OrigY - (this.state.image2OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH + HEADER_HEIGHT, SCREEN_WIDTH * this.state.image2OrigScale * 0.3)) && 
		        	this.state.image2Hovered[1] === true && this.state.image2Exists) {
		        		this.setState({image2Hovered: update(this.state.image2Hovered, {1: {$set: false}})});
		        		this._animateMove(this.state.image2XY, this.state.image2OrigX, this.state.image2OrigY);
		        		this._animateResize(this.state.image3Scale, this.state.image3OrigScale);
		        		this._animateResize(this.state.image2Scale, this.state.image2OrigScale);
		        	}

		        	if (this._isInImage(gesture.moveX, gesture.moveY, this.state.image4OrigX - (this.state.image4OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH, this.state.image4OrigY - (this.state.image4OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH + HEADER_HEIGHT, SCREEN_WIDTH * this.state.image4OrigScale * 0.3) && 
		        	this.state.image4Hovered[2] === false && this.state.image4Exists) {
		        		this.setState({image4Hovered: update(this.state.image4Hovered, {2: {$set: true}})});
		        		this._animateMove(this.state.image4XY, this.state.image3OrigX, this.state.image3OrigY);
		        		this._animateResize(this.state.image4Scale, this.state.image3OrigScale);
		        		this._animateResize(this.state.image3Scale, this.state.image4OrigScale);
		        	}
		        	else if (!(this._isInImage(gesture.moveX, gesture.moveY, this.state.image4OrigX - (this.state.image4OrigScale - 1) *
		        		this.props.mainImageOffset * SCREEN_WIDTH, this.state.image4OrigY - (this.state.image4OrigScale - 1) *
		        		this.props.mainImageOffset * SCREEN_WIDTH + HEADER_HEIGHT, SCREEN_WIDTH * this.state.image4OrigScale * 0.3)) &&
		        		this.state.image4Hovered[2] === true && this.state.image4Exists) {
		        		this.setState({image4Hovered: update(this.state.image4Hovered, {2: {$set: false}})});
		        		this._animateMove(this.state.image4XY, this.state.image4OrigX, this.state.image4OrigY);
		        		this._animateResize(this.state.image4Scale, this.state.image4OrigScale);
		        		this._animateResize(this.state.image3Scale, this.state.image3OrigScale);
		        	}
		        	
		        	this._animateMove(this.state.image3XY, curX, curY);
		        }
	        },
	        onPanResponderRelease : (e, gesture) => {
	        	if (this.state.image3Exists) {
		        	if (this.state.image1Hovered[1]) {
		        		this._animateMove(this.state.image3XY, this.state.image1OrigX, this.state.image1OrigY);
				        this.setState((prevState) => ({
				        	image1OrigScale: prevState.image3OrigScale,
				        	image1OrigX: prevState.image3OrigX,
				        	image1OrigY: prevState.image3OrigY,
				        	image3OrigScale: prevState.image1OrigScale,
				        	image3OrigX: prevState.image1OrigX,
				        	image3OrigY: prevState.image1OrigY,
				        }));
		        	}
		        	else if (this.state.image2Hovered[1]) {
		        		this._animateMove(this.state.image3XY, this.state.image2OrigX, this.state.image2OrigY);
				        this.setState((prevState) => ({
				        	image2OrigScale: prevState.image3OrigScale,
				        	image2OrigX: prevState.image3OrigX,
				        	image2OrigY: prevState.image3OrigY,
				        	image3OrigScale: prevState.image2OrigScale,
				        	image3OrigX: prevState.image2OrigX,
				        	image3OrigY: prevState.image2OrigY,
				        }));
		        	}
		        	else if (this.state.image4Hovered[2]) {
		        		this._animateMove(this.state.image3XY, this.state.image4OrigX, this.state.image4OrigY);
				        this.setState((prevState) => ({
				        	image3OrigScale: prevState.image4OrigScale,
				        	image3OrigX: prevState.image4OrigX,
				        	image3OrigY: prevState.image4OrigY,
				        	image4OrigScale: prevState.image3OrigScale,
				        	image4OrigX: prevState.image3OrigX,
				        	image4OrigY: prevState.image3OrigY,
				        }));
		        	}
		        	else {
		        		this._animateMove(this.state.image3XY, this.state.image3OrigX, this.state.image3OrigY);
			        	this._animateResize(this.state.image3Scale, this.state.image3OrigScale);
		        	}
		        }
	        },
	        onPanResponderTerminate: (e, gesture) => {
	        	if (this.state.image3Exists) {
		        	this._animateMove(this.state.image3XY, this.state.image3OrigX, this.state.image3OrigY);
		        	this._animateResize(this.state.image3Scale, this.state.image3OrigScale);
		        }
	        },
		});

		this.image4PanResponder = PanResponder.create({
			onStartShouldSetPanResponder : () => true,
	        onPanResponderGrant : (e, gesture) => {
	        	if (this.state.image4Exists) {
		        	this.setState({image1ZIndex: 1, image2ZIndex: 1, image3ZIndex: 1, image4ZIndex: 2});
		        	this._animateResize(this.state.image4Scale, this.state.image4OrigScale + 0.1);
		        	this.profileScroll.scrollTo({y: 0, animated: true});
		        }
	        },
	        onPanResponderMove : (e, gesture) => {
	        	if (this.state.image4Exists) {
		        	var curX = gesture.dx + this.state.image4OrigX;
		        	var curY = gesture.dy + this.state.image4OrigY;

		        	if (this._isInImage(gesture.moveX, gesture.moveY, this.state.image1OrigX - (this.state.image1OrigScale - 1) *
		        	this.props.mainImageOffset * SCREEN_WIDTH, this.state.image1OrigY - (this.state.image1OrigScale - 1) *
		        	this.props.mainImageOffset * SCREEN_WIDTH + HEADER_HEIGHT, SCREEN_WIDTH * this.state.image1OrigScale * 0.3) &&
		        	this.state.image1Hovered[2] === false && this.state.image1Exists) {
		        		this.setState({image1Hovered: update(this.state.image1Hovered, {2: {$set: true}})});
		        		this._animateMove(this.state.image1XY, this.state.image4OrigX, this.state.image4OrigY);
		        		this._animateResize(this.state.image1Scale, this.state.image4OrigScale);
		        		this._animateResize(this.state.image4Scale, this.state.image1OrigScale);
		        	}
		        	else if (!(this._isInImage(gesture.moveX, gesture.moveY, this.state.image1OrigX - (this.state.image1OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH, this.state.image1OrigY - (this.state.image1OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH + HEADER_HEIGHT, SCREEN_WIDTH * this.state.image1OrigScale * 0.3)) && 
		        	this.state.image1Hovered[2] === true && this.state.image1Exists) {
		        		this.setState({image1Hovered: update(this.state.image1Hovered, {2: {$set: false}})});
		        		this._animateMove(this.state.image1XY, this.state.image1OrigX, this.state.image1OrigY);
		        		this._animateResize(this.state.image1Scale, this.state.image1OrigScale);
		        		this._animateResize(this.state.image4Scale, this.state.image4OrigScale);
		        	}

		        	if (this._isInImage(gesture.moveX, gesture.moveY, this.state.image2OrigX - (this.state.image2OrigScale - 1) *
		        	this.props.mainImageOffset * SCREEN_WIDTH, this.state.image2OrigY - (this.state.image2OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH + HEADER_HEIGHT, SCREEN_WIDTH * this.state.image2OrigScale * 0.3) && 
		        	this.state.image2Hovered[2] === false && this.state.image2Exists) {
		        		this.setState({image2Hovered: update(this.state.image2Hovered, {2: {$set: true}})});
		        		this._animateMove(this.state.image2XY, this.state.image4OrigX, this.state.image4OrigY);
		        		this._animateResize(this.state.image4Scale, this.state.image2OrigScale);
		        		this._animateResize(this.state.image2Scale, this.state.image4OrigScale);
		        	}
		        	else if (!(this._isInImage(gesture.moveX, gesture.moveY, this.state.image2OrigX - (this.state.image2OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH, this.state.image2OrigY - (this.state.image2OrigScale - 1) *
		        	this.props.mainImageOffset * SCREEN_WIDTH + HEADER_HEIGHT, SCREEN_WIDTH * this.state.image2OrigScale * 0.3)) &&
		        		this.state.image2Hovered[2] === true && this.state.image2Exists) {
		        		this.setState({image2Hovered: update(this.state.image2Hovered, {2: {$set: false}})});
		        		this._animateMove(this.state.image2XY, this.state.image2OrigX, this.state.image2OrigY);
		        		this._animateResize(this.state.image4Scale, this.state.image4OrigScale);
		        		this._animateResize(this.state.image2Scale, this.state.image2OrigScale);
		        	}

		        	if (this._isInImage(gesture.moveX, gesture.moveY, this.state.image3OrigX - (this.state.image3OrigScale - 1) *
		        	this.props.mainImageOffset * SCREEN_WIDTH, this.state.image3OrigY - (this.state.image3OrigScale - 1) *
		        	this.props.mainImageOffset * SCREEN_WIDTH + HEADER_HEIGHT, SCREEN_WIDTH * this.state.image3OrigScale * 0.3) &&
		        	this.state.image3Hovered[2] === false && this.state.image3Exists) {
		        		this.setState({image3Hovered: update(this.state.image3Hovered, {2: {$set: true}})});
		        		this._animateMove(this.state.image3XY, this.state.image4OrigX, this.state.image4OrigY);
		        		this._animateResize(this.state.image4Scale, this.state.image3OrigScale);
		        		this._animateResize(this.state.image3Scale, this.state.image4OrigScale);
		        	}
		        	else if (!(this._isInImage(gesture.moveX, gesture.moveY, this.state.image3OrigX - (this.state.image3OrigScale - 1) *
		        	this.props.mainImageOffset * SCREEN_WIDTH, this.state.image3OrigY - (this.state.image3OrigScale - 1) * 
		        	this.props.mainImageOffset * SCREEN_WIDTH + HEADER_HEIGHT, SCREEN_WIDTH * this.state.image3OrigScale * 0.3)) && 
		        	this.state.image3Hovered[2] === true && this.state.image3Exists) {
		        		this.setState({image3Hovered: update(this.state.image3Hovered, {2: {$set: false}})});
		        		this._animateMove(this.state.image3XY, this.state.image3OrigX, this.state.image3OrigY);
		        		this._animateResize(this.state.image4Scale, this.state.image4OrigScale);
		        		this._animateResize(this.state.image3Scale, this.state.image3OrigScale);
		        	}
		        	
		        	this._animateMove(this.state.image4XY, curX, curY);
		        }
	        },
	        onPanResponderRelease : (e, gesture) => {
	        	if (this.state.image4Exists) {
		        	if (this.state.image1Hovered[2]) {
		        		this._animateMove(this.state.image4XY, this.state.image1OrigX, this.state.image1OrigY);
				        this.setState((prevState) => ({
				        	image1OrigScale: prevState.image4OrigScale,
				        	image1OrigX: prevState.image4OrigX,
				        	image1OrigY: prevState.image4OrigY,
				        	image4OrigScale: prevState.image1OrigScale,
				        	image4OrigX: prevState.image1OrigX,
				        	image4OrigY: prevState.image1OrigY,
				        }));
		        	}
		        	else if (this.state.image2Hovered[2]) {
		        		this._animateMove(this.state.image4XY, this.state.image2OrigX, this.state.image2OrigY);
				        this.setState((prevState) => ({
				        	image2OrigScale: prevState.image4OrigScale,
				        	image2OrigX: prevState.image4OrigX,
				        	image2OrigY: prevState.image4OrigY,
				        	image4OrigScale: prevState.image2OrigScale,
				        	image4OrigX: prevState.image2OrigX,
				        	image4OrigY: prevState.image2OrigY,
				        }));
		        	}
		        	else if (this.state.image3Hovered[2]) {
		        		this._animateMove(this.state.image4XY, this.state.image3OrigX, this.state.image3OrigY);
				        this.setState((prevState) => ({
				        	image3OrigScale: prevState.image4OrigScale,
				        	image3OrigX: prevState.image4OrigX,
				        	image3OrigY: prevState.image4OrigY,
				        	image4OrigScale: prevState.image3OrigScale,
				        	image4OrigX: prevState.image3OrigX,
				        	image4OrigY: prevState.image3OrigY,
				        }));
		        	}
		        	else {
		        		this._animateMove(this.state.image4XY, this.state.image4OrigX, this.state.image4OrigY);
			        	this._animateResize(this.state.image4Scale, this.state.image4OrigScale);
		        	}
		        }
	        },
	        onPanResponderTerminate: (e, gesture) => {
	        	if (this.state.image4Exists) {
		        	this._animateMove(this.state.image4XY, this.state.image4OrigX, this.state.image4OrigY);
		        	this._animateResize(this.state.image4Scale, this.state.image4OrigScale);
		        }
	        },
		});
	}

	_isInImage (curX, curY, xPos, yPos, size) {
		if (xPos < curX && curX < (xPos + size) && yPos < curY && curY < (yPos + size)) {
			return true;
		}
		else {
			return false;
		}
	}

	_animateMove (imageXY, xPos, yPos) {
		Animated.spring(
            imageXY,
            {
            	toValue : {
	            	x : xPos,
	            	y : yPos,
            	},
            	speed: 20,
            },
        ).start();
	}

	_animateResize (imageScale, newSize) {
		Animated.spring(
            imageScale,
            {
            	toValue : newSize,
            	speed: 20,
            },
        ).start();
	}

    _connectInsta = () => {
        console.log('ConnectInsta Pressed');
    }

    _addPhoto = () => {
    	console.log('Add Photo');
    }

	render() {
		return (
			<View style={styles.background}>
				<ScrollView contentContainerStyle={{ paddingTop: SCREEN_HEIGHT * 0.091 }} showsVerticalScrollIndicator={false} ref={(ref) => this.profileScroll = ref}>
					<KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={-200}>
						<View style={styles.imageGallery}>
							<Animated.View {...this.image1PanResponder.panHandlers} style={[styles.mainImageView, this.state.image1XY.getLayout(), {zIndex: this.state.image1ZIndex, transform: [{scale: this.state.image1Scale}]}]}>
								<Animated.Image source={this.state.mainImageSource} style={[styles.mainImage]} />
								<View style={styles.deleteImageView}>
									<Image source={require('../assets/Icons/delete.imageset/delete.png')} style={styles.deleteImage} />
								</View>
							</Animated.View>
							<Animated.View {...this.image2PanResponder.panHandlers} style={[styles.smallImageView, this.state.image2XY.getLayout(), {zIndex: this.state.image2ZIndex, transform: [{scale: this.state.image2Scale}]}]}>
								<Animated.Image source={this.state.smallImage1Source} style={[styles.smallImage]} />
								<View style={styles.deleteImageView}>
									<Image source={require('../assets/Icons/delete.imageset/delete.png')} style={styles.deleteImage} />
								</View>
							</Animated.View>
							<Animated.View {...this.image3PanResponder.panHandlers} style={[styles.smallImageView, this.state.image3XY.getLayout(), {zIndex: this.state.image3ZIndex, transform: [{scale: this.state.image3Scale}]}]}>
								<Animated.Image source={this.state.smallImage2Source} style={[styles.smallImage]}/>
								<View style={styles.deleteImageView}>
									<Image source={require('../assets/Icons/delete.imageset/delete.png')} style={styles.deleteImage} />
								</View>
							</Animated.View>
							<Animated.View {...this.image4PanResponder.panHandlers} style={[styles.smallImageView, this.state.image4XY.getLayout(), {zIndex: this.state.image4ZIndex, transform: [{scale: this.state.image4Scale}]}]}>
								<Animated.Image source={this.state.smallImage3Source} style={[styles.smallImage]}/>
								<View style={styles.deleteImageView}>
									<Image source={require('../assets/Icons/delete.imageset/delete.png')} style={styles.deleteImage} />
								</View>
							</Animated.View>
							{/*<TouchableHighlight onPress={this._addPhoto}>
								<View style={[styles.smallImageView, {left: 30, top: 30, zIndex: 3, elevation: 2}]}>
									<Image source={this.props.addImageSource} style={[styles.smallImage]}/>
								</View>
							</TouchableHighlight>*/}
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
                        {/*<TouchableHighlight					--- Instagram button, unused
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
                        </TouchableHighlight>*/}
					</KeyboardAvoidingView>
				</ScrollView>
				<ImageBackground source={require('../assets/Pngs/bg.imageset/bg.png')} style={styles.header}>
					<TouchableOpacity onPress={()=>this.props.navigation.navigate('ProfileSetting')}>
						<View style={styles.backArrow}>
							<Image source={require('../assets/Icons/go-back-left-arrow/go-back-left-arrow.png')} style={styles.backArrowImage} />
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
		alignItems: 'center',
	},
	backArrowImage: {
		width: SCREEN_WIDTH * 0.07,
		height: SCREEN_WIDTH * 0.07,
	},
	background: {
		backgroundColor: '#F2F3F4',
		flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        elevation: -1,
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
		fontSize: SCREEN_HEIGHT * 0.0234375,
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
		marginVertical: SCREEN_HEIGHT * 0.04, // change this to marginBottom if Instagram button is used
		paddingLeft: SCREEN_WIDTH * 0.046,
		paddingRight: SCREEN_WIDTH * 0.046,
		justifyContent: 'center',
        elevation: 1,
	},
	contactInfoText: {
		color: '#8E8E93',
		fontSize: SCREEN_HEIGHT * 0.0234375,
		fontFamily: 'Roboto',
		textAlign: 'left',
	},
	deleteImage: {
		resizeMode: 'contain',
	},
	deleteImageView: {
		position: 'absolute',
		right: -SCREEN_WIDTH * 0.02,
		top: -SCREEN_WIDTH * 0.02,
		transform: [{scale: 0.33}]
	},
	header: {
		left: 0,
		flexDirection: 'row',
		alignItems: 'center',
        width: '100%',
        height: HEADER_HEIGHT,
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
        elevation: 1,
	},
	instaLogo: {

	},
	mainImage: {
		resizeMode: 'contain',
		width: SCREEN_WIDTH * 0.3,
		height: SCREEN_WIDTH * 0.3,
	},
	mainImageView: {
		position: 'absolute',
		width: SCREEN_WIDTH * 0.3,
		height: SCREEN_WIDTH * 0.3,
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
		fontSize: SCREEN_HEIGHT * 0.0234375,
		fontFamily: 'Roboto',
	},
	smallImage: {
		resizeMode: 'contain',
		width: SCREEN_WIDTH * 0.3,
		height: SCREEN_WIDTH * 0.3,
	},
	smallImageView: {
		position: 'absolute',
		width: SCREEN_WIDTH * 0.3,
		height: SCREEN_WIDTH * 0.3,
	},
	save: {
		fontFamily: 'Roboto',
		fontSize: SCREEN_HEIGHT * 0.028125,
		color: '#FDD302',
		textAlign: 'right',
		elevation: 2,
	},
	title: {
		fontFamily: 'Roboto',
		fontSize: SCREEN_HEIGHT * 0.028125,
		color: 'white',
		textAlign: 'left',
		elevation: 2,
		marginRight: SCREEN_WIDTH * 0.43,
	},
});