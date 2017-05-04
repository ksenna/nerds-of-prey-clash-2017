import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ClockControl extends Component {
  constructor(props) {
    super(props);
    console.log("hi");
    this.running = this.props.running;
    this.startTimer = this.props.startTimer.bind(this);
    this.stopTimer = this.props.stopTimer.bind(this);
  }
  
  render() {
    return(
      <View>
        <Text 
          onPress={this.toggleTimer}>
          {this.props.running ? 'Stop' : 'Start'}
        </Text>
      </View>
    );
  }

  toggleTimer() {
    if (this.state.running) {
      this.stopTimer;
    } else {
      this.startTimer;
    }
  }
}