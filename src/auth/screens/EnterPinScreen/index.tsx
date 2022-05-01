import React from 'react';

import CustomText from '../../../components/CustomText';
import {TextVariants} from '../../../components/CustomText/TextVariants';
import MainLayout from '../../../components/MainLayout';
import PinInput from '../../components/PinInput';
import useAuth from '../../context/useAuth';

import styles from './styles';

export default function EnterPinScreen() {
  const {handleSignIn} = useAuth();

  return (
    <MainLayout style={styles.container}>
      <CustomText variant={TextVariants.h1}>Enter your PIN</CustomText>
      <PinInput onFulfill={handleSignIn} />
    </MainLayout>
  );
}
