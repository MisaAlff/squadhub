import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import { Avatar } from '@/components/Avatar';
import type { Goalkeeper } from '@/types';
import { calculateGoalsConcededPerMatch, formatRecord } from '@/utils/goalkeeper';

interface GoalkeeperCardProps {
  goalkeeper: Goalkeeper;
  onPress: () => void;
}

function MetricPill({
  icon,
  label,
  value,
  tone,
}: {
  icon: React.ComponentProps<typeof Ionicons>['name'];
  label: string;
  value: string | number;
  tone: 'cyan' | 'amber' | 'rose';
}) {
  const toneClasses = {
    cyan: 'bg-cyan-500/15 border-cyan-500/30',
    amber: 'bg-amber-500/15 border-amber-500/30',
    rose: 'bg-rose-500/15 border-rose-500/30',
  } as const;

  const iconColors = {
    cyan: '#06b6d4',
    amber: '#f59e0b',
    rose: '#f43f5e',
  } as const;

  const valueColors = {
    cyan: 'text-cyan-300',
    amber: 'text-amber-300',
    rose: 'text-rose-300',
  } as const;

  return (
    <View className={`flex-1 rounded-xl border px-2.5 py-2 ${toneClasses[tone]}`}>
      <View className="flex-row items-center gap-1">
        <Ionicons name={icon} size={12} color={iconColors[tone]} />
        <Text className="text-[10px] uppercase tracking-wide text-slate-400">{label}</Text>
      </View>
      <Text className={`mt-0.5 text-lg font-bold ${valueColors[tone]}`}>{value}</Text>
    </View>
  );
}

export function GoalkeeperCard({ goalkeeper, onPress }: GoalkeeperCardProps) {
  return (
    <Pressable
      className="mb-3 overflow-hidden rounded-2xl border border-slate-700/80 bg-dark-card active:opacity-90"
      onPress={onPress}
    >
      <View className="h-1 bg-cyan-500" />

      <View className="flex-row items-center p-4">
        <View className="rounded-full border-2 border-cyan-500/40 p-0.5">
          <Avatar name={goalkeeper.name} imageUrl={goalkeeper.avatarUrl} size="lg" />
        </View>

        <View className="ml-4 flex-1">
          <View className="flex-row items-center gap-2">
            <Text className="text-base font-semibold text-white">{goalkeeper.name}</Text>
            <View className="rounded-full bg-cyan-500/20 px-2 py-0.5">
              <Text className="text-[10px] font-semibold uppercase text-cyan-300">
                Goleiro
              </Text>
            </View>
          </View>
          <Text className="mt-0.5 text-sm text-slate-400">
            #{goalkeeper.jerseyNumber} · {goalkeeper.matchesPlayed} jogos ·{' '}
            {formatRecord(goalkeeper.wins, goalkeeper.draws, goalkeeper.losses)}
          </Text>
        </View>

        <Ionicons name="chevron-forward" size={20} color="#64748b" />
      </View>

      <View className="flex-row gap-2 px-4 pb-4">
        <MetricPill
          icon="shield-checkmark-outline"
          label="Clean sheets"
          value={goalkeeper.cleanSheets}
          tone="cyan"
        />
        <MetricPill
          icon="hand-left-outline"
          label="Defesas"
          value={goalkeeper.saves}
          tone="amber"
        />
        <MetricPill
          icon="football-outline"
          label="Sofridos"
          value={calculateGoalsConcededPerMatch(
            goalkeeper.goalsConceded,
            goalkeeper.matchesPlayed,
          )}
          tone="rose"
        />
      </View>
    </Pressable>
  );
}
