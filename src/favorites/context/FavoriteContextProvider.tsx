import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {FavoriteContext, FavoriteTypes} from './FavoriteContext';

const getFavoriteKey = (type: FavoriteTypes, id: number) =>
  `@isFavorite-${type}-${id}`;

export default function FavoriteContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isFavorite = async (type: FavoriteTypes, id: number) => {
    try {
      return (await AsyncStorage.getItem(getFavoriteKey(type, id))) === 'true';
    } catch (error) {
      throw new Error('AsyncStorage error');
    }
  };

  const setFavorite = async (type: FavoriteTypes, id: number, fav: boolean) => {
    try {
      await AsyncStorage.setItem(getFavoriteKey(type, id), fav.toString());
      return fav;
    } catch (error) {
      throw new Error('AsyncStorage error');
    }
  };

  return (
    <FavoriteContext.Provider
      value={{
        isFavorite,
        setFavorite,
      }}>
      {children}
    </FavoriteContext.Provider>
  );
}
