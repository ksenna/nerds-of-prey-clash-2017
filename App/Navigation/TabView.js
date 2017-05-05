import React from 'react';
import {PropTypes} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import { Actions } from 'react-native-router-flux';
import styles from './Styles/TabViewStyles';
import Stopwatch from '../Components/Stopwatch';
import PomodoroTimer from '../Components/PomodoroTimer';
import RecordScreen from '../Components/RecordScreen';

const contextTypes = {
  drawer: React.PropTypes.object,
};

const propTypes = {
  name: PropTypes.string,
  sceneStyle: View.propTypes.style,
  title: PropTypes.string,
};

const TabView = (props, context) => {
  const drawer = context.drawer;
  return (
    <View style={[styles.container, props.sceneStyle ]}>
      {props.name === 'tab1_1' &&
        <Stopwatch/>
      }
      {props.name === 'tab2_1' &&
        <RecordScreen/>
      }
    </View>
  );
};

TabView.contextTypes = contextTypes;
TabView.propTypes = propTypes;

export default TabView;
