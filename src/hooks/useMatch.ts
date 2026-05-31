import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/constants/queryKeys';
import { matchesService } from '@/services/matchesService';

export function useMatch(matchId: string) {
  return useQuery({
    queryKey: queryKeys.matches.detail(matchId),
    queryFn: () => matchesService.getById(matchId),
    enabled: !!matchId,
  });
}
