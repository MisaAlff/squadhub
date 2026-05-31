import { mockMatchDetails } from '@/mocks/matchDetails';
import { mockMatches } from '@/mocks/matches';
import type { Match, MatchDetails } from '@/types';

const MOCK_DELAY_MS = 400;

export class MatchNotFoundError extends Error {
  constructor(id: string) {
    super(`Partida ${id} não encontrada`);
    this.name = 'MatchNotFoundError';
  }
}

export const matchesService = {
  getAll: async (): Promise<Match[]> => {
    await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS));
    return [...mockMatches].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  },

  getById: async (id: string): Promise<MatchDetails> => {
    await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS));
    const match = mockMatchDetails[id];
    if (!match) {
      throw new MatchNotFoundError(id);
    }
    return match;
  },
};
