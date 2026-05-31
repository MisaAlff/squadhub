import { mockGuestPlayers } from '@/mocks/guestPlayers';
import { mockGoalkeepers } from '@/mocks/goalkeepers';
import { mockPlayers } from '@/mocks/players';
import type { Rankings } from '@/types';
import { buildRankings } from '@/utils/rankings';

const MOCK_DELAY_MS = 400;

export const rankingsService = {
  getAll: async (): Promise<Rankings> => {
    await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS));
    const allPlayers = [...mockPlayers, ...mockGoalkeepers, ...mockGuestPlayers];
    return buildRankings(allPlayers);
  },
};
