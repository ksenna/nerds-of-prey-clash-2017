'use strict';

import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class ClockControl extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <Button 
          onPress={this.props.toggleTimer}
          title={this.props.running ? 'Stop' : 'Start'}/>
      </View>
    );
  }  
}