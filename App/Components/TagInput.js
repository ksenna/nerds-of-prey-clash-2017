import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Colors } from '../Themes/'
import styles from './Styles/TagInputStyles';

import Autocomplete from './Autocomplete'

const defaultTags = [
  { title: "reading" },
  { title: "coding" },
  { title: "designing" },
  { title: "meetings" },
  { title: "pairing" }
]

export default class TagInput extends Component {
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
          placeholderTextColor={Colors.black}
          placeholder="#ACTIVITY"
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
            TagInput.renderTag(tags[0])
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
