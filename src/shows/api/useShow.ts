import {useQuery} from 'react-query';

import {Show} from './Show';

async function fetchShow(id: number): Promise<Show> {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  if (!response.ok) {
    throw new Error('fetchShows error');
  }
  return await response.json();
}

export default function useShow(id: number) {
  return useQuery(['show', id], () => fetchShow(id));
}
