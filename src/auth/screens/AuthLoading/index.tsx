import React from 'react';
import {ActivityIndicator} from 'react-native';

import MainLayout from '../../../components/MainLayout';
import {white} from '../../../constants/colors';

import styles from './styles';

export default function AuthLoading() {
  return (
    <MainLayout style={styles.container}>
      <ActivityIndicator size="large" color={white} />
    </MainLayout>
  );
}
