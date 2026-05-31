import type { Player } from './player';

export interface Goalkeeper extends Player {
  wins: number;
  draws: number;
  losses: number;
  saves: number;
  cleanSheets: number;
  goalsConceded: number;
  penaltiesSaved: number;
}
