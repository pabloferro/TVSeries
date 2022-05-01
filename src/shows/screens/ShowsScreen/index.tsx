import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import useShows from '../../api/useShows';
import ShowList from '../../components/ShowList';
import MainLayout from '../../../components/MainLayout';
import {white} from '../../../constants/colors';

import styles from './styles';

export default function ShowsScreen() {
  const showsQuery = useShows();
  return (
    <MainLayout list>
      <ShowList
        isLoading={showsQuery.isLoading}
        data={showsQuery.data?.pages.flat() || []}
        errorProps={{
          error: !!showsQuery.error,
          onRefetch: showsQuery.refetch,
        }}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          showsQuery.fetchNextPage();
        }}
        ListFooterComponent={
          showsQuery.isFetchingNextPage ? (
            <View style={styles.nextPageLoader}>
              <ActivityIndicator color={white} />
            </View>
          ) : null
        }
      />
    </MainLayout>
  );
}
