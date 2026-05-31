import type { Goalkeeper } from '@/types/goalkeeper';
import type { Player } from '@/types/player';

export function calculateGoalsConcededPerMatch(
  goalsConceded: number,
  matchesPlayed: number,
): string {
  if (matchesPlayed === 0) return '—';
  return (goalsConceded / matchesPlayed).toFixed(2);
}

export function formatRecord(wins: number, draws: number, losses: number): string {
  return `${wins}V · ${draws}E · ${losses}D`;
}

export function isGoalkeeper(player: Player): player is Goalkeeper {
  return player.position === 'goleiro';
}
