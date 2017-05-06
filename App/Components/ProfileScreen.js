import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import tabViewStyles from '../Navigation/Styles/TabViewStyles';
import tagComponentStyles from './Styles/TagComponentStyles';
import profileScreenStyles from './Styles/ProfileScreenStyles';
import Button from 'react-native-button';
import Images from '../Themes/Images';

import { gql, graphql, compose, withApollo } from 'react-apollo';
import graphQL from '../../graphqlComponents';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const myTags = this.props.data.loading 
                  ? (<Text>Loading...</Text>)
                  : this.props.data.tags.map((tag) => (
                      <Button
                        key={tag.id}
                        containerStyle={tagComponentStyles.container}
                        style={tagComponentStyles.tag}
                        >#{tag.name}</Button>
                    ))
                  ;

    const myClients = this.props.data.loading 
                  ? (<Text>Loading...</Text>)
                  : this.props.data.clients.map((client) => (
                      <Button
                        key={client.id}
                        containerStyle={tagComponentStyles.container}
                        style={tagComponentStyles.tag}
                        >{client.name}</Button>
                    ))
                  ;

    return(
      <View style={profileScreenStyles.container}>
        <View style={profileScreenStyles.nameplate}>
          <Image source={Images.avatar}/>
          <Text style={profileScreenStyles.name}>Samantha Beyer</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={profileScreenStyles.header}>CHALLENGES</Text>
          <Text style={profileScreenStyles.challengeButtonText}>ADD +</Text>
        </View>
        <View style={profileScreenStyles.challengeContainer}>
          <Image source={Images.trophy} style={{paddingLeft: 5}}/>
          <Text style={profileScreenStyles.challengeText}>Read 2 hours this week</Text>
          <Text style={profileScreenStyles.challengeTimeCompletedText}>50 / 120 MIN</Text>
        </View>
        <View style={profileScreenStyles.challengeContainer}>
          <Image source={Images.trophy} style={{paddingLeft: 5}}/>
          <Text style={profileScreenStyles.challengeText}>Read 2 hours this week</Text>
          <Text style={profileScreenStyles.challengeTimeCompletedText}>50 / 120 MIN</Text>
        </View>
        <View>
        </View>
        <Text style={profileScreenStyles.header}>TAGS</Text>
        <View style={profileScreenStyles.tags}>
          {myTags}
        </View>
        <Text style={profileScreenStyles.header}>CLIENTS</Text>
        <View style={profileScreenStyles.tags}>
          {myClients}
        </View>
      </View>
    );
  }
}

const ProfileScreenWithGraphQL = graphql(graphQL.CLIENTS_AND_TAGS)(ProfileScreen);

export default ProfileScreenWithGraphQL;
