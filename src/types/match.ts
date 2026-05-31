export type MatchResult = 'win' | 'draw' | 'loss';

export interface Match {
  id: string;
  date: string;
  opponent: string;
  homeScore: number;
  awayScore: number;
  isHome: boolean;
  result: MatchResult;
  location: string;
  mvpPlayerId?: string;
}
