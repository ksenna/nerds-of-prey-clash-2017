import React, { Component } from 'react';
import { View } from 'react-native';
import Clock from './Clock';
import moment from 'moment';

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      countdown: false
    }
  }

  render() {
    return(
      <View>
        <Clock offset={this.state.offset} countdown={this.state.countdown}/>
      </View>
    );
  }
}
