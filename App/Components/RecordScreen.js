import React, {Component} from 'react';
import { View, Button } from 'react-native';
import styles from '../Navigation/Styles/TabViewStyles';
import Stopwatch from './Stopwatch';
import PomodoroTimer from './PomodoroTimer';

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
        <Button title="Stopwatch" onPress={() => this.setTimepiece(true)}/>
        <Button title="Timer" onPress={() => this.setTimepiece(false)}/>
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