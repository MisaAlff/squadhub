import { mockMatches } from '@/mocks/matches';
import type { Match } from '@/types';

export const matchesService = {
  getAll: async (): Promise<Match[]> => {
    return Promise.resolve(mockMatches);
  },
};
