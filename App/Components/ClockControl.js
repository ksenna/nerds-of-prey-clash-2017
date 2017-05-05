import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Images from '../Themes/Images'
import styles from './Styles/ClockControlStyles.js';

export default class ClockControl extends Component {
  constructor(props) {
    super(props);
  }

  getImage() {
    var buttonImage = this.props.running ? Images.stopButton : Images.startButton
    return buttonImage
  }

  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.props.toggleTimer}>
          <Image source={this.getImage()} />
        </TouchableOpacity>
      </View>
    );
  }  
}
