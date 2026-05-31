import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LoadingSkeleton } from '@/components/LoadingSkeleton';

function SectionSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <View className="mb-4 rounded-2xl border border-slate-700 bg-dark-card p-4">
      <LoadingSkeleton width={100} height={16} rounded="sm" />
      {Array.from({ length: rows }).map((_, index) => (
        <LoadingSkeleton
          key={index}
          width="100%"
          height={14}
          rounded="sm"
          className="mt-3"
        />
      ))}
    </View>
  );
}

export function MatchDetailsSkeleton() {
  return (
    <SafeAreaView className="flex-1 bg-surface-secondary" edges={['bottom']}>
      <View className="border-b border-slate-800 bg-slate-900 px-6 pb-8 pt-4">
        <LoadingSkeleton width={180} height={14} rounded="sm" className="bg-slate-800" />
        <LoadingSkeleton width={220} height={28} rounded="md" className="mt-3 bg-slate-800" />
        <LoadingSkeleton width={140} height={14} rounded="sm" className="mt-2 bg-slate-800" />
        <LoadingSkeleton width={80} height={36} rounded="md" className="mt-4 bg-slate-800" />
      </View>
      <View className="-mt-4 px-4">
        <SectionSkeleton rows={5} />
        <SectionSkeleton rows={3} />
        <SectionSkeleton rows={2} />
        <SectionSkeleton rows={2} />
      </View>
    </SafeAreaView>
  );
}
