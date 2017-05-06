import React, {Component} from 'react';
import { View, Text, ListView } from 'react-native';
import tabViewStyles from '../Navigation/Styles/TabViewStyles';
import dashboardScreenStyles from './Styles/DashboardScreenStyles';
import ActivityGraph from './ActivityGraph';
import ActivityListItem from './ActivityListItem';

export default class DashboardScreen extends Component {
  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    this.state = {
      activityDataSource: dataSource.cloneWithRows([
        {startTime: "2017-05-05T20:08:46.497Z", timeElapsed: "1970-01-01T00:00:01.017Z", running: true, clientName: "#coding", billable: true}, 
        {startTime: "2017-05-05T20:08:46.497Z", timeElapsed: "1970-01-01T00:00:01.017Z", running: true, clientName: "#reading", billable: false}, 
        {startTime: "2017-05-05T20:08:46.497Z", timeElapsed: "1970-01-01T00:00:01.017Z", running: true, clientName: "#designing", billable: true}, 
        {startTime: "2017-05-05T20:08:46.497Z", timeElapsed: "1970-01-01T00:00:01.017Z", running: true, clientName: "#coding", billable: false}, 
        {startTime: "2017-05-05T20:08:46.497Z", timeElapsed: "1970-01-01T00:00:01.017Z", running: true, clientName: "#reading", billable: false}, 
        {startTime: "2017-05-05T20:08:46.497Z", timeElapsed: "1970-01-01T00:00:01.017Z", running: true, clientName: "#designing", billable: false}
      ])
    };
  } // TODO: Replace with real data
  
  render() {
    return(
      <View>
        <ActivityGraph/>
        <Text style={dashboardScreenStyles.recentActivityHeader}>RECENT ACTIVITY</Text>
        <ListView
          dataSource={this.state.activityDataSource}
          renderRow={this.populateActivityListItem}/>
      </View>
    );
  }

  populateActivityListItem(rowData) {
    return <ActivityListItem 
      clientName={rowData.clientName}
      timeElapsed={rowData.timeElapsed}
      startTime={rowData.startTime}/>;
  }
}