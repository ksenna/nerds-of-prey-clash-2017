import React, {Component} from 'react';
import { View, Text, ListView } from 'react-native';
import styles from '../Navigation/Styles/TabViewStyles';
import ActivityListItem from './ActivityListItem';

export default class DashboardScreen extends Component {
  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    this.state = {
      activityDataSource: dataSource.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  
  render() {
    return(
      <View style={[styles.container, this.props.sceneStyle ]}>
        <Text>Recent Activity</Text>
        
        <ListView
          dataSource={this.state.activityDataSource}
          renderRow={(rowData) => <ActivityListItem rowData={rowData}/>}/>
      </View>
    );
  }
}