import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/constants/queryKeys';
import { playersService } from '@/services/playersService';

export function usePlayers() {
  return useQuery({
    queryKey: queryKeys.players.all,
    queryFn: playersService.getAll,
  });
}
