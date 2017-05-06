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
          <Image source={Images.avatar}/>
          <Text style={profileScreenStyles.name}>Samantha Beyer</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={profileScreenStyles.header}>CHALLENGES</Text>
          <Text style={profileScreenStyles.challengeButtonText}>ADD +</Text>
        </View>
        <View style={profileScreenStyles.challengeContainer}>
          <Image source={Images.trophy} style={{paddingLeft: 5}}/>
          <View style={{flexDirection: 'column'}}>
            <Text style={profileScreenStyles.challengeText}>Read 2 hours this week</Text>
            <View style={profileScreenStyles.buttonContainer}>
              <Button style={profileScreenStyles.leftButton}>.</Button>
              <Button style={profileScreenStyles.rightButton}>.</Button>
            </View>
          </View>
          <Text style={profileScreenStyles.challengeTimeCompletedText}>60 / 120 MIN</Text>
          <Text>></Text>
        </View>
        <View style={profileScreenStyles.challengeContainer}>
          <Image source={Images.trophy} style={{paddingLeft: 5}}/>
          <View style={{flexDirection: 'column'}}>
            <Text style={profileScreenStyles.challengeText}>Read 5 hours this week</Text>
            <View style={profileScreenStyles.buttonContainer}>
              <Button style={profileScreenStyles.leftButtonBigger}>.</Button>
              <Button style={profileScreenStyles.rightButtonSmaller}>.</Button>
            </View>
          </View>
          <Text style={profileScreenStyles.challengeTimeCompletedText}>300 / 360 MIN</Text>
          <Text>></Text>
        </View>
        <View>
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
