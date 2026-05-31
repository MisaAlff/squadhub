import type { RankingCategory, Rankings } from '@/types';

export type RankingsTabId = RankingCategory;

export interface RankingsTabConfig {
  id: RankingsTabId;
  label: string;
  subtitle: string;
  valueLabel: string;
  dataKey: keyof Rankings;
}

export const RANKINGS_TABS: RankingsTabConfig[] = [
  {
    id: 'goals',
    label: 'Artilharia',
    subtitle: 'Jogadores com mais gols marcados',
    valueLabel: 'gols',
    dataKey: 'goals',
  },
  {
    id: 'assists',
    label: 'Assistências',
    subtitle: 'Jogadores com mais assistências',
    valueLabel: 'assistências',
    dataKey: 'assists',
  },
  {
    id: 'goalParticipation',
    label: 'Part. em gols',
    subtitle: 'Soma de gols e assistências por jogador',
    valueLabel: 'part.',
    dataKey: 'goalParticipation',
  },
  {
    id: 'presence',
    label: 'Presença',
    subtitle: 'Jogadores com mais partidas disputadas',
    valueLabel: 'jogos',
    dataKey: 'presence',
  },
];
