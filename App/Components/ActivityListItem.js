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
        <Text>{this.getFormattedStartTime()}</Text>
        <Text>{this.props.clientName}</Text>
        <Text>{this.getFormattedTimeElapsed()}</Text>
      </View>
    );
  }

  getFormattedStartTime() {
    return moment(this.props.startTime).utcOffset('+0000').format('hh:mm A');
  }

  getFormattedTimeElapsed() {
    return moment(this.props.timeElasped).utcOffset('+0000').format('h:mm');
  }
}