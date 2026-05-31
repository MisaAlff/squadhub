import { getPerformanceHistory } from '@/mocks/playerPerformance';
import { mockGuestPlayers } from '@/mocks/guestPlayers';
import { mockGoalkeepers } from '@/mocks/goalkeepers';
import { mockPlayers } from '@/mocks/players';
import type { Player, PlayerProfile } from '@/types';

const MOCK_DELAY_MS = 400;

export class PlayerNotFoundError extends Error {
  constructor(id: string) {
    super(`Jogador ${id} não encontrado`);
    this.name = 'PlayerNotFoundError';
  }
}

function findPlayer(id: string): Player | undefined {
  return (
    mockPlayers.find((p) => p.id === id) ??
    mockGoalkeepers.find((gk) => gk.id === id) ??
    mockGuestPlayers.find((g) => g.id === id)
  );
}

export const playersService = {
  getAll: async (): Promise<Player[]> => {
    await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS));
    const roster = [...mockPlayers, ...mockGoalkeepers].sort(
      (a, b) => a.jerseyNumber - b.jerseyNumber,
    );
    return [...roster, ...mockGuestPlayers];
  },

  getById: async (id: string): Promise<PlayerProfile> => {
    await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS));
    const player = findPlayer(id);
    if (!player) {
      throw new PlayerNotFoundError(id);
    }
    return {
      ...player,
      performanceHistory: getPerformanceHistory(id),
    };
  },
};
