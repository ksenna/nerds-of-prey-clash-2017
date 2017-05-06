'use strict'

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Platform } from 'react-native';
import { Colors, Fonts } from '../Themes/'
import { Bar } from 'react-native-pathjs-charts'
import { gql, graphql, compose, withApollo } from 'react-apollo';
import graphQL from '../../graphqlComponents';
import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.charcoal
  },
});

const formatDataForGraph = (dataArray) => {
  let now = moment();
  
  return [dataArray.map((d, i) => (
    {
      "v": ((parseInt(d, 10) / 1000) / 60) % 60,
      "name": now.clone().subtract(6-i, 'd').format('ddd').toUpperCase()
    }
  ))];
};

class BarGraph extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentWillReceiveProps({data}) {
    if (!data.loading) {
      console.log(data.totalTimeForDays.totals)
      this.setState({
        data: formatDataForGraph(data.totalTimeForDays.totals)
      });
    }
  }

  render() {
    let options = {
      height: 200,
      ...Platform.select({
        ios: {
          width: 320
        },
        android: {
          width: 350
        }
      }),
      margin: {
        top: 20,
        left: 25,
        bottom: 50,
        right: 20
      },
      // bar color
      color: Colors.green,

      gutter: 20,
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      axisX: {
        showLines: true,
        showLabels: true,
        stroke: '#FFFFFF',
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontSize: 8,
          fontWeight: false,
          fill: Colors.warmGrey,
          rotate: 0,
          ...Platform.select({
            ios: {
              fontFamily: Fonts.type.iosAccent
            },
            android: {
              fontFamily: Fonts.type.androidAccent
            }
          })
        }
      },
      axisY: {
        showLines: true,
        showLabels: true,
        zeroAxis: false,
        orient: 'left',
        label: {
          fontSize: 10,
          fontWeight: false,
          fill: Colors.warmGrey,
          ...Platform.select({
            ios: {
              fontFamily: Fonts.type.iosAccent
            },
            android: {
              fontFamily: Fonts.type.androidAccent
            }
          })
        }
      }
    }

    return (
      <View style={styles.container}>
        <Bar data={this.state.data} options={options} accessorKey='v'/>
      </View>
    )
  }
}


const BarGraphWithGraphQL = graphql(graphQL.TIME_TOTALS, {
  options: { variables: {
    howMany: 7,
  } },
})(BarGraph);
export default BarGraphWithGraphQL;