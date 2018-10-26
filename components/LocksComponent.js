import React, {Component} from 'react';
import {Animated, Dimensions, Image, StyleSheet, View} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class LocksComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isMoving: props.isMoving,
            position: props.position
        };

        this.unlockOpacity = this.state.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [0, 0, 1],
        });

        this.lockOpacity = this.state.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 0],
        });

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isMoving: nextProps.isMoving,
            position: nextProps.position
        });
    }


    render() {
        if (this.state.isMoving) {
            return (
                <View style={styles.chooseButton}>
                    <Animated.View style={{
                        opacity: this.lockOpacity,
                        width: SCREEN_HEIGHT * 0.1,
                        height: SCREEN_HEIGHT * 0.1
                    }}>
                        <Image style={styles.lockImage}
                               source={require('../assets/Icons/lock_highlight.imageset/lock_highlight.png')}/>
                    </Animated.View>
                    <Animated.View style={{
                        opacity: this.unlockOpacity,
                        width: SCREEN_HEIGHT * 0.1,
                        height: SCREEN_HEIGHT * 0.1
                    }}>
                        <Image style={styles.lockImage}
                               source={require('../assets/Icons/unlock_highlight.imageset/unlock_highlight.png')}/>
                    </Animated.View>
                </View>
            )
        } else {
            return (
                <View style={styles.chooseButton}>
                    <Animated.View style={{
                        width: SCREEN_HEIGHT * 0.1,
                        height: SCREEN_HEIGHT * 0.1
                    }}>
                        <Image style={styles.lockImage}
                               source={require('../assets/Icons/lock.imageset/lock.png')}/>
                    </Animated.View>
                    <Animated.View style={{
                        width: SCREEN_HEIGHT * 0.1,
                        height: SCREEN_HEIGHT * 0.1
                    }}>
                        <Image style={styles.lockImage}
                               source={require('../assets/Icons/unlock.imageset/unlock.png')}/>
                    </Animated.View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    chooseButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: SCREEN_HEIGHT * 0.0621118
    },
    lockImage: {
        width: '100%',
        height: '100%',
    },
});