import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import QueryProvider from './components/QueryProvider';

export default function App() {
  return (
    <QueryProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Text>TV Series</Text>
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryProvider>
  );
}
