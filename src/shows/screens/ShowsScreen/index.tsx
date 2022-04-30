import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import useShows from '../../api/useShows';

import styles from './styles';
import CustomText from '../../../components/CustomText';
import {TextVariants} from '../../../components/CustomText/TextVariants';
import ShowList from '../../components/ShowList';

export default function ShowsScreen() {
  const showsQuery = useShows();

  return (
    <SafeAreaView style={styles.container}>
      <CustomText variant={TextVariants.h1} style={styles.title}>
        TV Shows
      </CustomText>
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
    </SafeAreaView>
  );
}
