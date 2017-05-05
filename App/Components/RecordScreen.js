import React, {Component} from 'react';
import { View, Button } from 'react-native';
import styles from '../Navigation/Styles/TabViewStyles';
import Stopwatch from './Stopwatch';
import PomodoroTimer from './PomodoroTimer';

class TimepieceToggle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <Button title="Stopwatch" onPress={this.props.onStopwatchSelected}/>
        <Button title="Timer" onPress={this.props.onPomodoroTimerSelected}/>
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
      <View style={[styles.container, this.props.sceneStyle ]}>
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