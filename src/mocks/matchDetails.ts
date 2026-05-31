import { GUEST_PLAYER_MIGUEL } from '@/mocks/players';
import { mockMatches } from '@/mocks/matches';
import type { MatchDetails } from '@/types';

const defaultStarters: MatchDetails['lineup']['starters'] = [
  { playerId: 'gk1', name: 'Christian', jerseyNumber: 1, position: 'goleiro' },
  { playerId: 'p7', name: 'Branco', jerseyNumber: 2, position: 'lateral' },
  { playerId: 'p1', name: 'Bressan', jerseyNumber: 4, position: 'zagueiro' },
  { playerId: 'p4', name: 'Gugu', jerseyNumber: 6, position: 'zagueiro' },
  { playerId: 'p9', name: 'Leo', jerseyNumber: 16, position: 'lateral' },
  { playerId: 'p11', name: 'William', jerseyNumber: 8, position: 'volante' },
  { playerId: 'p12', name: 'Taison', jerseyNumber: 10, position: 'volante' },
  { playerId: 'p18', name: 'Igor', jerseyNumber: 7, position: 'meia' },
  { playerId: 'p19', name: 'Vitão', jerseyNumber: 9, position: 'meia' },
  { playerId: 'p25', name: 'Vini', jerseyNumber: 26, position: 'atacante' },
  { playerId: 'p22', name: 'Enzo', jerseyNumber: 23, position: 'meia' },
];

const defaultSubstitutes: MatchDetails['lineup']['substitutes'] = [
  { playerId: 'p2', name: 'Bruninho', jerseyNumber: 3, position: 'zagueiro' },
  { playerId: 'p6', name: 'Kaike', jerseyNumber: 15, position: 'zagueiro' },
  { playerId: 'p10', name: 'Pastel', jerseyNumber: 17, position: 'lateral' },
  { playerId: 'p13', name: 'Pedro', jerseyNumber: 11, position: 'volante' },
  { playerId: 'p23', name: 'Alemão', jerseyNumber: 24, position: 'atacante' },
  { playerId: 'p26', name: 'Samu', jerseyNumber: 27, position: 'atacante' },
];

function buildDetails(
  matchId: string,
  extras: Pick<MatchDetails, 'goals' | 'assists' | 'cards'> & {
    lineup?: MatchDetails['lineup'];
  },
): MatchDetails {
  const base = mockMatches.find((m) => m.id === matchId);
  if (!base) throw new Error(`Match ${matchId} not found`);

  return {
    ...base,
    lineup: extras.lineup ?? { starters: defaultStarters, substitutes: defaultSubstitutes },
    goals: extras.goals,
    assists: extras.assists,
    cards: extras.cards,
  };
}

export const mockMatchDetails: Record<string, MatchDetails> = {
  m1: buildDetails('m1', {
    goals: [
      { playerId: 'p25', playerName: 'Vini', minute: 34 },
      { playerId: 'p19', playerName: 'Vitão', minute: 71 },
    ],
    assists: [{ playerId: 'p18', playerName: 'Igor', minute: 34 }],
    cards: [],
  }),
  m2: buildDetails('m2', {
    goals: [],
    assists: [],
    cards: [{ playerId: 'p2', playerName: 'Bruninho', minute: 55, type: 'yellow' }],
  }),
  m3: buildDetails('m3', {
    goals: [
      { playerId: GUEST_PLAYER_MIGUEL.id, playerName: GUEST_PLAYER_MIGUEL.name, minute: 12 },
      { playerId: GUEST_PLAYER_MIGUEL.id, playerName: GUEST_PLAYER_MIGUEL.name, minute: 38 },
      { playerId: GUEST_PLAYER_MIGUEL.id, playerName: GUEST_PLAYER_MIGUEL.name, minute: 79 },
    ],
    assists: [
      { playerId: 'p18', playerName: 'Igor', minute: 12 },
      { playerId: 'p18', playerName: 'Igor', minute: 38 },
      { playerId: 'p11', playerName: 'William', minute: 79 },
    ],
    cards: [],
    lineup: {
      starters: [
        ...defaultStarters.filter((p) => p.playerId !== 'p22'),
        {
          playerId: GUEST_PLAYER_MIGUEL.id,
          name: GUEST_PLAYER_MIGUEL.name,
          jerseyNumber: 99,
          position: 'atacante',
        },
      ],
      substitutes: defaultSubstitutes,
    },
  }),
  m4: buildDetails('m4', {
    goals: [
      { playerId: 'p22', playerName: 'Enzo', minute: 15 },
      { playerId: 'p1', playerName: 'Bressan', minute: 42 },
      { playerId: 'p11', playerName: 'William', minute: 68 },
    ],
    assists: [
      { playerId: 'p18', playerName: 'Igor', minute: 15 },
      { playerId: 'p1', playerName: 'Bressan', minute: 42 },
    ],
    cards: [],
  }),
  m5: buildDetails('m5', {
    goals: [],
    assists: [],
    cards: [{ playerId: 'p12', playerName: 'Taison', minute: 62, type: 'yellow' }],
  }),
};
