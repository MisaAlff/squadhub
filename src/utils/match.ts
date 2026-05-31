import type { Match, MatchResult } from '@/types';

/** Nos mocks, homeScore = Vasco e awayScore = adversário. */
export function getOurScore(match: Match): number {
  return match.homeScore;
}

export function getOpponentScore(match: Match): number {
  return match.awayScore;
}

export function formatMatchScore(match: Match): string {
  return `${getOurScore(match)} x ${getOpponentScore(match)}`;
}

export function formatResultLabel(result: MatchResult): string {
  const labels: Record<MatchResult, string> = {
    win: 'Vitória',
    draw: 'Empate',
    loss: 'Derrota',
  };
  return labels[result];
}

export function getResultBadgeClasses(result: MatchResult): {
  bg: string;
  text: string;
} {
  const classes: Record<MatchResult, { bg: string; text: string }> = {
    win: { bg: 'bg-green-500/20', text: 'text-green-400' },
    draw: { bg: 'bg-amber-500/20', text: 'text-amber-400' },
    loss: { bg: 'bg-rose-500/20', text: 'text-rose-400' },
  };
  return classes[result];
}

export function formatPosition(position: string): string {
  const labels: Record<string, string> = {
    goleiro: 'GOL',
    zagueiro: 'ZAG',
    lateral: 'LAT',
    volante: 'VOL',
    meia: 'MEI',
    atacante: 'ATA',
  };
  return labels[position] ?? position.toUpperCase();
}
