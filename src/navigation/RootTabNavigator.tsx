import React from 'react';
import {TextProps} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ShowsScreen from '../shows/screens/ShowsScreen';
import ShowsSearchScreen from '../shows/screens/ShowsSearchScreen';
import CustomText from '../components/CustomText';
import {TextVariants} from '../components/CustomText/TextVariants';
import {brandPrimary, white} from '../constants/colors';

import styles from './styles';

const Tab = createBottomTabNavigator();

export default function RootTabNavigator() {
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
        name="Shows"
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
        name="SearchShows"
        options={{
          title: 'Search TV Shows',
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
        component={ShowsSearchScreen}
      />
    </Tab.Navigator>
  );
}
