import React, {useCallback} from 'react';
import {RouteProp} from '@react-navigation/native';
import {ActivityIndicator, ScrollView, SectionList, View} from 'react-native';

import MainLayout from '../../../components/MainLayout';
import {RootStackParamList} from '../../../navigation/RootStackNavigator';
import ServerImage from '../../../components/ServerImage';
import CustomText from '../../../components/CustomText';
import {TextVariants} from '../../../components/CustomText/TextVariants';
import useShowEpisodes from '../../api/useShowEpisodes';
import EpisodeThumbnail from '../../components/EpisodeThumbnail';
import {Episode} from '../../api/Episode';
import HtmlText from '../../../components/HtmlText';
import {white} from '../../../constants/colors';

import styles from './styles';
import NoElements from '../../../components/NoElements';

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

  const renderItem = useCallback(
    ({item}: {item: Episode}) => <EpisodeThumbnail episode={item} />,
    [],
  );
  const keyExtractor = useCallback(({id}: Episode) => id.toString(), []);

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
            {!!show.schedule && !!show.schedule.time && !!show.schedule.days && (
              <>
                <CustomText variant={TextVariants.h2} style={styles.title}>
                  Schedule
                </CustomText>
                <CustomText variant={TextVariants.body}>{`Airs at ${
                  show.schedule.time
                } on ${show.schedule.days.join(',')}`}</CustomText>
              </>
            )}
            {!!show.summary && (
              <>
                <CustomText variant={TextVariants.h2} style={styles.title}>
                  Summary
                </CustomText>
                <HtmlText>{show.summary}</HtmlText>
              </>
            )}
            <CustomText variant={TextVariants.h2} style={styles.title}>
              Episodes
            </CustomText>
            {episodesQuery.isLoading && (
              <ActivityIndicator size="large" color={white} />
            )}
            {!episodesQuery.isLoading && !episodesQuery.data?.length && (
              <NoElements
                message="We couldn't find episodes for this show"
                iconName="television-off"
              />
            )}
          </View>
        }
        sections={episodesQuery.data || []}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderSectionHeader={({section: {season}}) => (
          <CustomText variant={TextVariants.h2}>Season {season}</CustomText>
        )}
      />
    </MainLayout>
  );
}
