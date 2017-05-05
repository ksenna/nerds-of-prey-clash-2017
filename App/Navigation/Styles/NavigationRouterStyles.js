// Use this for styling the top nav bar

import { Platform, StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  navBar: {
    backgroundColor: Colors.white,
    borderBottomColor: Colors.white
  },

  navBarTitle: {
    color: Colors.black,
    ...Fonts.style.navigationTitle,
    ...Platform.select({
      ios: {
        fontFamily: Fonts.type.iosBase
      },
      android: {
        fontFamily: Fonts.type.androidBase
      }
    }),
  },

  selectedTabItem: {
    color: Colors.green
  },

  unselectedTabItem: {
    color: Colors.black
  },

  topActionLabel: {
    color: Colors.black,
    fontSize: Fonts.size.medium,
    ...Platform.select({
      ios: {
        fontFamily: Fonts.type.iosBase
      },
      android: {
        fontFamily: Fonts.type.androidBase
      }
    }),
  },

  tabBar: {
    paddingBottom: 11,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
