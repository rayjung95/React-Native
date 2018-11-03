import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Layout from '../constants/Layout';
const SCREEN_HEIGHT = Layout.window.height;
const SCREEN_WIDTH = Layout.window.width;

export default class DateTimePickerTester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: this.props.word,
      datetime: 'Enter a date and time' 
    }
  }
  

  static defaultProps = {
    word: 'no words'
  }

  state = {
    isDateTimePickerVisible: false,
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
    console.log('A date has been picked: ', date);
    time = this._formatAMPM(date);
    this.setState({datetime: (date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear() + '  ' + time)})
    this._hideDateTimePicker();
  };

  _formatAMPM = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  render () {
    return (
      <View style={{ flex: 1 , flexDirection: "row", justifyContent: 'space-between',}}>
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text style={{ flex: 1, fontSize: SCREEN_HEIGHT * (16/592), color: 'black' , marginLeft: 20, paddingTop: 10}} fontFamily='Roboto'>{this.state.word}</Text>
        </TouchableOpacity>
          <Text style={{ flex: 1, fontSize: SCREEN_HEIGHT * (10/592), color: 'black', paddingTop: 10, marginLeft: 150}} fontFamily='Roboto'>{this.state.datetime}</Text>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode={'datetime'}
          is24Hour={false}
        />
      </View>
    );
  }

}