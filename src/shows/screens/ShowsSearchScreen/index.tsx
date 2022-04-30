import React from 'react';

import ShowList from '../../components/ShowList';
import useSearchShows from '../../api/useSearchShows';
import MainLayout from '../../../components/MainLayout';
import useDebounce from '../../../hooks/useDebounce';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomText from '../../../components/CustomText';
import {TextVariants} from '../../../components/CustomText/TextVariants';

export default function ShowsSearchScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const showsQuery = useSearchShows(debouncedSearchQuery);

  return (
    <MainLayout title="Search TV Shows">
      <CustomTextInput
        placeholder="Search by name"
        value={searchQuery}
        onChangeText={setSearchQuery}
        autoFocus
      />
      <ShowList
        isLoading={showsQuery.isLoading}
        data={showsQuery.data}
        ListEmptyComponent={
          <CustomText variant={TextVariants.h2}>No results</CustomText>
        }
      />
    </MainLayout>
  );
}
