import React, {useCallback} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  FlatListProps,
  View,
} from 'react-native';
import NoElements from '../../../components/NoElements';
import {backgroundLight, white} from '../../../constants/colors';
import {Show} from '../../api/Show';

import ShowThumbnail from '../ShowThumbnail';

import styles from './styles';

interface Props extends Omit<FlatListProps<Show>, 'data' | 'renderItem'> {
  data: Show[] | undefined;
  isLoading: boolean;
  errorProps?: {
    error: boolean;
    onRefetch: () => void;
  };
}

export default function ShowList({
  data,
  isLoading,
  errorProps,
  ...props
}: Props) {
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

  if (errorProps?.error) {
    return (
      <View style={styles.contentContainer}>
        <NoElements
          iconName="alert"
          message="Oops! We couldn't get the shows, please try again later."
        />
        <Button
          color={backgroundLight}
          title="retry"
          onPress={errorProps.onRefetch}
        />
      </View>
    );
  }

  return (
    <FlatList
      style={styles.contentContainer}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      {...props}
    />
  );
}
