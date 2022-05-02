import {StyleSheet} from 'react-native';

import {backgroundLight} from '../../../constants/colors';

export default StyleSheet.create({
  loaderContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    marginBottom: 5,
  },
  loaderPoster: {
    backgroundColor: backgroundLight,
    width: 71,
    height: 100,
  },
  loaderInfoContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  loaderText: {
    marginVertical: 4,
  },
  loaderName: {
    backgroundColor: backgroundLight,
    width: '90%',
    height: 20,
  },
  loaderSmall: {
    backgroundColor: backgroundLight,
    width: 80,
    height: 15,
  },
});
