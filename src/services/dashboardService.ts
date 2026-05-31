import { mockDashboard } from '@/mocks/dashboard';
import type { DashboardStats } from '@/types';

const MOCK_DELAY_MS = 400;

export const dashboardService = {
  getStats: async (): Promise<DashboardStats> => {
    await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS));
    return mockDashboard;
  },
};
