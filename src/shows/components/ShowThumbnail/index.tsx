import React from 'react';
import {Image, View} from 'react-native';
import CustomText from '../../../components/CustomText';
import {TextVariants} from '../../../components/CustomText/TextVariants';
import {Show} from '../../api/Show';

import styles from './styles';

export default function ShowThumbnail({show}: {show: Show}) {
  return (
    <View style={styles.container}>
      {show.image && (
        <Image style={styles.poster} source={{uri: show.image.medium}} />
      )}
      <View style={styles.infoContainer}>
        <CustomText variant={TextVariants.h2}>{show.name}</CustomText>
      </View>
    </View>
  );
}
