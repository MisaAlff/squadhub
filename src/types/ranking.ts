export type RankingCategory =
  | 'goals'
  | 'assists'
  | 'mvp'
  | 'cleanSheets'
  | 'saves';

export interface RankingEntry {
  playerId: string;
  name: string;
  value: number;
  rank: number;
  category: RankingCategory;
}

export interface Rankings {
  goals: RankingEntry[];
  assists: RankingEntry[];
  mvp: RankingEntry[];
  cleanSheets: RankingEntry[];
  saves: RankingEntry[];
}
