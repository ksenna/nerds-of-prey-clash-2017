import React, { Component } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import styles from './Styles/ActivityGraphStyles';
import Button from 'react-native-button';

export default class ActivityGraph extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.metadataContainer}>
          <View style={styles.totalFocusTimeContainer}>
            <Text style={styles.totalFocusTimeHeader}>TOTAL FOCUS TIME</Text>
            <Text style={styles.totalFocusTime}>05:45</Text>
            <Text style={styles.totalFocusTimeHeader}>HOURS  MINS</Text>
          </View>
          <Button style={styles.detailsButton} containerStyle={styles.detailsContainer}>DETAILS</Button>
        </View>
      </View>
    )
  }
}