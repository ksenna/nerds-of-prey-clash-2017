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


    return(
      <View style={profileScreenStyles.container}>
        <View style={profileScreenStyles.nameplate}>
          <Image source={Images.avatar}/>
          <Text style={profileScreenStyles.name}>Samantha Beyer</Text>
        </View>
        <Text style={profileScreenStyles.header}>TAGS</Text>
        <View style={profileScreenStyles.tags}>
        
        {myTags}


        </View>
        <Text style={profileScreenStyles.header}>CLIENTS</Text>
        <View style={profileScreenStyles.tags}>
          <Button
            containerStyle={tagComponentStyles.container}
            style={tagComponentStyles.tag}
            >humrun</Button>

          <Button
            containerStyle={tagComponentStyles.container}
            style={tagComponentStyles.tag}
            >rollins</Button>
          
          <Button
            containerStyle={tagComponentStyles.container}
            style={tagComponentStyles.tag}
            >apple gsx</Button>

          <Button
            containerStyle={tagComponentStyles.container}
            style={tagComponentStyles.tag}
            >bmw</Button>

          <Button
            containerStyle={tagComponentStyles.container}
            style={tagComponentStyles.tag}
            >turner</Button>

          <Button
            containerStyle={tagComponentStyles.container}
            style={tagComponentStyles.tag}
            >ge</Button>

          <Button
            containerStyle={tagComponentStyles.container}
            style={tagComponentStyles.tag}
            >home depot</Button>

          <Button
            containerStyle={tagComponentStyles.container}
            style={tagComponentStyles.tag}
            >collosseum</Button>
          </View>
      </View>
    );
  }
}

const ProfileScreenWithGraphQL = graphql(graphQL.CLIENTS_AND_TAGS)(ProfileScreen);

export default ProfileScreenWithGraphQL;