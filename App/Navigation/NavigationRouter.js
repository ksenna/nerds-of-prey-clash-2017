import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import { Router, Scene, TabBar } from 'react-native-router-flux';
import styles from './Styles/NavigationRouterStyles';
import TabView from './TabView';
import RecordScreen from '../Components/RecordScreen';
import ProfileScreen from '../Components/ProfileScreen';

class TabIcon extends React.Component {
  getSelectedTab() {
    var selectedTabStyle = this.props.selected ? styles.selectedTabItem : styles.unselectedTabItem
    return selectedTabStyle
  }

  render() {
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
            <Scene key="tab1" title="DASHBOARD" icon={TabIcon}>
              <Scene key="tab1_1"
                component={TabView}
                title="Dashboard"
                titleStyle={styles.navBarTitle}
              />
            </Scene>
            <Scene key="tab2" initial title="RECORD" icon={TabIcon}>
              <Scene key="tab2_1"
                component={RecordScreen}
                title="Record"
                titleStyle={styles.navBarTitle}
                onRight={()=>alert("Left button!")}
                rightTitle="CLOSE"
                rightButtonTextStyle={styles.topActionLabel}
              />
            </Scene>
            <Scene key="tab3" title="PROFILE" icon={TabIcon}>
              <Scene key="tab3_1"
                component={ProfileScreen}
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
