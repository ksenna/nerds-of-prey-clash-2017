import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import NavigationRouter from './Navigation/NavigationRouter';
import { ApolloProvider } from 'react-apollo';
import client from '../createApolloClient';

export default class NerdsOfPrey extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <NavigationRouter/>
      </ApolloProvider> 
    );
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
