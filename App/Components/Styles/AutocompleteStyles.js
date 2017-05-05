import { Platform, StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes/'

const border = {
  borderBottomColor: Colors.greyish,
  borderBottomWidth: 0.5
};

export default StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        zIndex: 1
      },
      android: {
        flex: 1
      }
    })
  },

  input: {
    backgroundColor: 'white',
    paddingLeft: 3,
    fontSize: Fonts.size.small,
    color: Colors.black,
    ...Platform.select({
      ios: {
        height: 25,
      },
      android: {
        height: 40
      }
    })
  },
  
  inputContainer: {
    ...border,
  },

  // List of suggested tags
  list: {
    ...border,
    backgroundColor: 'white',
    borderTopWidth: 0,
    ...Platform.select({
      ios: {
        left: 0,
        position: 'absolute',
        right: 0
      },
      android: {
        margin: 10,
        marginTop: 0
      }
    })
  }
})
