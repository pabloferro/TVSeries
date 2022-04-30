import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import useShows from '../../api/useShows';
import ShowList from '../../components/ShowList';
import MainLayout from '../../../components/MainLayout';

import styles from './styles';

export default function ShowsScreen() {
  const showsQuery = useShows();

  return (
    <MainLayout title="TV Shows">
      <ShowList
        data={showsQuery.data?.pages.flat()}
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
    </MainLayout>
  );
}
