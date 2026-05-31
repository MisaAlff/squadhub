import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/constants/queryKeys';
import { matchesService } from '@/services/matchesService';

export function useMatches() {
  return useQuery({
    queryKey: queryKeys.matches.all,
    queryFn: matchesService.getAll,
  });
}
