import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/constants/queryKeys';
import { playersService } from '@/services/playersService';

export function usePlayer(playerId: string) {
  return useQuery({
    queryKey: queryKeys.players.detail(playerId),
    queryFn: () => playersService.getById(playerId),
    enabled: !!playerId,
  });
}
