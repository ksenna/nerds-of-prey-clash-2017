import React, {Component} from 'react';
import { View } from 'react-native';
import Button from 'react-native-button';
import tabViewStyles from '../Navigation/Styles/TabViewStyles';
import timepieceToggleStyles from './Styles/TimepieceToggleStyles';
import Stopwatch from './Stopwatch';
import PomodoroTimer from './PomodoroTimer';
import { Colors } from '../Themes/';

class TimepieceToggle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={timepieceToggleStyles.container}>
        <Button 
          onPress={this.props.onStopwatchSelected} 
          containerStyle={this.props.stopwatch ? timepieceToggleStyles.containerSelected : timepieceToggleStyles.containerUnselected}
          style={this.props.stopwatch ? timepieceToggleStyles.buttonSelected : timepieceToggleStyles.buttonUnselected}
          >STOPWATCH</Button>

        <Button 
          onPress={this.props.onPomodoroTimerSelected} 
          containerStyle={this.props.stopwatch ? timepieceToggleStyles.containerUnselected : timepieceToggleStyles.containerSelected}
          style={this.props.stopwatch ? timepieceToggleStyles.buttonUnselected : timepieceToggleStyles.buttonSelected}
          >TIMER</Button>
      </View>
    );
  }
}

export default class RecordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopwatch: true
    }
  }

  render() {
    let timepiece = this.state.stopwatch ? <Stopwatch/> : <PomodoroTimer/>;

    return(
      <View style={[tabViewStyles.container, this.props.sceneStyle ]}>
        <TimepieceToggle 
          stopwatch={this.state.stopwatch} 
          onStopwatchSelected={() => this.setTimepiece(true)} 
          onPomodoroTimerSelected={() => this.setTimepiece(false)}/>
          
        {timepiece}
      </View>
    );
  }

  setTimepiece(stopwatch) {
    this.setState({
      stopwatch: stopwatch
    });
  }
}