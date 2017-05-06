import { Platform, StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },

  clockSeparator: {
    fontSize: Fonts.size.large,
    ...Platform.select({
      ios: {
        fontFamily: Fonts.type.iosAccent
      },
      android: {
        fontFamily: Fonts.type.androidAccent
      }
    }),
    paddingBottom: 10
  },

  clockText: {
    fontSize: Fonts.size.large,
    ...Platform.select({
      ios: {
        fontFamily: Fonts.type.iosAccent
      },
      android: {
        fontFamily: Fonts.type.androidAccent
      }
    })
  },

  label: {
    color: Colors.warmGrey,
    fontSize: Fonts.size.small
  },

  timeContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },

  arrowUp: {
    marginTop: 16
  },

  arrowDown: {
    marginBottom: 16
  }
})
