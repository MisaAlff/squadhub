import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DarkScreenHeader } from '@/components/DarkScreenHeader';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';

function RankingRowSkeleton() {
  return (
    <View className="mb-2 overflow-hidden rounded-2xl border border-slate-700 bg-dark-card">
      <View className="flex-row items-center">
        <LoadingSkeleton width={4} height={72} rounded="none" />
        <View className="flex-1 flex-row items-center p-4">
          <LoadingSkeleton width={40} height={40} rounded="full" />
          <View className="ml-3 flex-1 gap-2">
            <LoadingSkeleton width={120} height={16} rounded="sm" />
            <LoadingSkeleton width={60} height={12} rounded="sm" />
          </View>
          <LoadingSkeleton width={32} height={24} rounded="md" />
        </View>
      </View>
    </View>
  );
}

export function RankingsSkeleton() {
  return (
    <SafeAreaView className="flex-1 bg-surface-secondary" edges={['bottom']}>
      <DarkScreenHeader className="mb-2">
        <LoadingSkeleton width={120} height={24} rounded="md" className="bg-slate-800" />
        <LoadingSkeleton width={180} height={14} rounded="sm" className="mt-2 bg-slate-800" />
      </DarkScreenHeader>

      <View className="border-b border-slate-800 pb-4 pt-4">
        <View className="flex-row gap-2 px-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <LoadingSkeleton key={index} width={90} height={36} rounded="full" />
          ))}
        </View>
      </View>

      <View className="px-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <RankingRowSkeleton key={index} />
        ))}
      </View>
    </SafeAreaView>
  );
}
