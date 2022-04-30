import React from 'react';
import {TextProps} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ShowsSearchScreen from '../shows/screens/ShowsSearchScreen';
import CustomText from '../components/CustomText';
import {TextVariants} from '../components/CustomText/TextVariants';
import {brandPrimary, white} from '../constants/colors';

import styles from './styles';
import ShowsScreen from '../shows/screens/ShowsScreen';

const Tab = createBottomTabNavigator();

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
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
        component={ShowsSearchScreen}
      />
    </Tab.Navigator>
  );
}
