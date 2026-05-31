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

function HighlightCardSkeleton() {
  return (
    <View className="mb-3 flex-row overflow-hidden rounded-2xl bg-white shadow-sm">
      <LoadingSkeleton width={4} height={72} rounded="none" />
      <View className="flex-1 flex-row items-center gap-3 p-4">
        <LoadingSkeleton width={44} height={44} rounded="full" />
        <View className="flex-1 gap-2">
          <LoadingSkeleton width={100} height={12} rounded="sm" />
          <LoadingSkeleton width={140} height={16} rounded="sm" />
        </View>
      </View>
    </View>
  );
}

export function DashboardSkeleton() {
  return (
    <SafeAreaView className="flex-1 bg-surface-secondary" edges={['bottom']}>
      <View className="bg-dark px-6 pb-8 pt-4">
        <LoadingSkeleton width={160} height={28} rounded="md" className="bg-dark-card" />
        <LoadingSkeleton width={100} height={14} rounded="sm" className="mt-2 bg-dark-card" />
        <LoadingSkeleton width={72} height={28} rounded="full" className="mt-4 bg-dark-card" />
      </View>

      <View className="-mt-4 flex-1 px-4">
        <LoadingSkeleton width={120} height={20} rounded="sm" className="mb-3" />

        <View className="flex-row flex-wrap justify-between">
          {Array.from({ length: 8 }).map((_, index) => (
            <StatCardSkeleton key={index} />
          ))}
        </View>

        <LoadingSkeleton width={100} height={20} rounded="sm" className="mb-3 mt-4" />

        {Array.from({ length: 3 }).map((_, index) => (
          <HighlightCardSkeleton key={index} />
        ))}
      </View>
    </SafeAreaView>
  );
}
