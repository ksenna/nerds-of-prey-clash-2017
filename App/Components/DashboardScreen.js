import React, {Component} from 'react';
import { View, Text, ListView, AsyncStorage } from 'react-native';
import tabViewStyles from '../Navigation/Styles/TabViewStyles';
import dashboardScreenStyles from './Styles/DashboardScreenStyles';
import ActivityGraph from './ActivityGraph';
import ActivityListItem from './ActivityListItem';

import { gql, graphql, compose, withApollo } from 'react-apollo';
import graphQL from '../../graphqlComponents';


const massageData = (data) => {
  let theData = data.map((d) => ({
    startTime: new Date(parseInt(d.tsStart, 10)), 
    timeElapsed: (parseInt(d.tsEnd, 10) - parseInt(d.tsStart, 10)), 
    clientName: d.clients[0].name, 
    activityName: `#${d.tags[0].name}`, 
    billable: d.isBillable
  }));

  console.log(theData);

  return theData;
};

class DashboardScreen extends Component {
  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    this.state = {
      activityDataSource: dataSource.cloneWithRows([])
    };
  }
  
  render() {
    return(
      <View style={dashboardScreenStyles.container}>
        <ActivityGraph/> 
        <Text style={dashboardScreenStyles.recentActivityHeader}>RECENT ACTIVITY</Text>
        <ListView
          dataSource={this.state.activityDataSource}
          renderRow={this.populateActivityListItem}
          enableEmptySections={true}/>
      </View>
    );
  }

  componentWillReceiveProps({data}) {
    if (!data.loading) {
      this.setState({
        activityDataSource: this.state.activityDataSource.cloneWithRows(massageData(data.activities))
      });
    }
  }

  componentWillMount() {
    AsyncStorage.getItem("timeData").then((json) => {
      try {
        const timeData = JSON.parse(json);
        this.setState({
          allTimeData: [timeData]
        })
      } catch(e) {
        console.log("Error fetching data from AsyncStorage")
      }
    })

  }

  populateActivityListItem(rowData) {
    console.log(`AAAAA: ${rowData.timeElapsed}`)
    return <ActivityListItem 
      clientName={rowData.clientName}
      activityName={rowData.activityName}
      billable={rowData.billable}
      timeElapsed={rowData.timeElapsed}
      startTime={rowData.startTime}/>;
  }
}

const DashboardScreenwithGraphQL = graphql(graphQL.GET_ACTIVITIES)(DashboardScreen);
export default DashboardScreenwithGraphQL;