import type { DashboardStats } from '@/types';

import { mockNextMatch } from './matches';

export const mockDashboard: DashboardStats = {
  teamName: 'Vasco',
  season: '2025/2026',
  wins: 2,
  draws: 2,
  losses: 1,
  goalsFor: 8,
  goalsAgainst: 7,
  winRate: 40,
  topScorer: {
    playerId: 'p22',
    name: 'Enzo',
    goals: 1,
  },
  topAssists: {
    playerId: 'p18',
    name: 'Igor',
    assists: 4,
  },
  nextMatch: mockNextMatch,
  totalMatches: 5,
};
