import React from 'react';
import {RouteProp} from '@react-navigation/native';

import MainLayout from '../../../components/MainLayout';
import {RootStackParamList} from '../../../navigation/RootStackNavigator';
import ServerImage from '../../../components/ServerImage';
import CustomText from '../../../components/CustomText';
import {TextVariants} from '../../../components/CustomText/TextVariants';

import styles from './styles';

interface Props {
  route: RouteProp<RootStackParamList, 'ShowDetail'>;
}

export default function ShowDetailScreen({route}: Props) {
  const show = route.params.show;
  return (
    <MainLayout>
      <ServerImage style={styles.poster} source={{uri: show.image?.medium}} />
      <CustomText variant={TextVariants.body}>
        {JSON.stringify(show.schedule, null, 2)}
      </CustomText>
      <CustomText variant={TextVariants.body}>{show.genres}</CustomText>
      <CustomText variant={TextVariants.body}>{show.summary}</CustomText>
    </MainLayout>
  );
}
