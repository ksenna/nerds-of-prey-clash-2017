import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormatTime from 'minutes-seconds-milliseconds';
import moment from 'moment';

export default class Timer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <Text>{this.getFormattedTime()}</Text>
      </View>
    );
  }

  getFormattedTime() {
    return moment(this.props.timeElapsed).utcOffset('+0000').format('HH mm ss');
  }
}