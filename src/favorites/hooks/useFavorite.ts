import AsyncStorage from '@react-native-async-storage/async-storage';
import produce from 'immer';
import {useRecoilState, useRecoilValue} from 'recoil';

import {
  favoritesListKey,
  favoritesListState,
  FavoriteTypes,
  isFavoriteSelector,
} from '../state';

export function useListFavorites(type: FavoriteTypes) {
  const favoritesList = useRecoilValue(favoritesListState);
  if (!favoritesList) {
    return undefined;
  }
  return Object.entries(favoritesList[type])
    .filter(([_id, {isFavorite}]) => isFavorite)
    .map(([id, {name}]) => ({
      id,
      name,
    }));
}

export function useIsFavorite(type: FavoriteTypes, id: number) {
  return useRecoilValue(isFavoriteSelector({type, id}));
}

export function useSetFavorite(type: FavoriteTypes, id: number, name: string) {
  const [favoritesList, setFavoritesList] = useRecoilState(favoritesListState);

  return (favorite: boolean) => {
    if (favoritesList) {
      const newFavoritesList = produce(favoritesList, draft => {
        draft[type][id] = {
          isFavorite: favorite,
          name,
        };
      });
      setFavoritesList(newFavoritesList);
      AsyncStorage.setItem(favoritesListKey, JSON.stringify(newFavoritesList));
    }
  };
}
