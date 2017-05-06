import React, { Component } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import styles from './Styles/ActivityGraphStyles';
import Button from 'react-native-button';
import BarGraph from './BarGraph'
import { gql, graphql, compose, withApollo } from 'react-apollo';
import graphQL from '../../graphqlComponents';

const formatFocusTime = (msArray) => {
  let msWeek = msArray.reduce((total, ms) => (
    total + parseInt(ms, 10)
  ), 0);
  let hours = Math.floor(((msWeek / 1000) / 60) / 60);
  hours = hours < 10 ? `0${hours}` : hours;

  let minutes = Math.round(((msWeek / 1000) / 60) % 60);
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}:${minutes}`
};

class ActivityGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    }
  }

  componentWillReceiveProps({data}) {
    if (!data.loading) {
      console.log(data.totalTimeForDays.totals)
      this.setState({
        total: formatFocusTime(data.totalTimeForDays.totals)
      });
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.metadataContainer}>
          <View style={styles.totalFocusTimeContainer}>
            <BarGraph />
            <Text style={styles.totalFocusTimeHeader}>TOTAL FOCUS TIME</Text>
            <Text style={styles.totalFocusTime}>{this.state.total}</Text>
            <Text style={styles.totalFocusTimeHeader}>HOURS  MINS</Text>
          </View>
          <Button style={styles.detailsButton} containerStyle={styles.detailsContainer}>DETAILS</Button>
        </View>
      </View>
    )
  }
}
const ActivityGraphWithGraphQL = graphql(graphQL.TIME_TOTALS, {
  options: { variables: {
    howMany: 7,
  } },
})(ActivityGraph);
export default ActivityGraphWithGraphQL;
