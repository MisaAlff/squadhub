import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Avatar } from '@/components/Avatar';
import { EmptyState } from '@/components/EmptyState';
import { PerformanceChart } from '@/components/PerformanceChart';
import { SectionHeader } from '@/components/SectionHeader';
import { StatCard } from '@/components/StatCard';
import { PlayerDetailsSkeleton } from '@/components/skeletons/player-details-skeleton';
import { usePlayer } from '@/hooks/usePlayer';
import type { PlayersStackParamList } from '@/navigation/PlayersStack';
import type { PlayerProfile } from '@/types';
import {
  calculateGoalParticipation,
  calculateGoalsPerMatch,
  formatPositionLabel,
} from '@/utils/player';

type Props = NativeStackScreenProps<PlayersStackParamList, 'PlayerDetails'>;

function PlayerDetailsContent({ data }: { data: PlayerProfile }) {
  const stats = [
    {
      label: 'Jogos',
      value: data.matchesPlayed,
      variant: 'default' as const,
    },
    {
      label: 'Gols',
      value: data.goals,
      variant: 'success' as const,
    },
    {
      label: 'Assistências',
      value: data.assists,
      variant: 'default' as const,
    },
    {
      label: 'Cartões amarelos',
      value: data.yellowCards,
      variant: 'warning' as const,
    },
    {
      label: 'Cartões vermelhos',
      value: data.redCards,
      variant: 'danger' as const,
    },
    {
      label: 'Média de gols',
      value: calculateGoalsPerMatch(data.goals, data.matchesPlayed),
      variant: 'default' as const,
    },
    {
      label: 'Part. em gols',
      value: calculateGoalParticipation(data.goals, data.assists, data.matchesPlayed),
      variant: 'default' as const,
      fullWidth: true,
    },
  ];

  return (
    <ScrollView
      className="flex-1 bg-surface-secondary"
      contentContainerClassName="pb-8"
      showsVerticalScrollIndicator={false}
    >
      <View className="items-center bg-dark px-6 pb-10 pt-2">
        <Avatar name={data.name} imageUrl={data.avatarUrl} size="lg" />
        <Text className="mt-4 text-2xl font-bold text-white">{data.name}</Text>
        <Text className="mt-1 text-sm text-zinc-400">
          #{data.jerseyNumber} · {formatPositionLabel(data.position)}
        </Text>
        {data.isGuest ? (
          <View className="mt-3 rounded-full bg-amber-500/20 px-3 py-1">
            <Text className="text-xs font-medium text-amber-300">
              Completou o elenco · fora do plantel fixo
            </Text>
          </View>
        ) : null}
      </View>

      <View className="-mt-6 px-4">
        <SectionHeader title="Estatísticas" className="mb-1" />

        <View className="flex-row flex-wrap justify-between">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              variant={stat.variant}
              className={`mb-3 rounded-2xl shadow-sm ${stat.fullWidth ? 'w-full' : 'w-[48%]'}`}
            />
          ))}
        </View>

        <SectionHeader title="Evolução de desempenho" className="mb-2 mt-2" />
        <PerformanceChart data={data.performanceHistory} />
      </View>
    </ScrollView>
  );
}

export function PlayerDetailsScreen({ route }: Props) {
  const { playerId } = route.params;
  const { data, isLoading, isError } = usePlayer(playerId);

  if (isLoading) {
    return <PlayerDetailsSkeleton />;
  }

  if (isError || !data) {
    return (
      <SafeAreaView className="flex-1 bg-surface-secondary" edges={['bottom']}>
        <EmptyState
          icon={<Ionicons name="alert-circle-outline" size={48} color="#71717a" />}
          title="Erro ao carregar jogador"
          description="Não foi possível carregar o perfil deste jogador."
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-surface-secondary" edges={['bottom']}>
      <PlayerDetailsContent data={data} />
    </SafeAreaView>
  );
}
