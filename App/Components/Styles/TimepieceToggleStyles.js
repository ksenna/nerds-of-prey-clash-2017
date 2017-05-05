import { Platform, StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },

  containerSelected: {
    overflow: 'hidden',
    backgroundColor: Colors.black,
    borderRadius: 20,
    padding: 7,
    paddingHorizontal: 15
  },

  containerUnselected: {
    overflow: 'hidden',
    backgroundColor: Colors.white,
    padding: 7,
    paddingHorizontal: 15
  },

  buttonSelected: {
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
  },

  buttonUnselected: {
    color: Colors.black,
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