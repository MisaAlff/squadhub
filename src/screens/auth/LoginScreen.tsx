import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';

import { APP_NAME } from '@/constants/theme';
import { useAuthStore } from '@/store/authStore';

import { loginSchema, type LoginFormData } from './loginSchema';

export function LoginScreen() {
  const login = useAuthStore((state) => state.login);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (_data: LoginFormData) => {
    login();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white"
    >
      <View className="flex-1 justify-center px-6">
        <Text className="text-3xl font-bold text-zinc-900">{APP_NAME}</Text>
        <Text className="mt-2 text-base text-zinc-500">
          Gerencie seu time amador
        </Text>

        <View className="mt-10">
          <Text className="mb-1 text-sm font-medium text-zinc-700">E-mail</Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className="rounded-lg border border-zinc-300 px-4 py-3 text-base text-zinc-900"
                placeholder="seu@email.com"
                placeholderTextColor="#a1a1aa"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.email ? (
            <Text className="mt-1 text-sm text-red-600">{errors.email.message}</Text>
          ) : null}
        </View>

        <View className="mt-4">
          <Text className="mb-1 text-sm font-medium text-zinc-700">Senha</Text>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className="rounded-lg border border-zinc-300 px-4 py-3 text-base text-zinc-900"
                placeholder="••••••"
                placeholderTextColor="#a1a1aa"
                secureTextEntry
                autoComplete="password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.password ? (
            <Text className="mt-1 text-sm text-red-600">{errors.password.message}</Text>
          ) : null}
        </View>

        <Pressable
          className="mt-8 items-center rounded-lg bg-primary py-4 active:bg-primary-dark"
          onPress={handleSubmit(onSubmit)}
        >
          <Text className="text-base font-semibold text-white">Entrar</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
