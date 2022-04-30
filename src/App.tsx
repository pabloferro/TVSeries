import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import QueryProvider from './components/QueryProvider';
import RootStackNavigator from './navigation/RootStackNavigator';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="black" />
      <QueryProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootStackNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </QueryProvider>
    </>
  );
}
