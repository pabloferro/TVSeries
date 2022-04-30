import {useQuery} from 'react-query';

import {Episode} from './Episode';

async function fetchShowEpisodes(id: number): Promise<Episode[]> {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
  if (!response.ok) {
    throw new Error('fetchShows error');
  }
  return await response.json();
}

export default function useShowEpisodes(id: number) {
  return useQuery(['show-episodes', id], () => fetchShowEpisodes(id));
}
