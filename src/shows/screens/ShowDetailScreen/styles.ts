import {StyleSheet} from 'react-native';
import {brandBackground} from '../../../constants/colors';

export default StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  poster: {
    width: 210,
    height: 295,
  },
  genresRow: {
    paddingVertical: 20,
    flexDirection: 'row',
  },
  genre: {
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginHorizontal: 5,
    backgroundColor: brandBackground,
  },
});
