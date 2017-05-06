import { Platform, StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
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

  input: {
    paddingLeft: 3,
    fontSize: Fonts.size.small,
    color: Colors.black,
    ...Platform.select({
      ios: {
        height: 25,
        width: 175
      },
      android: {
        height: 25,
        width: 150
      }
    })
  },

  label: {
    color: Colors.warmGrey,
    fontSize: Fonts.size.small
  },

  timeDisplayContainer: {
    flexDirection: 'row',
    paddingBottom: 30
  },

  timeDisplayLabel: {
    fontSize: Fonts.size.regular,
    color: Colors.black,
    ...Platform.select({
      ios: {
        fontFamily: Fonts.type.iosAccent
      },
      android: {
        fontFamily: Fonts.type.androidAccent
      }
    })
  },

  timeContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },

  inputContainer: {
    borderBottomColor: Colors.greyish,
    borderBottomWidth: 0.5,
    ...Platform.select({
      ios: {
        marginBottom: 15
      },
      android: {
        marginTop: 10
      }
    })

  },

  billableContainer: {
    flexDirection: 'row',
    borderBottomColor: Colors.greyish,
    borderBottomWidth: 0.5,
    ...Platform.select({
      ios: {
      },
      android: {
        marginTop: 5,
      }
    })
  },

  billableLabel: {
    paddingLeft: 3,
    fontSize: Fonts.size.small,
    color: Colors.black,
    ...Platform.select({
      ios: {
        height: 25,
        width: 125
      },
      android: {
        height: 40,
        width: 100,
        paddingTop: 10,
      }
    })
  },

  switchStyle: {
    ...Platform.select({
      ios: {
        marginTop: -10
      },
      android: {

      }
    }),
  }
})
