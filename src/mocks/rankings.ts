import type { Rankings } from '@/types';

export const mockRankings: Rankings = {
  goals: [
    { playerId: 'g1', name: 'Miguel', value: 3, rank: 1, category: 'goals' },
    { playerId: 'p22', name: 'Enzo', value: 1, rank: 2, category: 'goals' },
    { playerId: 'p1', name: 'Bressan', value: 1, rank: 3, category: 'goals' },
    { playerId: 'p11', name: 'William', value: 1, rank: 4, category: 'goals' },
    { playerId: 'p25', name: 'Vini', value: 1, rank: 5, category: 'goals' },
  ],
  assists: [
    { playerId: 'p18', name: 'Igor', value: 4, rank: 1, category: 'assists' },
    { playerId: 'p1', name: 'Bressan', value: 1, rank: 2, category: 'assists' },
    { playerId: 'p11', name: 'William', value: 1, rank: 3, category: 'assists' },
  ],
  mvp: [
    { playerId: 'g1', name: 'Miguel', value: 1, rank: 1, category: 'mvp' },
    { playerId: 'p6', name: 'Kaike', value: 1, rank: 2, category: 'mvp' },
    { playerId: 'p1', name: 'Bressan', value: 1, rank: 3, category: 'mvp' },
    { playerId: 'p10', name: 'Pastel', value: 1, rank: 4, category: 'mvp' },
    { playerId: 'p11', name: 'William', value: 1, rank: 5, category: 'mvp' },
  ],
  cleanSheets: [
    { playerId: 'gk1', name: 'Christian', value: 2, rank: 1, category: 'cleanSheets' },
  ],
  saves: [
    { playerId: 'gk1', name: 'Christian', value: 18, rank: 1, category: 'saves' },
  ],
};
