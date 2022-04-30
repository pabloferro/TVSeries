import React, {useCallback} from 'react';
import {FlatList, FlatListProps} from 'react-native';

import {Show} from '../../api/Show';

import ShowThumbnail from '../ShowThumbnail';

interface Props extends Omit<FlatListProps<Show>, 'data' | 'renderItem'> {
  data: Show[] | undefined;
}

export default function ShowList({data, ...props}: Props) {
  const renderItem = useCallback(
    ({item}: {item: Show}) => <ShowThumbnail show={item} />,
    [],
  );
  const keyExtractor = useCallback(({id}: Show) => id.toString(), []);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      {...props}
    />
  );
}
