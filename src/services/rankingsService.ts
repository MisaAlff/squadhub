import { mockRankings } from '@/mocks/rankings';
import type { Rankings } from '@/types';

export const rankingsService = {
  getAll: async (): Promise<Rankings> => {
    return Promise.resolve(mockRankings);
  },
};
