import React, {Component} from 'react';
import { View, Text } from 'react-native';
import tabViewStyles from '../Navigation/Styles/TabViewStyles';
import tagComponentStyles from './Styles/TagComponentStyles';
import Button from 'react-native-button';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <View style={[tabViewStyles.container, this.props.sceneStyle ]}>
        <Text>TAGS</Text>
        <Button
          containerStyle={tagComponentStyles.container}
          style={tagComponentStyles.tag}
          >#reading</Button>
        <Text>CLIENTS</Text>
      </View>
    );
  }
}