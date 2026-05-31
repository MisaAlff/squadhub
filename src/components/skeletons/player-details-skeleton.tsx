import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LoadingSkeleton } from '@/components/LoadingSkeleton';

function StatCardSkeleton() {
  return (
    <View className="mb-3 w-[48%] rounded-2xl bg-white p-4 shadow-sm">
      <LoadingSkeleton width={80} height={12} rounded="sm" />
      <LoadingSkeleton width={48} height={28} rounded="md" className="mt-3" />
    </View>
  );
}

export function PlayerDetailsSkeleton() {
  return (
    <SafeAreaView className="flex-1 bg-surface-secondary" edges={['bottom']}>
      <View className="items-center bg-dark px-6 pb-10 pt-16">
        <LoadingSkeleton width={80} height={80} rounded="full" className="bg-dark-card" />
        <LoadingSkeleton width={160} height={24} rounded="md" className="mt-4 bg-dark-card" />
        <LoadingSkeleton width={100} height={14} rounded="sm" className="mt-2 bg-dark-card" />
      </View>
      <View className="-mt-6 px-4">
        <LoadingSkeleton width={120} height={20} rounded="sm" className="mb-3" />
        <View className="flex-row flex-wrap justify-between">
          {Array.from({ length: 7 }).map((_, index) => (
            <StatCardSkeleton key={index} />
          ))}
        </View>
        <LoadingSkeleton width={160} height={20} rounded="sm" className="mb-3 mt-4" />
        <View className="rounded-2xl bg-white p-4 shadow-sm">
          <LoadingSkeleton width="100%" height={100} rounded="md" />
        </View>
      </View>
    </SafeAreaView>
  );
}
