import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormatTime from 'minutes-seconds-milliseconds';

export default class Timer extends Component {
    render() {
    return(
      <View>
        <Text>{FormatTime(this.props.timeElapsed)}</Text>
      </View>
    );
  }
}