import React from 'react';
import {RouteProp} from '@react-navigation/native';

import MainLayout from '../../../components/MainLayout';
import {RootStackParamList} from '../../../navigation/RootStackNavigator';
import ServerImage from '../../../components/ServerImage';
import CustomText from '../../../components/CustomText';
import {TextVariants} from '../../../components/CustomText/TextVariants';

import styles from './styles';
import useShowEpisodes from '../../api/useShowEpisodes';
import {ScrollView, SectionList, View} from 'react-native';

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
      <SectionList
        ListHeaderComponent={
          <View style={styles.header}>
            {show.image && (
              <ServerImage
                style={styles.poster}
                source={{uri: show.image.medium}}
              />
            )}
            <ScrollView
              style={styles.genresRow}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {show.genres.map(genre => (
                <CustomText
                  key={genre}
                  style={styles.genre}
                  variant={TextVariants.body}>
                  {genre}
                </CustomText>
              ))}
            </ScrollView>
            <CustomText variant={TextVariants.body}>{`Airs at ${
              show.schedule.time
            } on ${show.schedule.days.join(',')}`}</CustomText>
            <CustomText variant={TextVariants.body}>{show.summary}</CustomText>
          </View>
        }
        sections={episodesQuery.data || []}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <CustomText
            variant={
              TextVariants.body
            }>{`Episode ${item.number} - ${item.name}`}</CustomText>
        )}
        renderSectionHeader={({section: {season}}) => (
          <CustomText variant={TextVariants.h2}>Season {season}</CustomText>
        )}
      />
    </MainLayout>
  );
}
