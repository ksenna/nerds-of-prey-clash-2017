import { Platform, StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    alignSelf: 'center',
    overflow: 'hidden',
    backgroundColor: Colors.green,
    borderRadius: 3,
    paddingHorizontal: 12,
    padding: 6,
    margin: 6
  },

  tag: {
    color: Colors.white,
    fontSize: Fonts.size.small,
    ...Platform.select({
      ios: {
        fontFamily: Fonts.type.iosBase
      },
      android: {
        fontFamily: Fonts.type.androidBase
      }
    })
  }
})