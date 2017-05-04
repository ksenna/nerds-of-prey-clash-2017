import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import NavigationRouter from './Navigation/NavigationRouter';

export default class NerdsOfPrey extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<NavigationRouter/>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  }
});
