import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import CustomText from '../../../components/CustomText';
import {TextVariants} from '../../../components/CustomText/TextVariants';
import ServerImage from '../../../components/ServerImage';
import {RootStackParamList} from '../../../navigation/RootStackNavigator';
import {Episode} from '../../api/Episode';

import styles from './styles';

interface Props {
  episode: Episode;
}

export default function EpisodeThumbnail({episode}: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('EpisodeDetail', {episode})}>
      <View>
        <ServerImage
          style={styles.poster}
          source={{
            uri: episode.image?.medium,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <CustomText style={styles.episodeNumber} variant={TextVariants.body}>
          {`S${('0' + episode.season).slice(-2)}E${('0' + episode.number).slice(
            -2,
          )}`}
        </CustomText>
      </View>
      <View style={styles.infoContainer}>
        <CustomText
          variant={TextVariants.h2}
          ellipsizeMode="tail"
          numberOfLines={1}>
          "{episode.name}"
        </CustomText>
        <CustomText variant={TextVariants.secondary}>
          {episode.airdate}
        </CustomText>
        <CustomText variant={TextVariants.body}>
          Rating: {episode.rating.average || '-'}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
}
