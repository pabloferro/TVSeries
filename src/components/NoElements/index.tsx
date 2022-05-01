import React, {ComponentProps} from 'react';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {brandWarning} from '../../constants/colors';
import CustomText from '../CustomText';
import {TextVariants} from '../CustomText/TextVariants';

import styles from './styles';

interface Props {
  message: string;
  iconName: ComponentProps<typeof MaterialCommunityIcons>['name'];
}
export default function NoElements({message, iconName}: Props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={iconName} color={brandWarning} size={60} />
      <CustomText variant={TextVariants.h2} style={styles.message}>
        {message}
      </CustomText>
    </View>
  );
}
