import React, {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export default function MainLayout({children, style}: Props) {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
}
