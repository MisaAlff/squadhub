import type { Goalkeeper } from '@/types';

export const mockGoalkeepers: Goalkeeper[] = [
  {
    id: 'gk1',
    name: 'Matheus Oliveira',
    position: 'goleiro',
    jerseyNumber: 1,
    goals: 0,
    assists: 0,
    matchesPlayed: 8,
    yellowCards: 1,
    redCards: 0,
    mvpCount: 1,
    saves: 42,
    cleanSheets: 3,
    goalsConceded: 11,
  },
  {
    id: 'gk2',
    name: 'Renato Silva',
    position: 'goleiro',
    jerseyNumber: 12,
    goals: 0,
    assists: 0,
    matchesPlayed: 2,
    yellowCards: 0,
    redCards: 0,
    mvpCount: 0,
    saves: 9,
    cleanSheets: 1,
    goalsConceded: 3,
  },
];
