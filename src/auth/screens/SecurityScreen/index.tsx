import React from 'react';
import {Button, View} from 'react-native';

import {NavigationProp, useNavigation} from '@react-navigation/native';

import MainLayout from '../../../components/MainLayout';
import {RootStackParamList} from '../../../navigation/RootStackNavigator';
import {backgroundLight} from '../../../constants/colors';
import useAuth from '../../context/useAuth';

import styles from './styles';

export default function SecurityScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {deletePin} = useAuth();
  return (
    <MainLayout>
      <View style={styles.buttonContainer}>
        <Button
          color={backgroundLight}
          title="Create or update PIN"
          onPress={() => navigation.navigate('CreatePIN')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          color={backgroundLight}
          title="Remove PIN"
          onPress={async () => {
            await deletePin();
            navigation.navigate('HomeTabs', {screen: 'ShowsTab'});
          }}
        />
      </View>
    </MainLayout>
  );
}
