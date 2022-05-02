import React from 'react';
import {TextProps} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ShowsSearchScreen from '../shows/screens/ShowsSearchScreen';
import ShowsScreen from '../shows/screens/ShowsScreen';
import FavShowsScreen from '../shows/screens/FavShowsScreen';
import SecurityScreen from '../auth/screens/SecurityScreen';
import CustomText from '../components/CustomText';
import {TextVariants} from '../components/CustomText/TextVariants';
import {brandPrimary, white} from '../constants/colors';

import styles from './styles';

export type HomeTabParamList = {
  ShowsTab: undefined;
  SearchTab: undefined;
  FavShowsTab: undefined;
  SecurityTab: undefined;
};

const Tab = createBottomTabNavigator<HomeTabParamList>();

export default function HomeTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        headerStyle: styles.header,
        tabBarActiveTintColor: brandPrimary,
        tabBarInactiveTintColor: white,
        tabBarLabelStyle: styles.tabBarLabel,
        headerTitle: props => (
          <CustomText variant={TextVariants.h1} {...(props as TextProps)} />
        ),
      }}>
      <Tab.Screen
        name="ShowsTab"
        options={{
          title: 'TV Shows',
          tabBarLabel: 'Shows',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="television-classic"
              color={color}
              size={size}
            />
          ),
        }}
        component={ShowsScreen}
      />
      <Tab.Screen
        name="SearchTab"
        options={{
          title: 'Search TV Shows',
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="movie-search-outline"
              color={color}
              size={size}
            />
          ),
        }}
        component={ShowsSearchScreen}
      />
      <Tab.Screen
        name="FavShowsTab"
        options={{
          title: 'Favorites',
          tabBarLabel: 'Favorites',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}
        component={FavShowsScreen}
      />
      <Tab.Screen
        name="SecurityTab"
        options={{
          title: 'Settings',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-cog"
              color={color}
              size={size}
            />
          ),
        }}
        component={SecurityScreen}
      />
    </Tab.Navigator>
  );
}
