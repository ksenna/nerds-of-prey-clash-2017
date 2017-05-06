import React, { Component } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import styles from './Styles/ActivityListItemStyles';

const formatFocusTime = (msWeek) => {
  let hours = Math.floor(((msWeek / 1000) / 60) / 60);
  hours = hours < 10 ? `0${hours}` : hours;

  let minutes = Math.round(((msWeek / 1000) / 60) % 60);
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}:${minutes}`
};

export default class ActivityListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.startTime}>{this.getFormattedStartTime()}</Text>
        <View style={styles.mainContainer}>
          {this.getActivityMetadata()}
          <Text style={styles.timeElapsed}>{this.getFormattedTimeElapsed()}</Text>
        </View>
      </View>
    );
  }

  getFormattedStartTime() {
    return moment(this.props.startTime).utcOffset('+0000').format('hh:mm A');
  }

  getFormattedTimeElapsed() {
    // return `${this.props.timeElapsed}`;
    // return moment(this.props.timeElasped).utcOffset('+0000').format('h:mm');
    return formatFocusTime(this.props.timeElapsed);
  }

  getActivityMetadata() {
    if (this.props.clientName == '') {
      return <Text style={styles.activityName}>{this.props.activityName}</Text>
    } else {
      let clientName = this.props.clientName;
      if (this.props.billable) {
        clientName += ', Billable';
      }
      return <View>
              <Text style={styles.activityName}>{this.props.activityName}</Text>
              <Text style={styles.clientName}>{clientName}</Text>
            </View>
    }
  }
}