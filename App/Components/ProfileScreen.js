import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import tabViewStyles from '../Navigation/Styles/TabViewStyles';
import tagComponentStyles from './Styles/TagComponentStyles';
import profileScreenStyles from './Styles/ProfileScreenStyles';
import Button from 'react-native-button';
import Images from '../Themes/Images';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <View style={profileScreenStyles.container}>
        <View style={profileScreenStyles.nameplate}>
          <Image source={Images.profileIcon}/>
          <Text style={profileScreenStyles.name}>Aaron Hillegass</Text>
        </View>
        <Text style={profileScreenStyles.header}>TAGS</Text>
        <View style={profileScreenStyles.tags}>
          <Button
            containerStyle={tagComponentStyles.container}
            style={tagComponentStyles.tag}
            >#reading</Button>

          <Button
            containerStyle={tagComponentStyles.container}
            style={tagComponentStyles.tag}
            >#coding</Button>
          
          <Button
            containerStyle={tagComponentStyles.container}
            style={tagComponentStyles.tag}
            >#meeting</Button>

          <Button
            containerStyle={tagComponentStyles.container}
            style={tagComponentStyles.tag}
            >#collaboration</Button>

          <Button
            containerStyle={tagComponentStyles.container}
            style={tagComponentStyles.tag}
            >#meditation</Button>
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