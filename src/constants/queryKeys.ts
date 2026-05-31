export const queryKeys = {
  dashboard: {
    all: ['dashboard'] as const,
  },
  matches: {
    all: ['matches'] as const,
    detail: (id: string) => ['matches', id] as const,
  },
  players: {
    all: ['players'] as const,
    detail: (id: string) => ['players', id] as const,
  },
  goalkeepers: {
    all: ['goalkeepers'] as const,
  },
  rankings: {
    all: ['rankings'] as const,
  },
} as const;
