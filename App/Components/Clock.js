import React, { Component } from 'react';
import { AsyncStorage, Platform, Switch, Text, TextInput, View } from 'react-native';
import ClockControl from './ClockControl';
import Timer from './Timer';
import moment from 'moment';
import TagInput from './TagInput'
import styles from './Styles/ClockStyles'
import { Colors } from '../Themes/'
import { Actions } from 'react-native-router-flux';


const timer = require('react-native-timer');

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: moment().add(props.offset, 'seconds'),
      timeElapsed: moment(moment().add(this.props.offset, 'seconds').diff(moment())),
      running: false,
      clientName: '',
      billable: false,
      allTimeData: []
    }

    this.onTimerStarted = this.onTimerStarted.bind(this);
    this.onTimerStopped = this.onTimerStopped.bind(this);
    this.onTimerToggled = this.onTimerToggled.bind(this);
  }

  componentWillMount() {
    AsyncStorage.getItem("timeData").then((json) => {
      try {
        const timeData = JSON.parse(json);
        this.setState({
          allTimeData: [timeData]
        })
      } catch(e) {
        console.log("Error fetching data from AsyncStorage")
      }
    })
  }

  render() {
    return(
      <View>
        <Timer timeElapsed={this.state.timeElapsed} countdown={this.props.countdown} running={this.state.running}/>
        <TagInput />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(clientName) => this.setState({clientName})}
            placeholderTextColor={Colors.black}
            placeholder="CLIENT"
            underlineColorAndroid='transparent'
            value={this.state.clientName}
          />
        </View>
        <View style={styles.billableContainer}>
          <Text style={styles.billableLabel}>BILLABLE</Text>
          <Switch
            onValueChange={(value) => this.setState({billable: value})}
            value={this.state.billable}
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
      startTime: moment().add(this.props.offset, 'seconds')
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
      startTime: moment().add(this.props.offset, 'seconds'),
      timeElapsed: moment(moment().add(this.props.offset, 'seconds').diff(moment())),
      running: false
    });
    AsyncStorage.setItem("timeData", JSON.stringify(this.state))

    Actions.saveConfirmationScreen(this.state)
  }
}
