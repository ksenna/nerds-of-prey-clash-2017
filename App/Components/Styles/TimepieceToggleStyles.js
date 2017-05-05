import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  containerSelected: {
    overflow: 'hidden',
    backgroundColor: Colors.black,
    borderRadius: 10
  },

  containerUnselected: {
    overflow: 'hidden',
    backgroundColor: Colors.white,
    borderRadius: 10
  },

  buttonSelected: {
    color: Colors.white,
  },

  buttonUnselected: {
    color: Colors.black
  }
})