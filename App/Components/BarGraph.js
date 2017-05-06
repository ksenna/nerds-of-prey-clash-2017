'use strict'

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Platform } from 'react-native';
import { Colors, Fonts } from '../Themes/'
import { Bar } from 'react-native-pathjs-charts'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.charcoal
  },
});

export default class BarGraph extends Component {
  render() {
    let data = [
      [{
        "v": 70,
        "name": "MON"
      }, {
        "v": 55,
        "name": "TUE"
      },
      {
        "v": 20,
        "name": "WED"
      },
      {
        "v": 120,
        "name": "THU"
      },
      {
        "v": 75,
        "name": "FRI"
      },
      {
        "v": 20,
        "name": "SAT"
      },
      {
        "v": 0,
        "name": "SUN"
      }]
    ]

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
        <Bar data={data} options={options} accessorKey='v'/>
      </View>
    )
  }
}
