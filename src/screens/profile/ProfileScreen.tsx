import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Avatar } from '@/components/Avatar';
import { useAuthStore } from '@/store/authStore';

export function ProfileScreen() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <SafeAreaView className="flex-1 bg-surface-secondary" edges={['bottom']}>
      <View className="flex-1 items-center justify-center px-6">
        {user ? (
          <>
            <Avatar name={user.name} imageUrl={user.avatarUrl} size="lg" />
            <Text className="mt-4 text-2xl font-bold text-white">{user.name}</Text>
            <Text className="mt-1 text-slate-400">{user.email}</Text>
          </>
        ) : null}

        <Pressable
          className="mt-8 rounded-lg border border-rose-500/40 px-6 py-3 active:bg-rose-500/10"
          onPress={logout}
        >
          <Text className="font-medium text-rose-400">Sair</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
