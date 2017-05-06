import { Platform, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    height: 48,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15
  },

  mainContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: Colors.greyish,
    borderBottomWidth: 0.5,
    marginLeft: 15
  },

  startTime: {
    alignSelf: 'center',
    fontSize: Fonts.size.tiny,
    ...Platform.select({
      ios: {
        fontFamily: Fonts.type.iosAccent
      },
      android: {
        fontFamily: Fonts.type.androidAccent
      }
    })
  },

  clientName: {
    color: Colors.warmGrey,
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

  activityName: {
    fontSize: Fonts.size.medium,
    ...Platform.select({
      ios: {
        fontFamily: Fonts.type.iosBase
      },
      android: {
        fontFamily: Fonts.type.androidBase
      }
    })
  },

  timeElapsed: {
    paddingRight: 15,
    fontSize: Fonts.size.medium,
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