import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function DashboardScreen() {
  return (
    <SafeAreaView className="flex-1 bg-surface-secondary" edges={['bottom']}>
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-2xl font-bold text-zinc-900">Dashboard</Text>
        <Text className="mt-2 text-center text-zinc-500">
          Visão geral do Pelada FC
        </Text>
      </View>
    </SafeAreaView>
  );
}
