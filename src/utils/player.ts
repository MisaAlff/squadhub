import type { PlayerPosition } from '@/types';

const POSITION_LABELS: Record<PlayerPosition, string> = {
  goleiro: 'Goleiro',
  zagueiro: 'Zagueiro',
  lateral: 'Lateral',
  volante: 'Volante',
  meia: 'Meia',
  atacante: 'Atacante',
};

const POSITION_ORDER: PlayerPosition[] = [
  'goleiro',
  'zagueiro',
  'lateral',
  'volante',
  'meia',
  'atacante',
];

export function formatPositionLabel(position: PlayerPosition): string {
  return POSITION_LABELS[position];
}

const POSITION_GROUP_LABELS: Record<PlayerPosition, string> = {
  goleiro: 'Goleiros',
  zagueiro: 'Zagueiros',
  lateral: 'Laterais',
  volante: 'Volantes',
  meia: 'Meias',
  atacante: 'Atacantes',
};

export function formatPositionGroupLabel(position: PlayerPosition): string {
  return POSITION_GROUP_LABELS[position];
}

export function getPositionOrder(): PlayerPosition[] {
  return POSITION_ORDER;
}

export function calculateGoalsPerMatch(goals: number, matchesPlayed: number): string {
  if (matchesPlayed === 0) return '—';
  return (goals / matchesPlayed).toFixed(2);
}

export function calculateGoalParticipation(
  goals: number,
  assists: number,
  matchesPlayed: number,
): string {
  if (matchesPlayed === 0) return '—';
  return ((goals + assists) / matchesPlayed).toFixed(2);
}

export function abbreviateOpponent(opponent: string): string {
  const name = opponent.replace(/^vs\s+/i, '').trim();
  const words = name.split(/\s+/);
  if (words.length === 1) {
    return name.slice(0, 3).toUpperCase();
  }
  return words
    .map((word) => word[0])
    .join('')
    .slice(0, 4)
    .toUpperCase();
}
