import { mockPlayers } from '@/mocks/players';
import type { Player } from '@/types';

export const playersService = {
  getAll: async (): Promise<Player[]> => {
    return Promise.resolve(mockPlayers);
  },
};
