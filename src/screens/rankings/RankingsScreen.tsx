import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DarkScreenHeader } from '@/components/DarkScreenHeader';
import { EmptyState } from '@/components/EmptyState';
import { RankingList } from '@/components/RankingList';
import { RankingsSkeleton } from '@/components/skeletons/rankings-skeleton';
import { useRankings } from '@/hooks/useRankings';
import { RANKINGS_TABS, type RankingsTabId } from '@/screens/rankings/rankingTabs';
import type { Rankings } from '@/types';
import { cn } from '@/utils/cn';

interface RankingsTabsProps {
  activeTab: RankingsTabId;
  onTabChange: (tab: RankingsTabId) => void;
}

function RankingsTabs({ activeTab, onTabChange }: RankingsTabsProps) {
  return (
    <View className="border-b border-slate-800 bg-surface-secondary pb-4 pt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-2 px-4"
      >
        {RANKINGS_TABS.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <Pressable
              key={tab.id}
              className={cn(
                'rounded-full border px-4 py-2.5',
                isActive
                  ? 'border-primary bg-primary/20'
                  : 'border-slate-700 bg-slate-800',
              )}
              onPress={() => onTabChange(tab.id)}
            >
              <Text
                className={cn(
                  'text-sm font-medium',
                  isActive ? 'text-primary' : 'text-slate-400',
                )}
              >
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

function RankingsContent({ data }: { data: Rankings }) {
  const [activeTab, setActiveTab] = useState<RankingsTabId>('goals');
  const currentTab = RANKINGS_TABS.find((tab) => tab.id === activeTab) ?? RANKINGS_TABS[0];
  const entries = data[currentTab.dataKey];

  return (
    <View className="flex-1">
      <DarkScreenHeader>
        <View className="flex-row items-center gap-2">
          <View className="rounded-full bg-primary/20 p-2">
            <Ionicons name="trophy-outline" size={22} color="#22c55e" />
          </View>
          <View className="flex-1">
            <Text className="text-2xl font-bold text-white">Rankings</Text>
            <Text className="mt-1 text-sm text-slate-400">{currentTab.subtitle}</Text>
          </View>
        </View>
      </DarkScreenHeader>

      <RankingsTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <RankingList entries={entries} valueLabel={currentTab.valueLabel} />
    </View>
  );
}

export function RankingsScreen() {
  const { data, isLoading, isError } = useRankings();

  if (isLoading) {
    return <RankingsSkeleton />;
  }

  if (isError || !data) {
    return (
      <SafeAreaView className="flex-1 bg-surface-secondary" edges={['top', 'bottom']}>
        <EmptyState
          icon={<Ionicons name="alert-circle-outline" size={48} color="#64748b" />}
          title="Erro ao carregar rankings"
          description="Não foi possível carregar os rankings do time."
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-surface-secondary" edges={['bottom']}>
      <RankingsContent data={data} />
    </SafeAreaView>
  );
}
