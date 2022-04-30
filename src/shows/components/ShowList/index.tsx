import React, {useCallback} from 'react';
import {ActivityIndicator, FlatList, FlatListProps} from 'react-native';
import {white} from '../../../constants/colors';
import {Show} from '../../api/Show';

import ShowThumbnail from '../ShowThumbnail';

import styles from './styles';

interface Props extends Omit<FlatListProps<Show>, 'data' | 'renderItem'> {
  data: Show[] | undefined;
  isLoading: boolean;
}

export default function ShowList({data, isLoading, ...props}: Props) {
  const renderItem = useCallback(
    ({item}: {item: Show}) => <ShowThumbnail show={item} />,
    [],
  );
  const keyExtractor = useCallback(({id}: Show) => id.toString(), []);

  if (isLoading) {
    return (
      <ActivityIndicator style={styles.loader} size="large" color={white} />
    );
  }

  if (!data) {
    return null;
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      {...props}
    />
  );
}
