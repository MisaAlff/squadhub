import type { Rankings } from '@/types';

export const mockRankings: Rankings = {
  goals: [
    { playerId: 'p1', name: 'Rafael Souza', value: 12, rank: 1, category: 'goals' },
    { playerId: 'p6', name: 'André Lima', value: 8, rank: 2, category: 'goals' },
    { playerId: 'p2', name: 'Lucas Mendes', value: 6, rank: 3, category: 'goals' },
    { playerId: 'p11', name: 'Caio Barbosa', value: 4, rank: 4, category: 'goals' },
    { playerId: 'p7', name: 'Marcos Vieira', value: 3, rank: 5, category: 'goals' },
  ],
  assists: [
    { playerId: 'p2', name: 'Lucas Mendes', value: 9, rank: 1, category: 'assists' },
    { playerId: 'p7', name: 'Marcos Vieira', value: 6, rank: 2, category: 'assists' },
    { playerId: 'p5', name: 'Felipe Rocha', value: 5, rank: 3, category: 'assists' },
    { playerId: 'p12', name: 'Vinícius Teixeira', value: 4, rank: 4, category: 'assists' },
    { playerId: 'p1', name: 'Rafael Souza', value: 4, rank: 5, category: 'assists' },
  ],
  mvp: [
    { playerId: 'p1', name: 'Rafael Souza', value: 3, rank: 1, category: 'mvp' },
    { playerId: 'p6', name: 'André Lima', value: 2, rank: 2, category: 'mvp' },
    { playerId: 'p2', name: 'Lucas Mendes', value: 2, rank: 3, category: 'mvp' },
    { playerId: 'p5', name: 'Felipe Rocha', value: 1, rank: 4, category: 'mvp' },
    { playerId: 'p7', name: 'Marcos Vieira', value: 1, rank: 5, category: 'mvp' },
  ],
  cleanSheets: [
    { playerId: 'gk1', name: 'Matheus Oliveira', value: 3, rank: 1, category: 'cleanSheets' },
    { playerId: 'gk2', name: 'Renato Silva', value: 1, rank: 2, category: 'cleanSheets' },
  ],
  saves: [
    { playerId: 'gk1', name: 'Matheus Oliveira', value: 42, rank: 1, category: 'saves' },
    { playerId: 'gk2', name: 'Renato Silva', value: 9, rank: 2, category: 'saves' },
  ],
};
