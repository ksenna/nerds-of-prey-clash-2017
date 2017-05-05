import React, { Component } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import styles from './Styles/TimerStyles'

export default class Timer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.timeContainer}>
          <Text style={styles.clockText}>{this.getFormattedMinutes()}</Text>
          <Text style={styles.label}>MINUTES</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.clockSeparator}> : </Text>
          <Text style={styles.label}></Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.clockText}>{this.getFormattedHSeconds()}</Text>
          <Text style={styles.label}>SECONDS</Text>
        </View>
      </View>
    );
  }

  getFormattedHSeconds() {
    return moment(this.props.timeElapsed).utcOffset('+0000').format('ss');
  }

  getFormattedMinutes() {
    return moment(this.props.timeElapsed).utcOffset('+0000').format('mm');
  }
}
