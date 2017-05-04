import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import { Router, Scene, TabBar } from 'react-native-router-flux';

import PageOne from '../Components/PageOne';
import PageTwo from '../Components/PageTwo';
import TabView from './TabView';

class TabIcon extends React.Component {
  render(){
    return (
      <Text style={{color: this.props.selected ? 'blue' :'black'}}>{this.props.title}</Text>
    );
  }
}

export default class NavigationRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="pageOne" component={PageOne} title="PageOne"/>
          <Scene key='tabbar' tabs={true} hideNavBar tabBarStyle={styles.tabBarStyle}>
            <Scene key="tab1" initial title="Tab #1" icon={TabIcon}>
              <Scene key="tab1_1" component={TabView} title="Tab #1_1" onRight={()=>alert("Right button")} rightTitle="Right" />
              <Scene key="tab1_2" component={TabView} title="Tab #1_2" titleStyle={{color:'black'}}/>
            </Scene>
            <Scene key="tab2" title="Tab #2" icon={TabIcon}>
              <Scene key="tab2_1" component={TabView} title="Tab #2_1" onLeft={()=>alert("Left button!")} leftTitle="Left"/>
              <Scene key="tab2_2" component={TabView} title="Tab #2_2"/>
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopWidth : .5,
    borderColor    : '#b7b7b7',
    backgroundColor: 'white',
    opacity        : 1
  }
})
