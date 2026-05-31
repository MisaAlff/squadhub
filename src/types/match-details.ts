import type { Match } from './match';
import type { PlayerPosition } from './player';

export interface Goal {
  playerId: string;
  playerName: string;
  minute: number;
}

export interface Assist {
  playerId: string;
  playerName: string;
  minute: number;
}

export type DisciplinaryCardType = 'yellow' | 'red';

export interface Card {
  playerId: string;
  playerName: string;
  minute: number;
  type: DisciplinaryCardType;
}

export interface LineupPlayer {
  playerId: string;
  name: string;
  jerseyNumber: number;
  position: PlayerPosition;
}

export interface Lineup {
  starters: LineupPlayer[];
  substitutes: LineupPlayer[];
}

export interface MatchDetails extends Match {
  lineup: Lineup;
  goals: Goal[];
  assists: Assist[];
  cards: Card[];
}
