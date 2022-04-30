import {StyleSheet, TextStyle} from 'react-native';
import {secondary} from '../../constants/colors';
import {TextVariants} from './TextVariants';

const baseStyle: TextStyle = {
  color: 'white',
};

export default StyleSheet.create<{
  [key in TextVariants]: TextStyle;
}>({
  default: {
    ...baseStyle,
  },
  h1: {
    ...baseStyle,
    fontSize: 24,
    fontWeight: '700',
  },
  h2: {
    ...baseStyle,
    fontSize: 18,
    fontWeight: '500',
  },
  body: {
    ...baseStyle,
    fontSize: 16,
    fontWeight: '400',
  },
  secondary: {
    ...baseStyle,
    color: secondary,
    fontSize: 16,
    fontWeight: '500',
  },
});
