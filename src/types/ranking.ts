export type RankingCategory =
  | 'goals'
  | 'assists'
  | 'goalParticipation'
  | 'presence';

export interface RankingEntry {
  playerId: string;
  name: string;
  value: number;
  rank: number;
  category: RankingCategory;
  isGuest?: boolean;
}

export interface Rankings {
  goals: RankingEntry[];
  assists: RankingEntry[];
  goalParticipation: RankingEntry[];
  presence: RankingEntry[];
}
