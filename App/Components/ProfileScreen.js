import React, {Component} from 'react';
import { View, Text } from 'react-native';
import styles from '../Navigation/Styles/TabViewStyles';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <View style={[styles.container, this.props.sceneStyle ]}>
        <Text>TODO</Text>
      </View>
    );
  }
}