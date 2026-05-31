import { mockCredentials, mockUser } from '@/mocks/auth';
import type { User } from '@/types';

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthError';
  }
}

export const authService = {
  login: async (email: string, password: string): Promise<User> => {
    await new Promise((resolve) => setTimeout(resolve, 300));

    const isValid =
      email.toLowerCase() === mockCredentials.email.toLowerCase() &&
      password === mockCredentials.password;

    if (!isValid) {
      throw new AuthError('Credenciais inválidas');
    }

    return mockUser;
  },
};
