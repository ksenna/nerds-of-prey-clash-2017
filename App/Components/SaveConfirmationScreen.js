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

  getFormattedHSeconds() {
    return moment(this.props.timeElapsed).utcOffset('+0000').format('ss');
  }

  getFormattedMinutes() {
    return moment(this.props.timeElapsed).utcOffset('+0000').format('mm');
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
              <Text style={styles.clockText}>{this.getFormattedHSeconds()}</Text>
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
            <Text style={styles.billableLabel}>{this.props.clientName}</Text>
            <Switch
              style={styles.switchStyle}
              value={true}
            />
          </View>
          <Text style={{fontSize: 12, color: Colors.black, paddingTop: 80}} onPress={() => Actions.tabRecord()}>DISCARD</Text>
        </View>
      </View>
    );
  }
}
