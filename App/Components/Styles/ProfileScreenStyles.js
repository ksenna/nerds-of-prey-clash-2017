import { Platform, StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignContent: 'flex-start',
    ...Platform.select({
      ios: {
        marginTop: 62
      },
      android: {
        marginTop: 50
      }
    }) 
  },

  nameplate: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    marginBottom: 24
  },

  name: {
    marginLeft: 15,
    fontSize: Fonts.size.regular,
    ...Platform.select({
      ios: {
        fontFamily: Fonts.type.iosBase
      },
      android: {
        fontFamily: Fonts.type.androidBase
      }
    })
  },

  header: {
    marginLeft: 12,
    fontSize: Fonts.size.small,
    ...Platform.select({
      ios: {
        fontFamily: Fonts.type.iosBase
      },
      android: {
        fontFamily: Fonts.type.androidBase
      }
    })
  },

  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 6,
    marginBottom: 24
  }
})