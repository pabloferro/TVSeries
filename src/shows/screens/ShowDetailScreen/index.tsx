import React from 'react';
import {RouteProp} from '@react-navigation/native';

import MainLayout from '../../../components/MainLayout';
import CustomText from '../../../components/CustomText';
import {RootStackParamList} from '../../../navigation/RootStackNavigator';

interface Props {
  route: RouteProp<RootStackParamList, 'ShowDetail'>;
}

export default function ShowDetailScreen({route}: Props) {
  return (
    <MainLayout>
      <CustomText>Detail</CustomText>
    </MainLayout>
  );
}
