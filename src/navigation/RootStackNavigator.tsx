import React from 'react';
import {TextProps} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CustomText from '../components/CustomText';
import {TextVariants} from '../components/CustomText/TextVariants';
import ShowDetailScreen from '../shows/screens/ShowDetailScreen';
import {white} from '../constants/colors';

import HomeTabNavigator from './HomeTabNavigator';
import styles from './styles';
import {Show} from '../shows/api/Show';
import variantsStyles from '../components/CustomText/variantsStyles';

export type RootStackParamList = {
  HomeTabs: undefined;
  ShowDetail: Pick<Show, 'id' | 'name'>;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerTitleStyle: variantsStyles.h1,
        headerTintColor: white,
      }}>
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ShowDetail"
        options={({route}) => ({
          title: route.params.name,
        })}
        component={ShowDetailScreen}
      />
    </Stack.Navigator>
  );
}
