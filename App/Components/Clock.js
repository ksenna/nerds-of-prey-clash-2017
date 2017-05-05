import React, { Component } from 'react';
import { Platform, TextInput, View } from 'react-native';
import ClockControl from './ClockControl';
import Timer from './Timer';
import moment from 'moment';
import TagInput from './TagInput'
import styles from './Styles/ClockStyles'
import { Colors } from '../Themes/'

const timer = require('react-native-timer');

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: moment().add(props.offset, 'minutes'),
      timeElapsed: this.roundToNextMinute(moment(moment().add(this.props.offset, 'minutes').diff(moment()))),
      running: false,
      clientName: ''
    }

    this.onTimerStarted = this.onTimerStarted.bind(this);
    this.onTimerStopped = this.onTimerStopped.bind(this);
    this.onTimerToggled = this.onTimerToggled.bind(this);
  }

  render() {
    return(
      <View>
        <Timer timeElapsed={this.state.timeElapsed}/>
        <TagInput />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(clientName) => this.setState({clientName})}
            placeholderTextColor={Colors.black}
            placeholder="CLIENT"
            value={this.state.clientName}
          />
        </View>
        <ClockControl
          running={this.state.running}
          toggleTimer={this.onTimerToggled}/>
      </View>
    );
  }

  componentWillUnmount() {
    timer.clearInterval(this);
  }

  roundToNextMinute(moment) {
    return moment.add(1, 'seconds').startOf('minute')
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
    let initial;

    this.setState({
      startTime: moment().add(this.props.offset, 'minutes')
    });

    timer.setInterval('tick', () => {
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
    timer.clearInterval('tick');
    this.setState({
      startTime: moment().add(this.props.offset, 'minutes'),
      timeElapsed: moment(moment().add(this.props.offset, 'minutes').diff(moment())),
      running: false
    });
  }
}
