import type { Match } from './match';

export interface DashboardStats {
  teamName: string;
  season: string;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  winRate: number;
  topScorer: {
    playerId: string;
    name: string;
    goals: number;
  };
  nextMatch: Match | null;
  totalMatches: number;
}
