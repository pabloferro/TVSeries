import {useQuery} from 'react-query';
import {Show} from './Show';

async function searchShows(query: string): Promise<Show[] | undefined> {
  if (!query) {
    return undefined;
  }

  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${query}`,
  );
  if (!response.ok) {
    throw new Error('searchShows error');
  }
  const searchResults: {score: number; show: Show}[] = await response.json();
  return searchResults.map(({show}) => show);
}

export default function useSearchShows(query: string) {
  return useQuery(['shows-search', query], () => searchShows(query));
}
