import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Layout from '../constants/Layout';

const SCREEN_HEIGHT = Layout.window.height;
const SCREEN_WIDTH = Layout.window.width;

export default class DateTimePickerTester extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: this.props.word,
            date: '',
            time: 'Enter a date and time'
        }
    }


    static defaultProps = {
        word: 'no words'
    }

    state = {
        isDateTimePickerVisible: false,
    };

    getDateTimeState = () => {
        return this.state;
    };

    _showDateTimePicker = () => this.setState({isDateTimePickerVisible: true});

    _hideDateTimePicker = () => this.setState({isDateTimePickerVisible: false});

    _handleDatePicked = (date) => {

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        timeString = this._formatAMPM(date);
        this.setState({
            date: (date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear()),
            time: timeString,
        })
        this._hideDateTimePicker();
    };

    _formatAMPM = (date) => {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    componentWillMount = () => {
        // console.log(SCREEN_WIDTH * (17 / 360));
        console.log(this.props.starts);
    }


    render() {
        return (

            <TouchableOpacity onPress={() => [this._showDateTimePicker()]} style={{
                flexDirection: 'row',
                height: SCREEN_HEIGHT * (43 / 592),
                backgroundColor: 'white',
                borderBottomWidth: 0.5,
                borderTopWidth: 0.5,
                borderColor: 'rgba(0,0,0, 0.1)',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    marginLeft: SCREEN_WIDTH * (15 / 360),
                    fontSize: SCREEN_HEIGHT * (11 / 592),
                    color: 'black'
                }} fontFamily='Roboto'>{this.state.word}</Text>

                <View style={{
                    width: SCREEN_WIDTH * (167 / 360),
                    height: SCREEN_HEIGHT * (14 / 592),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingRight: SCREEN_WIDTH * (13 / 360)
                }}>
                    <Text style={{fontSize: SCREEN_HEIGHT * (11 / 592), color: 'black',}}
                          fontFamily='Roboto'>{this.state.date}</Text>
                    <Text style={{fontSize: SCREEN_HEIGHT * (11 / 592), color: 'black',}}
                          fontFamily='Roboto'>{this.state.time}</Text>
                </View>

                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                    mode={'datetime'}
                    is24Hour={false}
                />
            </TouchableOpacity>
        );
    }

}