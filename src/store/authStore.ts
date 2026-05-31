import { create } from 'zustand';

import type { User } from '@/types';

const mockUser: User = {
  id: 'u1',
  name: 'Carlos Administrador',
  email: 'carlos@peladafc.com.br',
};

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: () =>
    set({
      user: mockUser,
      isAuthenticated: true,
    }),
  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
    }),
}));
