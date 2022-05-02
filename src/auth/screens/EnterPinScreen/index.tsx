import React, {useEffect, useState} from 'react';
import {Alert, Button, View} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';

import CustomText from '../../../components/CustomText';
import {TextVariants} from '../../../components/CustomText/TextVariants';
import MainLayout from '../../../components/MainLayout';
import {backgroundLight} from '../../../constants/colors';
import PinInput from '../../components/PinInput';
import useAuth from '../../context/useAuth';

import styles from './styles';

export default function EnterPinScreen() {
  const [biometricAvailable, setBiometricAvailable] = useState(false);
  const {handleSignIn, handleBiometricSignIn} = useAuth();

  useEffect(() => {
    ReactNativeBiometrics.isSensorAvailable().then(({available}) => {
      setBiometricAvailable(available);
    });
  }, []);

  return (
    <MainLayout style={styles.container}>
      <CustomText variant={TextVariants.h1}>Enter your PIN</CustomText>
      <PinInput onFulfill={handleSignIn} />
      {!!biometricAvailable && (
        <View style={styles.buttonContainer}>
          <Button
            color={backgroundLight}
            title="biometric sign in"
            onPress={() => {
              ReactNativeBiometrics.simplePrompt({
                promptMessage: 'Sign in',
              })
                .then(({success}) => {
                  if (success) {
                    handleBiometricSignIn();
                  }
                })
                .catch(() => {
                  Alert.alert('Error', 'Biometric sign in failed', [
                    {text: 'OK'},
                  ]);
                });
            }}
          />
        </View>
      )}
    </MainLayout>
  );
}
