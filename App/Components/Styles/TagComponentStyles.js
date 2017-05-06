import { Platform, StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
    backgroundColor: Colors.green,
    borderRadius: 3,
    paddingHorizontal: 18,
    paddingVertical: 6
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