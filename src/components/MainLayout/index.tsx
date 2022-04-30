import React, {ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomText from '../CustomText';
import {TextVariants} from '../CustomText/TextVariants';

import styles from './styles';

interface Props {
  children: ReactNode;
  title: string;
}

export default function MainLayout({children, title}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <CustomText variant={TextVariants.h1} style={styles.title}>
        {title}
      </CustomText>
      {children}
    </SafeAreaView>
  );
}
