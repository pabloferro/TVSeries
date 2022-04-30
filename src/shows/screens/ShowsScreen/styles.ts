import {StyleSheet} from 'react-native';

import {background} from '../../../constants/colors';

export default StyleSheet.create({
  title: {
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: background,
    paddingHorizontal: 16,
  },
  nextPageLoader: {
    paddingBottom: 20,
  },
});
