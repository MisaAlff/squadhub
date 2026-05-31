import { create } from 'zustand';

import { authService } from '@/services/authService';
import type { User } from '@/types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email, password) => {
    const user = await authService.login(email, password);
    set({
      user,
      isAuthenticated: true,
    });
  },
  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
    }),
}));
