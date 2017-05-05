import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ActivityListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <Text>{this.props.clientName}</Text>
      </View>
    );
  }
}