import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DarkScreenHeader } from '@/components/DarkScreenHeader';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';

function MatchCardSkeletonItem() {
  return (
    <View className="mb-3 rounded-2xl border border-slate-700 bg-dark-card p-4">
      <View className="flex-row items-center justify-between">
        <LoadingSkeleton width={100} height={12} rounded="sm" />
        <LoadingSkeleton width={56} height={22} rounded="full" />
      </View>
      <View className="mt-3 flex-row items-center justify-between">
        <LoadingSkeleton width={160} height={16} rounded="sm" />
        <LoadingSkeleton width={48} height={24} rounded="md" />
      </View>
    </View>
  );
}

export function MatchesSkeleton() {
  return (
    <SafeAreaView className="flex-1 bg-surface-secondary" edges={['bottom']}>
      <DarkScreenHeader className="mb-2">
        <LoadingSkeleton width={80} height={24} rounded="md" className="bg-slate-800" />
        <LoadingSkeleton width={120} height={14} rounded="sm" className="mt-2 bg-slate-800" />
      </DarkScreenHeader>
      <View className="px-4 pt-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <MatchCardSkeletonItem key={index} />
        ))}
      </View>
    </SafeAreaView>
  );
}
