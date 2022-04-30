import React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import CustomText from '../../../components/CustomText';
import {TextVariants} from '../../../components/CustomText/TextVariants';
import ServerImage from '../../../components/ServerImage';
import {Show} from '../../api/Show';

import styles from './styles';

export default function ShowThumbnail({show}: {show: Show}) {
  return (
    <View style={styles.container}>
      {show.image && (
        <ServerImage
          style={styles.poster}
          source={{
            uri: show.image.medium,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      )}
      <View style={styles.infoContainer}>
        <CustomText
          variant={TextVariants.h2}
          ellipsizeMode="tail"
          numberOfLines={2}>
          {show.name}
        </CustomText>
        <CustomText variant={TextVariants.secondary}>
          ({new Date(show.premiered).getFullYear()})
        </CustomText>
        <CustomText variant={TextVariants.body}>
          Rating: {show.rating.average}
        </CustomText>
      </View>
    </View>
  );
}
