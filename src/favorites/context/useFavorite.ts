import {useContext, useEffect, useState} from 'react';
import {FavoriteContext, FavoriteTypes} from './FavoriteContext';

export default function useFavorite(type: FavoriteTypes, id: number) {
  const favoriteContext = useContext(FavoriteContext);
  const [currentIsFavorite, setCurrentIsFavorite] = useState(false);
  if (favoriteContext === undefined) {
    throw new Error(
      'useFavorite must be used within a FavoriteContextProvider',
    );
  }

  useEffect(() => {
    favoriteContext
      .isFavorite(type, id)
      .then(newFav => setCurrentIsFavorite(newFav));
  }, [favoriteContext, id, type]);

  const setFavorite = (fav: boolean) =>
    favoriteContext
      .setFavorite(type, id, fav)
      .then(newFav => setCurrentIsFavorite(newFav));

  return {isFavorite: currentIsFavorite, setFavorite};
}
