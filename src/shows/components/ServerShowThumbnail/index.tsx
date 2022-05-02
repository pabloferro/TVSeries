import React from 'react';
import {View} from 'react-native';

import useShow from '../../api/useShow';
import ShowThumbnail from '../ShowThumbnail';
import styles from './styles';

interface Props {
  id: number;
}

export default function ServerShowThumbnail({id}: Props) {
  const showQuery = useShow(id);
  if (showQuery.isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <View style={styles.loaderPoster} />
        <View style={styles.loaderInfoContainer}>
          <View style={[styles.loaderName, styles.loaderText]} />
          <View style={[styles.loaderSmall, styles.loaderText]} />
          <View style={[styles.loaderSmall, styles.loaderText]} />
        </View>
      </View>
    );
  }
  return showQuery.data ? <ShowThumbnail show={showQuery.data} /> : null;
}
