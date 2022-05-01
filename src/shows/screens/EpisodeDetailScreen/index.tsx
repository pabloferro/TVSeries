import React from 'react';
import {RouteProp} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

import MainLayout from '../../../components/MainLayout';
import {RootStackParamList} from '../../../navigation/RootStackNavigator';
import ServerImage from '../../../components/ServerImage';
import CustomText from '../../../components/CustomText';
import {TextVariants} from '../../../components/CustomText/TextVariants';
import HtmlText from '../../../components/HtmlText';

import styles from './styles';
import {ScrollView} from 'react-native';

interface Props {
  route: RouteProp<RootStackParamList, 'EpisodeDetail'>;
}

export default function EpisodeDetailScreen({route}: Props) {
  const episode = route.params.episode;

  return (
    <MainLayout style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <CustomText variant={TextVariants.h2} style={styles.title}>
          {`S${('0' + episode.season).slice(-2)}E${('0' + episode.number).slice(
            -2,
          )}`}{' '}
          <CustomText variant={TextVariants.secondary}>
            ({episode.airdate})
          </CustomText>
        </CustomText>
        <ServerImage
          style={styles.poster}
          source={{
            uri: episode.image?.original || episode.image?.medium,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <CustomText variant={TextVariants.h2} style={styles.title}>
          Summary
        </CustomText>
        <HtmlText>{episode.summary}</HtmlText>
      </ScrollView>
    </MainLayout>
  );
}
