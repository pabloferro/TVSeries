import {StyleSheet} from 'react-native';
import {backgroundLight} from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    marginBottom: 5,
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  episodeNumber: {
    textAlign: 'center',
    bottom: 0,
    width: '100%',
    backgroundColor: `${backgroundLight}a`,
    position: 'absolute',
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  poster: {
    width: 100,
    height: 56,
  },
});
