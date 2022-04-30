import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import QueryProvider from './components/QueryProvider';
import ShowsSearchScreen from './shows/screens/ShowsSearchScreen';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="black" />
      <QueryProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <ShowsSearchScreen />
          </NavigationContainer>
        </SafeAreaProvider>
      </QueryProvider>
    </>
  );
}
