import { Platform, StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignContent: 'flex-start',
    ...Platform.select({
      ios: {
        marginTop: 66
      },
      android: {
        marginTop: 54
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

  challengeButtonText: {
    color: Colors.green,
    paddingRight: 15
  },

  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 6,
    marginBottom: 24
  },

  challengeContainer: {
    height: 48,
    flexDirection: 'row',
    marginLeft: 15,
    paddingTop: 15,
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomColor: Colors.greyish,
    borderBottomWidth: 0.5,
    justifyContent: 'space-around'
  },

  challengeText: {
    fontSize: Fonts.size.small,
    paddingLeft: 25,
    ...Platform.select({
      ios: {
        fontFamily: Fonts.type.iosBase
      },
      android: {
        fontFamily: Fonts.type.androidBase
      }
    })
  },

  challengeTimeCompletedText: {
    fontSize: Fonts.size.small,
    color: Colors.black,
    paddingLeft: 25,
    ...Platform.select({
      ios: {
        fontFamily: Fonts.type.iosAccent
      },
      android: {
        fontFamily: Fonts.type.androidAccent
      }
    })
  },

  buttonContainer: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingLeft: 25
  },

  leftButton: {
    backgroundColor: '#1d57ff',
    height: 2,
    width: 55
  },

  rightButton: {
    backgroundColor: Colors.warmGrey,
    height: 2,
    width: 70
  },

  leftButtonBigger: {
    backgroundColor: '#1d57ff',
    height: 2,
    width: 95
  },

  rightButtonSmaller: {
    backgroundColor: Colors.warmGrey,
    height: 2,
    width: 30
  }
})
