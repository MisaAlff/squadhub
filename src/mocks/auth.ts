import type { User } from '@/types';

export const mockCredentials = {
  email: 'misael@squadhub.com.br',
  password: '123456',
};

export const mockUser: User = {
  id: 'u1',
  name: 'Misael Administrador',
  email: mockCredentials.email,
};
