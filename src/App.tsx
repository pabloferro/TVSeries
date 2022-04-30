import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import QueryProvider from './components/QueryProvider';
import ShowsScreen from './shows/ShowsScreen';

export default function App() {
  return (
    <QueryProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <ShowsScreen />
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryProvider>
  );
}
