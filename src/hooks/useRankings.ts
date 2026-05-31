import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/constants/queryKeys';
import { rankingsService } from '@/services/rankingsService';

export function useRankings() {
  return useQuery({
    queryKey: queryKeys.rankings.all,
    queryFn: rankingsService.getAll,
  });
}
