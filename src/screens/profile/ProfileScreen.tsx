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
            <Text className="mt-4 text-2xl font-bold text-zinc-900">{user.name}</Text>
            <Text className="mt-1 text-zinc-500">{user.email}</Text>
          </>
        ) : null}

        <Pressable
          className="mt-8 rounded-lg border border-red-300 px-6 py-3 active:bg-red-50"
          onPress={logout}
        >
          <Text className="font-medium text-red-600">Sair</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
