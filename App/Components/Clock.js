import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ClockControl from './ClockControl';
import Timer from './Timer';
import moment from 'moment';

const timer = require('react-native-timer');

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: '',
      timeElapsed: moment().format('hh mm ss'),
      running: false
    }

    this.onTimerStarted = this.onTimerStarted.bind(this);
    this.onTimerStopped = this.onTimerStopped.bind(this);
  }

  render() {
    return(
      <View>
        <Timer timeElapsed={this.state.timeElapsed}/>
        {/*<Text>{this.state.startTime}</Text>*/}
        <ClockControl
          running={this.state.running}
          startTimer={this.onTimerStarted}
          stopTimer={this.onTimerStopped}/>
      </View>
    );
  }

  componentWillUnmount() {
    timer.clearInterval(this);
  }

  onTimerStarted() {
    console.log('timer started')
    this.setState({
      timeElapsed: moment().format("hh mm ss")
    });

    timer.setInterval('testName', () => {
      console.log('tick');
      this.setState({
        timeElapsed: moment().format("hh mm ss"),
        running: true
      });
    }, 1000);
  }

  onTimerStopped() {
    console.log('timer stopped')
    timer.clearInterval('testName');
    this.setState({
      running: false
    });
  }
}