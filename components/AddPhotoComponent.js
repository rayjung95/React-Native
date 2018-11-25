import React, {Component} from 'react'
import {StyleSheet, Text, TouchableOpacity, View, StatusBar} from 'react-native';

import Modal from "react-native-modal";
import Layout from "../constants/Layout";

const SCREEN_HEIGHT = Layout.window.height;
const SCREEN_WIDTH = Layout.window.width;

export default class AddPhotoComponent extends Component {
	constructor() {
        super();
        this.state = {
            isModalVisible: false
        };
        this.closeModal = this.closeModal.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isModalVisible: nextProps.isModalVisible
        })
    }

    closeModal() {
    	this.props.updateModal();
        this.setState({
            isModalVisible: false
        })
    }

    render() {
        return (
            <Modal
            	isVisible={this.state.isModalVisible}
            	animationType={'fade'}
            	onRequestClose={this.closeModal}
            	onBackdropPress={this.closeModal}
                style={{margin: 0, flex: 1}}
            >
                <StatusBar hidden={true}/>
                <View style={styles.menuView}>
                    <TouchableOpacity>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}> TAKE A PHOTO </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}> SELECT FROM GALLERY </Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.divider}/>

                    <TouchableOpacity onPress={this.closeModal}>
                        <View style={styles.textContainer}>
                            <Text style={[styles.text, {marginBottom: 10}]}> CANCEL </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    divider: {
        borderTopColor: '#cacbcc',
        borderTopWidth: 1,
        width: SCREEN_WIDTH,
        marginTop: -10
    },
    menuView: {
    	backgroundColor: 'white',
        height: SCREEN_HEIGHT * 0.35,
        width: SCREEN_WIDTH,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: SCREEN_HEIGHT * 0.0328125,
        bottom: 0,
        position: 'absolute',
    },
    text: {
        color: '#FDD302',
        fontSize: SCREEN_WIDTH * SCREEN_HEIGHT / 10000 * 0.8,
        fontFamily: 'Roboto'
    },
    textContainer: {
        width: SCREEN_WIDTH,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});