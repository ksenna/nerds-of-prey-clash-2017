import React, { Component } from 'react';
import { View } from 'react-native';
import Clock from './Clock';
import moment from 'moment';

export default class PomodoroTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: moment(),
      offset: 20,
      countdown: true
    }
  }

  render() {
    return(
      <View>
        <Clock 
          startTime={this.state.startTime}
          countdown={this.state.countdown}
          offset={this.state.offset}/>
      </View>
    );
  }
}
