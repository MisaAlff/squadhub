export type PlayerPosition =
  | 'goleiro'
  | 'zagueiro'
  | 'lateral'
  | 'volante'
  | 'meia'
  | 'atacante';

export interface Player {
  id: string;
  name: string;
  position: PlayerPosition;
  jerseyNumber: number;
  goals: number;
  assists: number;
  matchesPlayed: number;
  yellowCards: number;
  redCards: number;
  mvpCount: number;
  avatarUrl?: string;
}
