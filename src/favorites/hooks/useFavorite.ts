import AsyncStorage from '@react-native-async-storage/async-storage';
import produce from 'immer';
import {useRecoilState, useRecoilValue} from 'recoil';

import {
  favoritesListKey,
  favoritesListState,
  FavoriteTypes,
  isFavoriteSelector,
} from '../state';

export function useIsFavorite(type: FavoriteTypes, id: number) {
  return useRecoilValue(isFavoriteSelector({type, id}));
}

export function useSetFavorite(type: FavoriteTypes, id: number) {
  const [favoritesList, setFavoritesList] = useRecoilState(favoritesListState);

  return (favorite: boolean) => {
    if (favoritesList) {
      const newFavoritesList = produce(favoritesList, draft => {
        draft[type][id] = favorite;
      });
      setFavoritesList(newFavoritesList);
      AsyncStorage.setItem(favoritesListKey, JSON.stringify(newFavoritesList));
    }
  };
}
