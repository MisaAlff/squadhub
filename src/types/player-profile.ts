import type { Player } from './player';

export interface PlayerPerformancePoint {
  matchId: string;
  opponent: string;
  goals: number;
  assists: number;
}

export interface PlayerProfile extends Player {
  performanceHistory: PlayerPerformancePoint[];
}
