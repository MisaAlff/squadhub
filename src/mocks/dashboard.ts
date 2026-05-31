import type { DashboardStats } from '@/types';

import { mockNextMatch } from './matches';

export const mockDashboard: DashboardStats = {
  teamName: 'Pelada FC',
  season: '2025/2026',
  wins: 4,
  draws: 2,
  losses: 2,
  goalsFor: 17,
  goalsAgainst: 10,
  winRate: 50,
  topScorer: {
    playerId: 'p1',
    name: 'Rafael Souza',
    goals: 12,
  },
  topAssists: {
    playerId: 'p2',
    name: 'Lucas Mendes',
    assists: 9,
  },
  nextMatch: mockNextMatch,
  totalMatches: 8,
};
