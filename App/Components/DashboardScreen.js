import React, {Component} from 'react';
import { View, Text } from 'react-native';
import styles from '../Navigation/Styles/TabViewStyles';
import graphql from '../../graphqlComponents';

// ok, so...why can't i destructure?
const Comp = graphql.TestCompAddingActivity;

export default class DashboardScreen extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <View style={[styles.container, this.props.sceneStyle ]}>
        <Comp />
      </View>
    );
  }
}