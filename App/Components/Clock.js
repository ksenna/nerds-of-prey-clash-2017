import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ClockControl from './ClockControl';
import Timer from './Timer';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: null,
      timeElapsed: null,
      running: false
    }

    this.startTimer = this.startTimer.bind(this);
  }

  render() {
    return(
      <View>
        <Timer timeElapsed={this.state.timeElapsed}/>
        <ClockControl
          running={this.state.running}
          startTimer={this.startTimer}
          stopTimer={this.stopTimer}/>
      </View>
    );
  }

  startTimer() {
    this.setState({
      startTime: new Date()
    });

    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true
      });
    }, 3000000000000);
  }

  stopTimer() {
    clearInterval(this.interval);
    this.setState({
      running: false
    });
  }
}