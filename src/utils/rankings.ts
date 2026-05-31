import type { Player } from '@/types';
import type { RankingCategory, RankingEntry, Rankings } from '@/types/ranking';

function sortAndRank(
  players: Player[],
  category: RankingCategory,
  getValue: (player: Player) => number,
): RankingEntry[] {
  const sorted = [...players].sort((a, b) => {
    const diff = getValue(b) - getValue(a);
    if (diff !== 0) return diff;
    return a.name.localeCompare(b.name, 'pt-BR');
  });

  return sorted.map((player, index) => ({
    playerId: player.id,
    name: player.name,
    value: getValue(player),
    rank: index + 1,
    category,
    isGuest: player.isGuest,
  }));
}

export function buildRankings(players: Player[]): Rankings {
  return {
    goals: sortAndRank(players, 'goals', (p) => p.goals),
    assists: sortAndRank(players, 'assists', (p) => p.assists),
    goalParticipation: sortAndRank(
      players,
      'goalParticipation',
      (p) => p.goals + p.assists,
    ),
    presence: sortAndRank(players, 'presence', (p) => p.matchesPlayed),
  };
}
