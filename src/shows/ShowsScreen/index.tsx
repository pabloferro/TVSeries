import React, {useCallback} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import useShows from '../api/useShows';
import {Show} from '../api/Show';

import styles from './styles';

export default function ShowsScreen() {
  const showsQuery = useShows();

  const renderItem = useCallback(
    ({item}: {item: Show}) => (
      <Text>
        {item.id}: {item.name}
      </Text>
    ),
    [],
  );
  const keyExtractor = useCallback(({id}: Show) => id.toString(), []);

  return (
    <SafeAreaView>
      <Text>Shows</Text>
      <FlatList
        data={showsQuery.data?.pages.flat()}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          console.log('onReachEnd');
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
