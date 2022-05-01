import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ShowDetailScreen from '../shows/screens/ShowDetailScreen';
import {white} from '../constants/colors';

import {Show} from '../shows/api/Show';
import {Episode} from '../shows/api/Episode';
import variantsStyles from '../components/CustomText/variantsStyles';
import EpisodeDetailScreen from '../shows/screens/EpisodeDetailScreen';

import HomeTabNavigator from './HomeTabNavigator';
import styles from './styles';

export type RootStackParamList = {
  HomeTabs: undefined;
  ShowDetail: {
    show: Pick<
      Show,
      'id' | 'name' | 'image' | 'schedule' | 'genres' | 'summary'
    >;
  };
  EpisodeDetail: {
    episode: Pick<
      Episode,
      | 'id'
      | 'season'
      | 'name'
      | 'image'
      | 'number'
      | 'summary'
      | 'airdate'
      | 'rating'
    >;
  };
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
          title: route.params.show.name,
        })}
        component={ShowDetailScreen}
      />
      <Stack.Screen
        name="EpisodeDetail"
        options={({route}) => ({
          title: `"${route.params.episode.name}"`,
        })}
        component={EpisodeDetailScreen}
      />
    </Stack.Navigator>
  );
}
