import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormatTime from 'minutes-seconds-milliseconds';

export default class Timer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <Text>{this.props.timeElapsed}</Text>
      </View>
    );
  }
}