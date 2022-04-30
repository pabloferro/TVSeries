import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';

import QueryProvider from './components/QueryProvider';

export default function App() {
  return (
    <QueryProvider>
      <NavigationContainer>
        <Text>TV Series</Text>
      </NavigationContainer>
    </QueryProvider>
  );
}
