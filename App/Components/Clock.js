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
      startTime: moment(),
      timeElapsed: moment(moment().diff(moment())),
      running: false
    }

    this.onTimerStarted = this.onTimerStarted.bind(this);
    this.onTimerStopped = this.onTimerStopped.bind(this);
    this.onTimerToggled = this.onTimerToggled.bind(this);
  }

  render() {
    return(
      <View>
        <Timer timeElapsed={this.state.timeElapsed}/>
        <ClockControl
          running={this.state.running}
          toggleTimer={this.onTimerToggled}/>
      </View>
    );
  }

  componentWillUnmount() {
    timer.clearInterval(this);
  }

  onTimerToggled() {
    console.log('toggle');
    if (this.state.running) {
      this.onTimerStopped();
    } else {
      this.onTimerStarted();
    }
  }

  onTimerStarted() {
    console.log('timer started')
    this.setState({
      timeElapsed: moment(moment().diff(this.state.startTime))
    });

    timer.setInterval('testName', () => {
      console.log('tick');

      this.setState({
        timeElapsed: moment(moment().diff(this.state.startTime)),
        running: true
      });
    }, 1000);
  }

  onTimerStopped() {
    console.log('timer stopped')
    timer.clearInterval('testName');
    this.setState({
      startTime: moment(),
      timeElapsed: moment(moment().diff(moment())),
      running: false
    });
  }
}