import React from 'react';
import {PropTypes} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import { Actions } from 'react-native-router-flux';
import styles from './Styles/TabViewStyles';
import Stopwatch from '../Components/Stopwatch';
import PomodoroTImer from '../Components/PomodoroTimer';

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
      <Text>Tab {props.title}</Text>
      {props.name === 'tab1_1' &&
        <View>
          <Button onPress={Actions.tab2_1} title="next screen for pomodoro" />
          <Stopwatch/>
        </View>
      }
      {props.name === 'tab2_1' &&
        <View>
          <Button onPress={Actions.tab2_2} title="next screen for tab2_2" />
          <PomodoroTImer/>
        </View>
      }
      <Button onPress={Actions.pop} title="Back" />
      <Button onPress={Actions.tab1} title="Switch to tab1" />
      <Button onPress={Actions.tab2} title="Switch to tab2" />
    </View>
  );
};

TabView.contextTypes = contextTypes;
TabView.propTypes = propTypes;

export default TabView;
