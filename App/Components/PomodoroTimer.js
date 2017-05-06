import React, { Component } from 'react';
import { View } from 'react-native';
import Clock from './Clock';
import moment from 'moment';

export default class PomodoroTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 1200,
      countdown: true
    }
    this.onCountdownOffsetChange = this.onCountdownOffsetChange.bind(this);
  }

  onCountdownOffsetChange(offsetChange) {
    var offsetUpdate = {
      'increaseMinute': () => this.state.offset + 60,
      'decreaseMinute': () => this.state.offset - 60,
      'increaseSecond': () => this.state.offset + 1,
      'decreaseSecond': () => this.state.offset - 1,
      'resetToDefault': () => 1200,
    }

    this.setState({
      offset: offsetUpdate[offsetChange]()
    })
  }


  render() {
    return(
      <View>
        <Clock offset={this.state.offset} countdown={this.state.countdown} updateCountdownTime={this.onCountdownOffsetChange}/>
      </View>
    );
  }
}
