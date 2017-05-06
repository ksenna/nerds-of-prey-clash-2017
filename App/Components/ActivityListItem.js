import React, { Component } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import styles from './Styles/ActivityListItemStyles';

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
    return moment(this.props.timeElasped).utcOffset('+0000').format('h:mm');
  }

  getActivityMetadata() {
    if (this.props.clientName == '') {
      return <Text style={styles.activityName}>{this.props.activityName}</Text>
    } else {
      return <View>
              <Text style={styles.activityName}>{this.props.activityName}</Text>
              <Text style={styles.clientName}>{this.props.clientName}</Text>
            </View>
    }
  }
}