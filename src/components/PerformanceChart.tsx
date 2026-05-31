import { Text, View } from 'react-native';

import type { PlayerPerformancePoint } from '@/types';
import { abbreviateOpponent } from '@/utils/player';

interface PerformanceChartProps {
  data: PlayerPerformancePoint[];
}

const MAX_BAR_HEIGHT = 80;

export function PerformanceChart({ data }: PerformanceChartProps) {
  const hasActivity = data.some((point) => point.goals > 0 || point.assists > 0);

  if (!hasActivity) {
    return (
      <View className="rounded-2xl border border-slate-700 bg-dark-card p-6">
        <Text className="text-center text-sm text-slate-400">
          Sem dados de desempenho neste período
        </Text>
      </View>
    );
  }

  const maxValue = Math.max(
    ...data.map((point) => point.goals + point.assists),
    1,
  );

  return (
    <View className="rounded-2xl border border-slate-700 bg-dark-card p-4">
      <View className="flex-row items-end justify-between gap-2">
        {data.map((point) => {
          const total = point.goals + point.assists;
          const goalsHeight = (point.goals / maxValue) * MAX_BAR_HEIGHT;
          const assistsHeight = (point.assists / maxValue) * MAX_BAR_HEIGHT;

          return (
            <View key={point.matchId} className="flex-1 items-center">
              <View
                className="w-full flex-row items-end justify-center gap-0.5"
                style={{ height: MAX_BAR_HEIGHT }}
              >
                <View
                  className="w-3 rounded-t-sm bg-primary"
                  style={{ height: Math.max(goalsHeight, point.goals > 0 ? 4 : 0) }}
                />
                <View
                  className="w-3 rounded-t-sm bg-blue-500"
                  style={{ height: Math.max(assistsHeight, point.assists > 0 ? 4 : 0) }}
                />
              </View>
              <Text className="mt-2 text-[10px] font-medium text-slate-400">
                {abbreviateOpponent(point.opponent)}
              </Text>
            </View>
          );
        })}
      </View>

      <View className="mt-4 flex-row justify-center gap-4">
        <View className="flex-row items-center gap-1.5">
          <View className="h-3 w-3 rounded-sm bg-primary" />
          <Text className="text-xs text-slate-400">Gols</Text>
        </View>
        <View className="flex-row items-center gap-1.5">
          <View className="h-3 w-3 rounded-sm bg-blue-500" />
          <Text className="text-xs text-slate-400">Assistências</Text>
        </View>
      </View>
    </View>
  );
}
