import {useEffect} from 'react';
import {useSetRecoilState} from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FavoriteList, favoritesListKey, favoritesListState} from '../state';

const defaultFavoritesList: FavoriteList = {
  show: {},
};

// Optimistic implementation, could be improve by adding some loading state and error handling
export default function useLoadFavorites() {
  const setFavoritesList = useSetRecoilState(favoritesListState);

  useEffect(() => {
    AsyncStorage.getItem(favoritesListKey).then(storedFavorites => {
      if (storedFavorites) {
        setFavoritesList(JSON.parse(storedFavorites));
      } else {
        setFavoritesList(defaultFavoritesList);
      }
    });
  }, [setFavoritesList]);
}
