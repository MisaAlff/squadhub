import { FlatList, Text, View } from 'react-native';

import { RankingItem } from '@/components/RankingItem';
import type { RankingEntry } from '@/types';

interface RankingListProps {
  entries: RankingEntry[];
  valueLabel: string;
}

export function RankingList({ entries, valueLabel }: RankingListProps) {
  if (entries.length === 0) {
    return (
      <View className="flex-1 items-center justify-center px-6 py-12">
        <Text className="text-center text-sm text-slate-400">
          Nenhum dado disponível para este ranking.
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={entries}
      keyExtractor={(item) => `${item.category}-${item.playerId}`}
      renderItem={({ item }) => (
        <RankingItem
          rank={item.rank}
          name={item.name}
          value={item.value}
          valueLabel={valueLabel}
          isGuest={item.isGuest}
        />
      )}
      contentContainerClassName="px-4 pb-6 pt-2"
      showsVerticalScrollIndicator={false}
    />
  );
}
