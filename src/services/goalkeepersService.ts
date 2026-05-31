import { mockGoalkeepers } from '@/mocks/goalkeepers';
import type { Goalkeeper } from '@/types';

export const goalkeepersService = {
  getAll: async (): Promise<Goalkeeper[]> => {
    return Promise.resolve(mockGoalkeepers);
  },
};
