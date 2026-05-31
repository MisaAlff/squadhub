import { mockGoalkeepers } from '@/mocks/goalkeepers';
import type { Goalkeeper } from '@/types';

const MOCK_DELAY_MS = 400;

export class GoalkeeperNotFoundError extends Error {
  constructor(id: string) {
    super(`Goleiro ${id} não encontrado`);
    this.name = 'GoalkeeperNotFoundError';
  }
}

export const goalkeepersService = {
  getAll: async (): Promise<Goalkeeper[]> => {
    await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS));
    return [...mockGoalkeepers].sort((a, b) => a.jerseyNumber - b.jerseyNumber);
  },

  getById: async (id: string): Promise<Goalkeeper> => {
    await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS));
    const goalkeeper = mockGoalkeepers.find((gk) => gk.id === id);
    if (!goalkeeper) {
      throw new GoalkeeperNotFoundError(id);
    }
    return goalkeeper;
  },
};
