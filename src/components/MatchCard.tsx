import { Pressable, Text, View } from 'react-native';

import type { Match } from '@/types';
import { formatMatchDate } from '@/utils/formatDate';
import {
  formatMatchScore,
  formatResultLabel,
  getResultBadgeClasses,
} from '@/utils/match';

interface MatchCardProps {
  match: Match;
  onPress: () => void;
}

export function MatchCard({ match, onPress }: MatchCardProps) {
  const badge = getResultBadgeClasses(match.result);

  return (
    <Pressable
      className="mb-3 rounded-2xl border border-slate-700 bg-dark-card p-4 active:opacity-90"
      onPress={onPress}
    >
      <View className="flex-row items-center justify-between">
        <Text className="text-sm text-slate-400">{formatMatchDate(match.date)}</Text>
        <View className={`rounded-full px-2.5 py-1 ${badge.bg}`}>
          <Text className={`text-xs font-semibold ${badge.text}`}>
            {formatResultLabel(match.result)}
          </Text>
        </View>
      </View>

      <View className="mt-3 flex-row items-center justify-between">
        <Text className="flex-1 text-base font-semibold text-white">
          vs {match.opponent}
        </Text>
        <Text className="text-xl font-bold text-white">{formatMatchScore(match)}</Text>
      </View>
    </Pressable>
  );
}
