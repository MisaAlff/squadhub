import { Ionicons } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { APP_NAME } from '@/constants/theme';
import { mockCredentials } from '@/mocks/auth';
import { AuthError } from '@/services/authService';
import { useAuthStore } from '@/store/authStore';

import { loginSchema, type LoginFormData } from './loginSchema';

export function LoginScreen() {
  const login = useAuthStore((state) => state.login);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password);
    } catch (error) {
      const message =
        error instanceof AuthError ? error.message : 'Erro ao entrar. Tente novamente.';
      setError('root', { message });
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-surface-secondary">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView
          className="flex-1"
          contentContainerClassName="flex-grow"
          keyboardShouldPersistTaps="handled"
        >
          <View className="border-b border-slate-800 bg-slate-900 px-6 pb-10 pt-6">
            <View className="flex-row items-center gap-3">
              <View className="h-12 w-12 items-center justify-center rounded-xl bg-primary">
                <Ionicons name="football" size={24} color="#ffffff" />
              </View>
              <View>
                <Text className="text-2xl font-bold text-white">{APP_NAME}</Text>
                <Text className="text-sm text-zinc-400">Gerencie seu time amador</Text>
              </View>
            </View>
          </View>

          <View className="-mt-6 flex-1 px-6 pb-8">
            <View className="rounded-2xl border border-slate-700 bg-dark-card p-6">
              <Text className="text-xl font-bold text-white">Entrar</Text>
              <Text className="mt-1 text-sm text-slate-400">
                Acesse sua conta para ver estatísticas do time
              </Text>

              <View className="mt-6">
                <Text className="mb-1.5 text-sm font-medium text-slate-300">E-mail</Text>
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      className="rounded-xl border border-slate-600 bg-slate-800 px-4 py-3.5 text-base text-white"
                      placeholder="seu@email.com"
                      placeholderTextColor="#64748b"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoComplete="email"
                      editable={!isSubmitting}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                />
                {errors.email ? (
                  <Text className="mt-1.5 text-sm text-red-400">{errors.email.message}</Text>
                ) : null}
              </View>

              <View className="mt-4">
                <Text className="mb-1.5 text-sm font-medium text-slate-300">Senha</Text>
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      className="rounded-xl border border-slate-600 bg-slate-800 px-4 py-3.5 text-base text-white"
                      placeholder="••••••"
                      placeholderTextColor="#64748b"
                      secureTextEntry
                      autoComplete="password"
                      editable={!isSubmitting}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                />
                {errors.password ? (
                  <Text className="mt-1.5 text-sm text-red-400">{errors.password.message}</Text>
                ) : null}
              </View>

              {errors.root ? (
                <View className="mt-4 rounded-lg bg-red-500/15 px-4 py-3">
                  <Text className="text-sm text-red-400">{errors.root.message}</Text>
                </View>
              ) : null}

              <Pressable
                className="mt-6 flex-row items-center justify-center rounded-xl bg-primary py-4 active:bg-primary-dark disabled:opacity-50"
                disabled={isSubmitting}
                onPress={handleSubmit(onSubmit)}
              >
                {isSubmitting ? (
                  <ActivityIndicator color="#ffffff" />
                ) : (
                  <Text className="text-base font-semibold text-white">Entrar</Text>
                )}
              </Pressable>
            </View>

            <Text className="mt-6 text-center text-xs text-slate-500">
              Demo: {mockCredentials.email} / {mockCredentials.password}
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
