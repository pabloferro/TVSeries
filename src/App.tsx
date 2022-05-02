import React from 'react';
import {StatusBar} from 'react-native';
import {RecoilRoot} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import QueryProvider from './components/QueryProvider';
import RootStackNavigator from './navigation/RootStackNavigator';
import AuthContextProvider from './auth/context/AuthContextProvider';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="black" />
      <RecoilRoot>
        <QueryProvider>
          <SafeAreaProvider>
            <AuthContextProvider>
              <NavigationContainer>
                <RootStackNavigator />
              </NavigationContainer>
            </AuthContextProvider>
          </SafeAreaProvider>
        </QueryProvider>
      </RecoilRoot>
    </>
  );
}
