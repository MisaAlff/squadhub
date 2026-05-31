import { mockGuestPlayers } from '@/mocks/guestPlayers';
import { mockGoalkeepers } from '@/mocks/goalkeepers';
import { mockPlayers } from '@/mocks/players';
import type { Rankings } from '@/types';
import { buildRankings } from '@/utils/rankings';

const allPlayers = [...mockPlayers, ...mockGoalkeepers, ...mockGuestPlayers];

export const mockRankings: Rankings = buildRankings(allPlayers);
