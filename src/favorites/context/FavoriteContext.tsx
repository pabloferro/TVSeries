import React from 'react';

// This context could be use to mark other things as favorite
export type FavoriteTypes = 'show';

type FavoriteContextValue =
  | {
      isFavorite: (type: FavoriteTypes, id: number) => Promise<boolean>;
      setFavorite: (
        type: FavoriteTypes,
        id: number,
        isFavorite: boolean,
      ) => Promise<boolean>;
    }
  | undefined;

export const FavoriteContext =
  React.createContext<FavoriteContextValue>(undefined);
