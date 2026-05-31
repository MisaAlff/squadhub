import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/constants/queryKeys';
import { goalkeepersService } from '@/services/goalkeepersService';

export function useGoalkeeper(goalkeeperId: string) {
  return useQuery({
    queryKey: queryKeys.goalkeepers.detail(goalkeeperId),
    queryFn: () => goalkeepersService.getById(goalkeeperId),
    enabled: !!goalkeeperId,
  });
}
