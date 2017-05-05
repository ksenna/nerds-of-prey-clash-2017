import { Platform, StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    paddingTop: 25
  },
  
  // Styles the tag text input
  autocompleteContainer: {
    // borderBottomColor: Colors.greyish,
    // borderBottomWidth: 0.5
    ...Platform.select({
      ios: {
        borderBottomColor: Colors.greyish,
        borderBottomWidth: 0.5
      },
      android: {
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1
      }
    })
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
    // paddingTop: 20
    ...Platform.select({
      ios: {
        paddingTop: 20
      },
      android: {
        // paddingTop: 30,
        marginTop: 30
      }
    })
  },

  infoText: {
    textAlign: 'center'
  },

  // Increasing marginBottom might push lower components down and help display more text suggestions
  titleText: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
    color: Colors.greyish
  }
})
