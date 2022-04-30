import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import QueryProvider from './components/QueryProvider';
import RootTabNavigator from './navigation/RootTabNavigator';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="black" />
      <QueryProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootTabNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </QueryProvider>
    </>
  );
}
