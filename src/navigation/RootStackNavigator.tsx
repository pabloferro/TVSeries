import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigatorScreenParams} from '@react-navigation/native';

import ShowDetailScreen from '../shows/screens/ShowDetailScreen';
import {white} from '../constants/colors';
import {Show} from '../shows/api/Show';
import {Episode} from '../shows/api/Episode';
import variantsStyles from '../components/CustomText/variantsStyles';
import EpisodeDetailScreen from '../shows/screens/EpisodeDetailScreen';
import useAuth from '../auth/context/useAuth';
import EnterPinScreen from '../auth/screens/EnterPinScreen';
import CreatePinScreen from '../auth/screens/CreatePinScreen';
import AuthLoading from '../auth/screens/AuthLoading';
import FavoriteButton from '../favorites/components/FavoriteButton';
import useLoadFavorites from '../favorites/hooks/useLoadFavorites';

import HomeTabNavigator, {HomeTabParamList} from './HomeTabNavigator';
import styles from './styles';

export type RootStackParamList = {
  EnterPIN: undefined;
  CreatePIN: undefined;
  HomeTabs: NavigatorScreenParams<HomeTabParamList>;
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
  const {loading, authenticated} = useAuth();
  useLoadFavorites();

  if (loading) {
    return <AuthLoading />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerTitleStyle: variantsStyles.h1,
        headerTintColor: white,
      }}>
      {authenticated ? (
        <>
          <Stack.Screen
            name="HomeTabs"
            component={HomeTabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ShowDetail"
            options={({route}) => ({
              title: route.params.show.name,
              headerRight: () => (
                <FavoriteButton
                  type="show"
                  id={route.params.show.id}
                  style={styles.favoriteButton}
                />
              ),
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
          <Stack.Screen
            name="CreatePIN"
            options={{
              headerShown: false,
            }}
            component={CreatePinScreen}
          />
        </>
      ) : (
        <Stack.Screen
          name="EnterPIN"
          options={{
            headerShown: false,
          }}
          component={EnterPinScreen}
        />
      )}
    </Stack.Navigator>
  );
}
