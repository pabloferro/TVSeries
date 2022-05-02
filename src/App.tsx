import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import QueryProvider from './components/QueryProvider';
import RootStackNavigator from './navigation/RootStackNavigator';
import AuthContextProvider from './auth/context/AuthContextProvider';
import FavoriteContextProvider from './favorites/context/FavoriteContextProvider';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="black" />
      <QueryProvider>
        <SafeAreaProvider>
          <AuthContextProvider>
            <FavoriteContextProvider>
              <NavigationContainer>
                <RootStackNavigator />
              </NavigationContainer>
            </FavoriteContextProvider>
          </AuthContextProvider>
        </SafeAreaProvider>
      </QueryProvider>
    </>
  );
}
