import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import { Router, Scene, TabBar } from 'react-native-router-flux';
import styles from './Styles/NavigationRouterStyles';
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
          <Scene key='tabbar' tabs={true} hideNavBar>
            <Scene key="tab1" title="STOPWATCH" icon={TabIcon}>
              <Scene key="tab1_1"
                component={TabView}
                title="Stopwatch"
                titleStyle={styles.navBarTitle}
                navigationBarStyle={styles.navBar}
                onRight={()=>alert("Right button")}
                rightTitle="CLOSE"
                rightButtonTextStyle={styles.topActionLabel}
              />
            </Scene>
            <Scene key="tab2" initial title="TIMER" icon={TabIcon}>
              <Scene key="tab2_1"
                component={TabView}
                title="Pomodoro Timer"
                titleStyle={styles.navBarTitle}
                onRight={()=>alert("Left button!")}
                rightTitle="CLOSE"
                rightButtonTextStyle={styles.topActionLabel}
              />
            </Scene>
            <Scene key="tab3" title="PROFILE" icon={TabIcon}>
              <Scene key="tab3_1"
                component={TabView}
                title="Profile"
                titleStyle={styles.navBarTitle}
              />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}
