import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import moment from 'moment';
import styles from './Styles/TimerStyles'
import Images from '../Themes/Images'

export default class Timer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.timeContainer}>
          {this.getArrowUpImage()}
          <Text style={styles.clockText}>{this.getFormattedMinutes()}</Text>
          {this.getArrowDownImage()}
          <Text style={styles.label}>MINUTES</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.clockSeparator}> : </Text>
          <Text style={styles.label}></Text>
        </View>
        <View style={styles.timeContainer}>
          {this.getArrowUpImage()}
          <Text style={styles.clockText}>{this.getFormattedHSeconds()}</Text>
          {this.getArrowDownImage()}
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

  getArrowUpImage() {
    return this.props.countdown ? <Image source={Images.arrowUp} style={styles.arrowUp}/> : <Image/>
  }

  getArrowDownImage() {
    return this.props.countdown ? <Image source={Images.arrowDown} style={styles.arrowDown}/> : <Image/>
  }
}
