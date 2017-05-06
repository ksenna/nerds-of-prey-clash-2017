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
                        containerStyle={tagComponentStyles.container}
                        style={tagComponentStyles.tag}
                        >#{tag.name}</Button>
                    ))
                  ;

    const myClients = this.props.data.loading 
                  ? (<Text>Loading...</Text>)
                  : this.props.data.clients.map((client) => (
                      <Button
                        containerStyle={tagComponentStyles.container}
                        style={tagComponentStyles.tag}
                        >{client.name}</Button>
                    ))
                  ;

    return(
      <View style={profileScreenStyles.container}>
        <View style={profileScreenStyles.nameplate}>
          <Image source={Images.profileIcon}/>
          <Text style={profileScreenStyles.name}>Aaron Hillegass</Text>
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