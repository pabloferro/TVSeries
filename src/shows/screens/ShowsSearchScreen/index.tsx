import React from 'react';

import ShowList from '../../components/ShowList';
import useSearchShows from '../../api/useSearchShows';
import MainLayout from '../../../components/MainLayout';
import useDebounce from '../../../hooks/useDebounce';
import CustomTextInput from '../../../components/CustomTextInput';
import NoElements from '../../../components/NoElements';

export default function ShowsSearchScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const showsQuery = useSearchShows(debouncedSearchQuery);

  return (
    <MainLayout>
      <CustomTextInput
        placeholder="Search by name"
        value={searchQuery}
        onChangeText={setSearchQuery}
        autoFocus
      />
      <ShowList
        isLoading={showsQuery.isLoading}
        data={showsQuery.data}
        errorProps={{
          error: !!showsQuery.error,
          onRefetch: showsQuery.refetch,
        }}
        ListEmptyComponent={
          !showsQuery.isLoading && debouncedSearchQuery ? (
            <NoElements
              message="There were no shows matching your search"
              iconName="magnify-close"
            />
          ) : null
        }
      />
    </MainLayout>
  );
}
