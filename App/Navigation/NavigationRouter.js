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
import SaveConfirmationScreen from '../Components/SaveConfirmationScreen';
import ProfileScreen from '../Components/ProfileScreen';
import Images from '../Themes/Images';
import { Actions } from 'react-native-router-flux';

class TabIcon extends React.Component {
  render() {
    return (
      <View style={styles.tabBar}>
        <Image source={this.props.selected ? this.props.imageIconActivated : this.props.imageIcon}/>
        <Text style={this.getSelectedTab()}>{this.props.title}</Text>
      </View>
    );
  }

  getSelectedTab() {
    var selectedTabStyle = this.props.selected ? styles.selectedTabItem : styles.unselectedTabItem
    return selectedTabStyle
  }
}

export default class NavigationRouter extends Component {
  render() {
    return (
      <Router navigationBarStyle={styles.navBar}>
        <Scene key="root" hideNavBar={true}>
          <Scene key='tabbar' tabs={true} hideNavBar tabBarStyle={styles.tabBarBackground}>
            <Scene 
              key="tabDashboard" 
              title="DASHBOARD"
              icon={TabIcon}
              imageIcon={Images.dashboardIcon}
              imageIconActivated={Images.dashboardIconActive}
              component={DashboardScreen}
              title="Dashboard"
              titleStyle={styles.navBarTitle}/>

            <Scene 
              key="tabRecord" 
              initial 
              title="RECORD" 
              icon={TabIcon}
              imageIcon={Images.recordIcon}
              imageIconActivated={Images.recordIconActive}
              component={RecordScreen}
              title="Record"
              titleStyle={styles.navBarTitle}/>
            <Scene 
              key="tabProfile"
              title="PROFILE" 
              icon={TabIcon}
              imageIcon={Images.profileIcon}
              imageIconActivated={Images.profileIconActive}
              component={ProfileScreen}
              title="Profile"
              titleStyle={styles.navBarTitle}/>
          </Scene>
          <Scene key="saveConfirmationScreen"
            component={SaveConfirmationScreen}
            title="Save"
            titleStyle={styles.navBarTitle}
            hideNavBar={false}
            hideBackImage={true}
            onLeft={()=>alert("Left button!")}
            leftTitle="Resume"
            leftButtonTextStyle={styles.topActionLabel}
            onRight={() => Actions.pop()}
            rightTitle="Save"
            rightButtonTextStyle={styles.topActionLabel}/>
        </Scene>
      </Router>
    );
  }
}
