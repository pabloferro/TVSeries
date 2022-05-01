import {StyleSheet} from 'react-native';
import {brandPrimary, white} from '../../../constants/colors';

export default StyleSheet.create({
  cellStyle: {
    borderBottomWidth: 2,
    borderColor: white,
  },
  cellStyleFocused: {
    borderColor: brandPrimary,
  },
  textStyle: {
    color: white,
    fontSize: 20,
  },
});
