import React from 'react';

import ShowList from '../../components/ShowList';
import useSearchShows from '../../api/useSearchShows';

import MainLayout from '../../../components/MainLayout';

export default function ShowsSearchScreen() {
  const showsQuery = useSearchShows('lost');

  return (
    <MainLayout title="Search TV Show by name">
      <ShowList data={showsQuery.data} />
    </MainLayout>
  );
}
