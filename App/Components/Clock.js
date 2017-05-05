import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import ClockControl from './ClockControl';
import Timer from './Timer';
import moment from 'moment';
import IosTagInput from './IosTagInput'
import AndroidTagInput from './AndroidTagInput'

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

  getTagInputComponent() {
    var tagComponent = (Platform.OS === 'ios') ? <IosTagInput /> : <AndroidTagInput />
    // this.props.running ? Images.stopButton : Images.startButton
    return tagComponent
  }

  render() {
    return(
      <View>
        <Timer timeElapsed={this.state.timeElapsed}/>
        {this.getTagInputComponent()}
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
      startTime: moment()
    });

    timer.setInterval('testName', () => {
      console.log('tick');

      let elapsed;

      if (this.props.countdown) {
        elapsed = moment(this.state.startTime.diff(moment()));
      } else {
        elapsed = moment(moment().diff(this.state.startTime));
      }

      this.setState({
        timeElapsed: elapsed,
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
