import { mockMatchDetails } from '@/mocks/matchDetails';
import { mockMatches } from '@/mocks/matches';
import type { PlayerPerformancePoint } from '@/types';

const sortedMatches = [...mockMatches].sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
);

export function getPerformanceHistory(playerId: string): PlayerPerformancePoint[] {
  return sortedMatches.map((match) => {
    const details = mockMatchDetails[match.id];
    const goals = details?.goals.filter((g) => g.playerId === playerId).length ?? 0;
    const assists = details?.assists.filter((a) => a.playerId === playerId).length ?? 0;

    return {
      matchId: match.id,
      opponent: `vs ${match.opponent}`,
      goals,
      assists,
    };
  });
}
