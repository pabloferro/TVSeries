import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import CustomText from '../../../components/CustomText';
import {TextVariants} from '../../../components/CustomText/TextVariants';
import MainLayout from '../../../components/MainLayout';
import {RootStackParamList} from '../../../navigation/RootStackNavigator';
import PinInput from '../../components/PinInput';
import useAuth from '../../context/useAuth';

import styles from './styles';

export default function CreatePinScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const {updatePin} = useAuth();

  return (
    <MainLayout style={styles.container}>
      <CustomText variant={TextVariants.h1}>
        Create or update your PIN
      </CustomText>
      <PinInput
        onFulfill={async pin => {
          await updatePin(pin);
          navigation.navigate('HomeTabs', {screen: 'ShowsTab'});
          return true;
        }}
      />
    </MainLayout>
  );
}
