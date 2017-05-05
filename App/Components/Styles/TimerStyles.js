import { Platform, StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  clockText: {
    fontSize: Fonts.size.large,
    ...Platform.select({
      ios: {
        fontFamily: Fonts.type.iosAccent
      },
      android: {
        fontFamily: Fonts.type.androidAccent
      }
    }),
  }
})
