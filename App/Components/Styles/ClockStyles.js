import { Platform, StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  input: {
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
    borderBottomColor: Colors.greyish,
    borderBottomWidth: 0.5
  },

  billableContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomColor: Colors.greyish,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  billableLabel: {
    paddingLeft: 3,
    fontSize: Fonts.size.small,
    color: Colors.black
  }
})
