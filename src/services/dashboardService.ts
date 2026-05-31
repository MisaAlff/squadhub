import { mockDashboard } from '@/mocks/dashboard';
import type { DashboardStats } from '@/types';

export const dashboardService = {
  getStats: async (): Promise<DashboardStats> => {
    return Promise.resolve(mockDashboard);
  },
};
