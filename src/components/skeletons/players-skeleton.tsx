import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DarkScreenHeader } from '@/components/DarkScreenHeader';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';

function PlayerCardSkeletonItem() {
  return (
    <View className="mb-3 flex-row items-center rounded-2xl bg-white p-4 shadow-sm">
      <LoadingSkeleton width={64} height={64} rounded="full" />
      <View className="ml-4 flex-1 gap-2">
        <LoadingSkeleton width={140} height={16} rounded="sm" />
        <LoadingSkeleton width={80} height={12} rounded="sm" />
      </View>
      <LoadingSkeleton width={40} height={40} rounded="full" />
    </View>
  );
}

export function PlayersSkeleton() {
  return (
    <SafeAreaView className="flex-1 bg-surface-secondary" edges={['bottom']}>
      <DarkScreenHeader className="mb-2">
        <LoadingSkeleton width={120} height={24} rounded="md" className="bg-dark-card" />
        <LoadingSkeleton width={160} height={14} rounded="sm" className="mt-2 bg-dark-card" />
      </DarkScreenHeader>
      <View className="px-4 pt-2">
        {Array.from({ length: 8 }).map((_, index) => (
          <PlayerCardSkeletonItem key={index} />
        ))}
      </View>
    </SafeAreaView>
  );
}
