import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Router, Scene, TabBar } from 'react-native-router-flux';
import styles from './Styles/NavigationRouterStyles';
import DashboardScreen from '../Components/DashboardScreen';
import RecordScreen from '../Components/RecordScreen';
import ProfileScreen from '../Components/ProfileScreen';
import Images from '../Themes/Images';

class TabIcon extends React.Component {
  getSelectedTab() {
    var selectedTabStyle = this.props.selected ? styles.selectedTabItem : styles.unselectedTabItem
    return selectedTabStyle
  }

  render() {
    return (
      <View style={styles.tabBar}>
        <Image source={this.props.imageIcon}/>
        <Text style={this.getSelectedTab()}>{this.props.title}</Text>
      </View>
    );
  }
}

export default class NavigationRouter extends Component {
  render() {
    return (
      <Router navigationBarStyle={styles.navBar}>
        <Scene key="root" hideNavBar={true}>
          <Scene key='tabbar' tabs={true} hideNavBar>
            <Scene 
              key="tabDashboard" 
              title="DASHBOARD" 
              icon={TabIcon}
              imageIcon={Images.dashboardIcon}
              component={DashboardScreen}
              title="Dashboard"
              titleStyle={styles.navBarTitle}/>

            <Scene 
              key="tabRecord" 
              initial 
              title="RECORD" 
              icon={TabIcon}
              imageIcon={Images.recordIcon}
              component={RecordScreen}
              title="Record"
              titleStyle={styles.navBarTitle}
              onRight={()=>alert("Left button!")}
              rightTitle="CLOSE"
              rightButtonTextStyle={styles.topActionLabel}/>
            
            <Scene 
              key="tabProfile"
              title="PROFILE" 
              icon={TabIcon}
              imageIcon={Images.profileIcon}              
              component={ProfileScreen}
              title="Profile"
              titleStyle={styles.navBarTitle}/>
          </Scene>
        </Scene>
      </Router>
    );
  }
}
