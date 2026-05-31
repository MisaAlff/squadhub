const MONTHS_PT = [
  'jan',
  'fev',
  'mar',
  'abr',
  'mai',
  'jun',
  'jul',
  'ago',
  'set',
  'out',
  'nov',
  'dez',
] as const;

export function formatMatchDate(isoDate: string): string {
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = MONTHS_PT[date.getMonth()];
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day} ${month}, ${hours}:${minutes}`;
}

export function formatGoalDifference(goalsFor: number, goalsAgainst: number): string {
  const diff = goalsFor - goalsAgainst;

  if (diff > 0) return `+${diff}`;
  if (diff < 0) return `${diff}`;
  return '0';
}

export function getGoalDifferenceVariant(
  goalsFor: number,
  goalsAgainst: number,
): 'success' | 'danger' | 'default' {
  const diff = goalsFor - goalsAgainst;
  if (diff > 0) return 'success';
  if (diff < 0) return 'danger';
  return 'default';
}
