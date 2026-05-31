import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { cn } from '@/utils/cn';

interface RankingItemProps {
  rank: number;
  name: string;
  value: number;
  valueLabel: string;
  isGuest?: boolean;
}

const TOP_RANK_STYLES = {
  1: {
    border: 'border-amber-400/50',
    accent: '#fbbf24',
    badge: 'bg-amber-500/20',
    rankText: 'text-amber-300',
  },
  2: {
    border: 'border-slate-400/50',
    accent: '#cbd5e1',
    badge: 'bg-slate-500/20',
    rankText: 'text-slate-300',
  },
  3: {
    border: 'border-amber-600/50',
    accent: '#d97706',
    badge: 'bg-amber-700/20',
    rankText: 'text-amber-500',
  },
} as const;

function RankBadge({ rank }: { rank: number }) {
  const topStyle = TOP_RANK_STYLES[rank as 1 | 2 | 3];

  if (topStyle) {
    return (
      <View className={`h-10 w-10 items-center justify-center rounded-full ${topStyle.badge}`}>
        <Ionicons name="medal" size={22} color={topStyle.accent} />
      </View>
    );
  }

  return (
    <View className="h-10 w-10 items-center justify-center rounded-full bg-slate-700">
      <Text className="text-sm font-bold text-slate-300">{rank}</Text>
    </View>
  );
}

export function RankingItem({ rank, name, value, valueLabel, isGuest }: RankingItemProps) {
  const isTopThree = rank <= 3;
  const topStyle = isTopThree ? TOP_RANK_STYLES[rank as 1 | 2 | 3] : null;

  return (
    <View
      className={cn(
        'mb-2 overflow-hidden rounded-2xl border bg-dark-card',
        isTopThree ? topStyle?.border : 'border-slate-700',
      )}
    >
      <View className="flex-row items-stretch">
        {isTopThree ? (
          <View style={{ width: 4, backgroundColor: topStyle?.accent }} />
        ) : null}

        <View className="flex-1 flex-row items-center p-4">
          <RankBadge rank={rank} />

          <View className="ml-3 flex-1">
            <View className="flex-row flex-wrap items-center gap-2">
              <Text
                className={cn(
                  'text-base font-semibold',
                  isTopThree ? 'text-white' : 'text-slate-200',
                )}
              >
                {name}
              </Text>
              {isGuest ? (
                <View className="rounded-full bg-amber-500/20 px-2 py-0.5">
                  <Text className="text-[10px] font-semibold uppercase text-amber-300">
                    Completou
                  </Text>
                </View>
              ) : null}
            </View>
            {isTopThree ? (
              <Text className={cn('mt-0.5 text-xs font-medium', topStyle?.rankText)}>
                {rank}º lugar
              </Text>
            ) : null}
          </View>

          <View className="items-end">
            <Text
              className={cn(
                'text-xl font-bold',
                isTopThree ? topStyle?.rankText : 'text-white',
              )}
            >
              {value}
            </Text>
            <Text className="text-xs text-slate-500">{valueLabel}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
