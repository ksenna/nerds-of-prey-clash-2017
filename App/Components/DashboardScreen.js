import React, {Component} from 'react';
import { View, Text } from 'react-native';
import styles from '../Navigation/Styles/TabViewStyles';
import Activities from '../../graphqlComponents';

export default class DashboardScreen extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <View style={[styles.container, this.props.sceneStyle ]}>
        <Activities />
      </View>
    );
  }
}