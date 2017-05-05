import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Colors, Fonts } from '../Themes/'

import Autocomplete from './Autocomplete'

const defaultTags = [
  { title: "reading" },
  { title: "coding" },
  { title: "designing" },
  { title: "meetings" },
  { title: "pairing" }
]

export default class AndroidTagInput extends Component {
  // renderTag displays the chosen tag below the text input field
  static renderTag(tag) {
    const { title } = tag;

    return (
      <View>
        <Text style={styles.titletext}>{title}</Text>
      </View>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      suggestedTags: [],
      // userText: ''
      query: ''
    }
  }

  componentDidMount() {
    this.setState({
      suggestedTags: defaultTags
    })
  }

  findTag(query) {
    if (query === '') {
      return [];
    }

    const { suggestedTags } = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return suggestedTags.filter(suggestedTag => suggestedTag.title.search(regex) >= 0);
  }

  render() {
    const { query } = this.state;
    const tags = this.findTag(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    return (
      <View style={styles.container}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          data={tags.length === 1 && comp(query, tags[0].title) ? [] : tags}
          defaultValue={query}
          onChangeText={text => this.setState({ query: text })}
          placeholder="Tag for your time"
          renderItem={({ title }) => (
            <TouchableOpacity style={styles.matchingTagList} onPress={() => this.setState({ query: title })}>
              <Text style={styles.itemText}>
                {title}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.descriptionContainer}>
          {tags.length > 0 ? (
            AndroidTagInput.renderTag(tags[0])
          ) : (
            <Text style={styles.infoText}>
              Enter A Tag For Your Time
            </Text>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25
  },
  
  // Styles the tag text input
  autocompleteContainer: {
    // borderBottomColor: Colors.greyish,
    // borderBottomColor: Colors.white,
    // borderBottomWidth: 5,
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  },

  // Styles individual matching tags in the dropdown list
  matchingTagList: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.greyish,
    paddingTop: 4,
    paddingBottom: 4
  },

  // Styles the text in the dropdown tag suggestions
  itemText: {
    fontSize: 12,
    margin: 2,
    marginLeft: 10,
    color: Colors.black,
    ...Platform.select({
      ios: {
        fontFamily: Fonts.type.iosBase
      },
      android: {
        fontFamily: Fonts.type.androidBase
      }
    })
  },

  descriptionContainer: {
    paddingTop: 20
  },

  infoText: {
    textAlign: 'center',
    // borderTopWidth: 5,
    // borderTopColor: 'red'
  },

  // Increasing marginBottom might push lower components down and help display more text suggestions
  titleText: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
    color: Colors.black
  }
});