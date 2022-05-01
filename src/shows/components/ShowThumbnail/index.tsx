import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import CustomText from '../../../components/CustomText';
import {TextVariants} from '../../../components/CustomText/TextVariants';
import ServerImage from '../../../components/ServerImage';
import {RootStackParamList} from '../../../navigation/RootStackNavigator';
import {Show} from '../../api/Show';

import styles from './styles';

interface Props {
  show: Show;
}

export default function ShowThumbnail({show}: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      style={styles.container}
      accessibilityRole="button"
      onPress={() => navigation.navigate('ShowDetail', {show})}>
      <ServerImage
        accessibilityLabel={`Poster of ${show.name}`}
        style={styles.poster}
        source={{
          uri: show.image?.medium,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.infoContainer}>
        <CustomText
          variant={TextVariants.h2}
          ellipsizeMode="tail"
          numberOfLines={1}>
          {show.name}
        </CustomText>
        <CustomText variant={TextVariants.secondary}>
          ({new Date(show.premiered).getFullYear()})
        </CustomText>
        <CustomText variant={TextVariants.body}>
          Rating: {show.rating?.average ?? '-'}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
}
