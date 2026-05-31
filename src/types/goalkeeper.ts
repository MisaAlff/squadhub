import type { Player } from './player';

export interface Goalkeeper extends Player {
  saves: number;
  cleanSheets: number;
  goalsConceded: number;
}
