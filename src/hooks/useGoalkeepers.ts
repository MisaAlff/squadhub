import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/constants/queryKeys';
import { goalkeepersService } from '@/services/goalkeepersService';

export function useGoalkeepers() {
  return useQuery({
    queryKey: queryKeys.goalkeepers.all,
    queryFn: goalkeepersService.getAll,
  });
}
