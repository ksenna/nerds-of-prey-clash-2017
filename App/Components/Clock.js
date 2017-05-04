import React, { Component } from 'react';
import { View } from 'react-native';
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

    this.onTimerStarted = this.onTimerStarted.bind(this);
    this.onTimerStopped = this.onTimerStopped.bind(this);
  }

  render() {
    return(
      <View>
        <Timer timeElapsed={this.state.timeElapsed}/>

        <ClockControl
          running={this.state.running}
          startTimer={this.onTimerStarted}
          stopTimer={this.onTimerStopped}/>
      </View>
    );
  }

  onTimerStarted() {
    debugger
    console.log('timer started')
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

  onTimerStopped() {
    debugger
    console.log('timer stopped')
    clearInterval(this.interval);
    this.setState({
      running: false
    });
  }
}