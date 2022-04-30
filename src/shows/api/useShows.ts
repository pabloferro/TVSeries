import {useInfiniteQuery} from 'react-query';
import {Show} from './Show';

const MAX_SHOWS_PER_PAGE = 250;

async function fetchShows({pageParam = 0}): Promise<Show[]> {
  const response = await fetch(
    `https://api.tvmaze.com/shows?page=${pageParam}`,
  );
  if (!response.ok) {
    throw new Error('fetchShows error');
  }
  return await response.json();
}

export default function useShows() {
  return useInfiniteQuery('shows', fetchShows, {
    getNextPageParam: lastPage =>
      Math.ceil(lastPage[lastPage.length - 1].id / MAX_SHOWS_PER_PAGE),
  });
}
