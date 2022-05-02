import React, {useMemo} from 'react';

import {useListFavorites} from '../../../favorites/hooks/useFavorite';
import ServerShowList from '../../components/ServerShowList';
import MainLayout from '../../../components/MainLayout';
import NoElements from '../../../components/NoElements';

export default function FavShowsScreen() {
  const favoriteShows = useListFavorites('show');
  const favoriteShowsIDs = useMemo(
    () =>
      favoriteShows
        ?.sort((showA, showB) => showA.name.localeCompare(showB.name))
        .map(({id}) => Number(id)),
    [favoriteShows],
  );

  return (
    <MainLayout list>
      <ServerShowList
        isLoading={!favoriteShowsIDs}
        data={favoriteShowsIDs}
        ListEmptyComponent={
          <NoElements
            iconName="heart-broken"
            message="You have no favorites shows. You can add one to favorites from the show detail screen."
          />
        }
      />
    </MainLayout>
  );
}
