import { Platform, StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flexDirection: 'column-reverse',
    alignContent: 'flex-end',
    backgroundColor: Colors.charcoal,
    ...Platform.select({
      ios: {
        marginTop: 62
      },
      android: {
        marginTop: 50
      }
    })    
  },

  metadataContainer: {
    flexDirection: 'row',
    alignContent: 'space-between'
  },
  
  totalFocusTimeContainer: {
    marginLeft: 12,
    marginVertical: 8
  },

  totalFocusTimeHeader: {
    color: Colors.warmGrey,
    fontSize: Fonts.size.tiny,
    ...Platform.select({
      ios: {
        fontFamily: Fonts.type.iosBase
      },
      android: {
        fontFamily: Fonts.type.iosAccent
      }
    })
  },

  totalFocusTime: {
    color: Colors.white,
    fontSize: 22,
    ...Platform.select({
      ios: {
        fontFamily: Fonts.type.iosBase
      },
      android: {
        fontFamily: Fonts.type.androidBase
      }
    })
  },

  detailsContainer: {
    overflow: 'hidden',
    backgroundColor: Colors.charcoal,
    borderRadius: 20,
    padding: 6,
    paddingHorizontal: 18,
    marginLeft: 200
  },

  detailsButton: {
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
  }
})