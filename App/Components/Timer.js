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
      <View>
        <Text style={styles.clockText}>{this.getFormattedTime()}</Text>
      </View>
    );
  }

  getFormattedTime() {
    return moment(this.props.timeElapsed).utcOffset('+0000').format('HH mm ss');
  }
}
