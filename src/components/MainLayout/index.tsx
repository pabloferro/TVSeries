import React, {ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';

interface Props {
  children: ReactNode;
}

export default function MainLayout({children}: Props) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}
