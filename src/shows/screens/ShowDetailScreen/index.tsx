import React from 'react';
import {RouteProp} from '@react-navigation/native';

import MainLayout from '../../../components/MainLayout';
import {RootStackParamList} from '../../../navigation/RootStackNavigator';
import ServerImage from '../../../components/ServerImage';
import CustomText from '../../../components/CustomText';
import {TextVariants} from '../../../components/CustomText/TextVariants';

import styles from './styles';
import useShowEpisodes from '../../api/useShowEpisodes';
import {ScrollView} from 'react-native';

interface Props {
  route: RouteProp<RootStackParamList, 'ShowDetail'>;
}

export default function ShowDetailScreen({route}: Props) {
  /* Instead of using the show info from param and fetching only episodes,
  I could fetch the whole episode with the embeded episodes and then merge the result
  so if we need to use this screen from a deep link or a place where we don't have the
  show object it could still work */

  const show = route.params.show;
  const episodesQuery = useShowEpisodes(show.id);

  return (
    <MainLayout>
      <ScrollView>
        {show.image && (
          <ServerImage
            style={styles.poster}
            source={{uri: show.image.medium}}
          />
        )}
        <CustomText variant={TextVariants.body}>
          {JSON.stringify(show.schedule, null, 2)}
        </CustomText>
        <CustomText variant={TextVariants.body}>{show.genres}</CustomText>
        <CustomText variant={TextVariants.body}>{show.summary}</CustomText>
        <CustomText variant={TextVariants.body}>
          {JSON.stringify(
            episodesQuery.data?.map(
              e => `S${e.season}E${e.number} - ${e.name}`,
            ),
            null,
            2,
          )}
        </CustomText>
      </ScrollView>
    </MainLayout>
  );
}
