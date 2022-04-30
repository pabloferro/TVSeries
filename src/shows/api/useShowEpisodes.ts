import {useQuery} from 'react-query';
import groupBy from 'lodash.groupby';

import {Episode} from './Episode';

async function fetchShowEpisodes(
  id: number,
): Promise<{season: number; data: Episode[]}[]> {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
  if (!response.ok) {
    throw new Error('fetchShows error');
  }
  const episodes = await response.json();
  const groupedEpisodes = groupBy<Episode>(episodes, episode => episode.season);
  return Object.keys(groupedEpisodes).map(season => ({
    season: Number(season),
    data: groupedEpisodes[season],
  }));
}

export default function useShowEpisodes(id: number) {
  return useQuery(['show-episodes', id], () => fetchShowEpisodes(id));
}
