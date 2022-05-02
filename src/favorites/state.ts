import {atom, selectorFamily} from 'recoil';

// This state could be use to mark other things as favorite
export type FavoriteTypes = 'show';
export type FavoriteList = Record<FavoriteTypes, Record<number, boolean>>;

export const favoritesListKey = '@favorites';
export const favoritesListState = atom<FavoriteList | null>({
  key: favoritesListKey,
  default: null,
});

export const isFavoriteSelector = selectorFamily<
  boolean,
  {type: FavoriteTypes; id: number}
>({
  key: favoritesListKey,
  get:
    ({type, id}) =>
    ({get}) => {
      return !!get(favoritesListState)?.[type][id];
    },
});
