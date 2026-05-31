import type { Player } from '@/types';

/** Jogadores que completaram o elenco em partidas específicas. */
export const mockGuestPlayers: Player[] = [
  {
    id: 'g1',
    name: 'Miguel',
    position: 'atacante',
    jerseyNumber: 99,
    goals: 3,
    assists: 0,
    matchesPlayed: 1,
    yellowCards: 0,
    redCards: 0,
    mvpCount: 1,
    isGuest: true,
  },
];
