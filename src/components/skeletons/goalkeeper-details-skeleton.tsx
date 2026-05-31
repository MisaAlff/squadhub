import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LoadingSkeleton } from '@/components/LoadingSkeleton';

function HeroMetricSkeleton() {
  return (
    <View className="flex-1 rounded-2xl border border-slate-700 bg-slate-800/80 p-4">
      <LoadingSkeleton width={72} height={12} rounded="sm" className="bg-slate-700" />
      <LoadingSkeleton width={40} height={32} rounded="md" className="mt-2 bg-slate-700" />
    </View>
  );
}

function StatCardSkeleton() {
  return (
    <View className="mb-3 w-[48%] rounded-2xl border border-slate-700 bg-slate-800/60 p-4">
      <LoadingSkeleton width={80} height={12} rounded="sm" className="bg-slate-700" />
      <LoadingSkeleton width={48} height={28} rounded="md" className="mt-3 bg-slate-700" />
    </View>
  );
}

export function GoalkeeperDetailsSkeleton() {
  return (
    <SafeAreaView className="flex-1 bg-slate-950" edges={['bottom']}>
      <View className="items-center border-b border-cyan-500/20 bg-slate-900 px-6 pb-8 pt-16">
        <LoadingSkeleton width={88} height={88} rounded="full" className="bg-slate-800" />
        <LoadingSkeleton width={160} height={24} rounded="md" className="mt-4 bg-slate-800" />
        <LoadingSkeleton width={100} height={14} rounded="sm" className="mt-2 bg-slate-800" />
      </View>

      <View className="px-4 pt-4">
        <View className="flex-row gap-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <HeroMetricSkeleton key={index} />
          ))}
        </View>

        <LoadingSkeleton width={120} height={20} rounded="sm" className="mb-3 mt-6 bg-slate-800" />
        <View className="flex-row flex-wrap justify-between">
          {Array.from({ length: 6 }).map((_, index) => (
            <StatCardSkeleton key={index} />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
