import React, {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  list?: boolean;
}

export default function MainLayout({children, style, list}: Props) {
  return (
    <SafeAreaView
      style={[styles.container, !list && styles.normalContainer, style]}>
      {children}
    </SafeAreaView>
  );
}
