import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import { Router, Scene, TabBar } from 'react-native-router-flux';
import styles from './Styles/NavigationRouterStyles';

import PageOne from '../Components/PageOne';
import TabView from './TabView';

class TabIcon extends React.Component {
  getSelectedTab() {
    var selectedTabStyle = this.props.selected ? styles.selectedTabItem : styles.unselectedTabItem
    return selectedTabStyle
  }

  render(){
    return (
      <Text style={this.getSelectedTab()}>{this.props.title}</Text>
    );
  }
}

export default class NavigationRouter extends Component {
  render() {
    return (
      <Router navigationBarStyle={styles.navBar}>
        <Scene key="root" hideNavBar={true}>
          <Scene key="pageOne"
            component={PageOne}
            title="PageOne"
          />
          <Scene key='tabbar' tabs={true} hideNavBar>
            <Scene key="tab1" initial title="STOPWATCH" icon={TabIcon}>
              <Scene key="tab1_1"
                component={TabView}
                title="Stopwatch"
                titleStyle={styles.navBarTitle}
                navigationBarStyle={styles.navBar}
                onRight={()=>alert("Right button")}
                rightTitle="CLOSE"
                rightButtonTextStyle={styles.topActionLabel}
              />
              <Scene key="tab1_2"
                component={TabView}
                title="Tab #1_2"
                titleStyle={styles.navBarTitle}
              />
            </Scene>
            <Scene key="tab2" title="TIMER" icon={TabIcon}>
              <Scene key="tab2_1"
                component={TabView}
                title="Pomodoro Timer"
                titleStyle={styles.navBarTitle}
                onRight={()=>alert("Left button!")}
                rightTitle="CLOSE"
                rightButtonTextStyle={styles.topActionLabel}
              />
              <Scene key="tab2_2" 
                component={TabView}
                title="Tab #2_2"
              />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}
