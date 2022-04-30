import React, {useCallback} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import useShows from '../api/useShows';
import {Show} from '../api/Show';

import styles from './styles';
import ShowThumbnail from '../components/ShowThumbnail';
import CustomText from '../../components/CustomText';
import {TextVariants} from '../../components/CustomText/TextVariants';

export default function ShowsScreen() {
  const showsQuery = useShows();

  const renderItem = useCallback(
    ({item}: {item: Show}) => <ShowThumbnail show={item} />,
    [],
  );
  const keyExtractor = useCallback(({id}: Show) => id.toString(), []);

  return (
    <SafeAreaView style={styles.container}>
      <CustomText variant={TextVariants.h1} style={styles.title}>
        TV Shows
      </CustomText>
      <FlatList
        data={showsQuery.data?.pages.flat()}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          showsQuery.fetchNextPage();
        }}
        ListFooterComponent={
          showsQuery.isFetchingNextPage ? (
            <View style={styles.nextPageLoader}>
              <ActivityIndicator />
            </View>
          ) : null
        }
      />
    </SafeAreaView>
  );
}
