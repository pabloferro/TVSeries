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

import ServerShowThumbnail from '../ServerShowThumbnail';

import styles from './styles';

interface Props extends Omit<FlatListProps<number>, 'data' | 'renderItem'> {
  data: number[] | undefined;
  isLoading: boolean;
  errorProps?: {
    error: boolean;
    onRefetch: () => void;
  };
}

// This shares a lot of code with ShowList, should be improved
export default function ServerShowList({
  data,
  isLoading,
  errorProps,
  ...props
}: Props) {
  const renderItem = useCallback(
    ({item}: {item: number}) => <ServerShowThumbnail id={item} />,
    [],
  );
  const keyExtractor = useCallback((item: number) => item.toString(), []);

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
