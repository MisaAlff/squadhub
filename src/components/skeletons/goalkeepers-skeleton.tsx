import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LoadingSkeleton } from '@/components/LoadingSkeleton';

function GoalkeeperCardSkeletonItem() {
  return (
    <View className="mb-3 overflow-hidden rounded-2xl border border-slate-700/80 bg-dark-card">
      <LoadingSkeleton width="100%" height={4} rounded="none" className="bg-dark-card" />
      <View className="flex-row items-center p-4">
        <LoadingSkeleton width={64} height={64} rounded="full" className="bg-dark" />
        <View className="ml-4 flex-1 gap-2">
          <LoadingSkeleton width={140} height={16} rounded="sm" className="bg-dark" />
          <LoadingSkeleton width={180} height={12} rounded="sm" className="bg-dark" />
        </View>
      </View>
      <View className="flex-row gap-2 px-4 pb-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <LoadingSkeleton key={index} width="30%" height={52} rounded="lg" className="flex-1 bg-dark" />
        ))}
      </View>
    </View>
  );
}

export function GoalkeepersSkeleton() {
  return (
    <SafeAreaView className="flex-1 bg-slate-950" edges={['bottom']}>
      <View className="border-b border-slate-800 bg-slate-900 px-6 pb-6 pt-14">
        <LoadingSkeleton width={120} height={24} rounded="md" className="bg-slate-800" />
        <LoadingSkeleton width={160} height={14} rounded="sm" className="mt-2 bg-slate-800" />
      </View>
      <View className="px-4 pt-4">
        {Array.from({ length: 2 }).map((_, index) => (
          <GoalkeeperCardSkeletonItem key={index} />
        ))}
      </View>
    </SafeAreaView>
  );
}
