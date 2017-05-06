import React, {Component} from 'react';
import { View, Button, Text, TextInput, Switch } from 'react-native';
// import TagInput from './TagInput'
import moment from 'moment';

import styles from './Styles/SaveConfirmationScreenStyles'
import { Colors } from '../Themes/'
import { Actions } from 'react-native-router-flux';

export default class SaveConfirmationScreen extends Component {
  constructor(props) {
    super(props);
  }

  getFormattedSeconds() {
    let offsetSeconds = this.props.finalOffset % 60
    let elapsedSeconds = moment(this.props.timeElapsed).seconds();
    let seconds = this.props.finalOffset == 0 ? elapsedSeconds : ((60 + offsetSeconds) % elapsedSeconds);
    return moment(seconds, 'seconds').format('ss');
  }

  getFormattedMinutes() {
    let bonusOffset = this.props.finalOffset == 0 ? 0 : 1;
    let offsetMinutes = this.props.finalOffset / 60;
    let elapsedMinutes = moment(this.props.timeElapsed).minutes() + bonusOffset;
    return moment(offsetMinutes - elapsedMinutes, 'minutes').format('mm');
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.timeDisplayLabel}>TOTAL FOCUS TIME</Text>

          <View style={styles.timeDisplayContainer}>
            <View style={styles.timeContainer}>
              <Text style={styles.clockText}>{this.getFormattedMinutes()}</Text>
              <Text style={styles.label}>MINUTES</Text>
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.clockSeparator}> : </Text>
              <Text style={styles.label}></Text>
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.clockText}>{this.getFormattedSeconds()}</Text>
              <Text style={styles.label}>SECONDS</Text>
            </View>
          </View>

          <View style={{paddingTop: 25}}>
            <View style={styles.inputContainer}>
              <Text style={styles.input}>#meetings</Text>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.input}>{this.props.clientName}</Text>
            </View>
          </View>
          <View style={styles.billableContainer}>
            <Text style={styles.billableLabel}>BILLABLE</Text>
            <Switch
              style={styles.switchStyle}
              value={true}
            />
          </View>
          <Text style={{fontSize: 12, color: Colors.black, paddingTop: 80}} onPress={() => Actions.pop()}>DISCARD</Text>
        </View>
      </View>
    );
  }
}
