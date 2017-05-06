import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
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
          <TouchableHighlight onPress={() => this.props.updateCountdownTime('increaseMinute')}>
            {this.getArrowUpImage()}
          </TouchableHighlight>
          <Text style={styles.clockText}>{this.getFormattedMinutes()}</Text>
          <TouchableHighlight onPress={() => this.props.updateCountdownTime('decreaseMinute')}>
            {this.getArrowDownImage()}
          </TouchableHighlight>
          <Text style={styles.label}>MINUTES</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.clockSeparator}> : </Text>
          <Text style={styles.label}></Text>
        </View>
        <View style={styles.timeContainer}>
          <TouchableHighlight onPress={() => this.props.updateCountdownTime('increaseSecond')}>
            {this.getArrowUpImage()}
          </TouchableHighlight>
          <Text style={styles.clockText}>{this.getFormattedHSeconds()}</Text>
          <TouchableHighlight onPress={() => this.props.updateCountdownTime('decreaseSecond')}>
            {this.getArrowDownImage()}
          </TouchableHighlight>
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

  getArrowsVisible() {
    return this.props.countdown && !this.props.running;
  }

  getArrowUpImage() {
    return this.getArrowsVisible() ? <Image source={Images.arrowUp} style={styles.arrowUp}/> : <Image/>
  }

  getArrowDownImage() {
    return this.getArrowsVisible() ? <Image source={Images.arrowDown} style={styles.arrowDown}/> : <Image/>
  }
}
