import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Autocomplete from './Autocomplete'

const defaultTags = [
  { title: "reading" },
  { title: "coding" },
  { title: "designing" },
  { title: "meetings" },
  { title: "pairing" }
]

export default class iosTagInput extends Component {
  static renderTag(tag) {
    const { title } = tag;

    return (
      <View>
        <Text style={styles.titleText}>{title}</Text>
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
          renderItem={({ title, release_date }) => (
            <TouchableOpacity onPress={() => this.setState({ query: title })}>
              <Text style={styles.itemText}>
                {title}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.descriptionContainer}>
          {tags.length > 0 ? (
            iosTagInput.renderTag(tags[0])
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
    flex: 1,
    paddingTop: 25
  },
  
  autocompleteContainer: {
    marginLeft: 10,
    marginRight: 10
  },

  // Dropdown text suggestions
  itemText: {
    fontSize: 15,
    margin: 2,
    marginLeft: 10
  },

  descriptionContainer: {
    paddingTop: 20
  },

  infoText: {
    textAlign: 'center'
  },

  titleText: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center'
  }
});
