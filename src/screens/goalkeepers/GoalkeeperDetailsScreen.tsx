import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Avatar } from '@/components/Avatar';
import { EmptyState } from '@/components/EmptyState';
import { GoalkeeperDetailsSkeleton } from '@/components/skeletons/goalkeeper-details-skeleton';
import { useGoalkeeper } from '@/hooks/useGoalkeeper';
import type { PlayersStackParamList } from '@/navigation/PlayersStack';
import type { Goalkeeper } from '@/types';
import { calculateGoalsConcededPerMatch, formatRecord } from '@/utils/goalkeeper';

type Props = NativeStackScreenProps<PlayersStackParamList, 'GoalkeeperDetails'>;

function HeroMetric({
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
  const borderClasses = {
    cyan: 'border-cyan-500/40 bg-cyan-500/10',
    amber: 'border-amber-500/40 bg-amber-500/10',
    rose: 'border-rose-500/40 bg-rose-500/10',
  } as const;

  const valueClasses = {
    cyan: 'text-cyan-300',
    amber: 'text-amber-300',
    rose: 'text-rose-300',
  } as const;

  const iconColors = {
    cyan: '#22d3ee',
    amber: '#fbbf24',
    rose: '#fb7185',
  } as const;

  return (
    <View className={`flex-1 rounded-2xl border p-4 ${borderClasses[tone]}`}>
      <Ionicons name={icon} size={20} color={iconColors[tone]} />
      <Text className={`mt-2 text-3xl font-bold ${valueClasses[tone]}`}>{value}</Text>
      <Text className="mt-1 text-xs text-slate-400">{label}</Text>
    </View>
  );
}

function SecondaryStat({
  label,
  value,
  variant = 'default',
}: {
  label: string;
  value: string | number;
  variant?: 'default' | 'success' | 'warning' | 'danger';
}) {
  const valueClasses = {
    default: 'text-white',
    success: 'text-emerald-400',
    warning: 'text-amber-400',
    danger: 'text-rose-400',
  } as const;

  return (
    <View className="mb-3 w-[48%] rounded-2xl border border-slate-700 bg-slate-800/60 p-4">
      <Text className="text-sm text-slate-400">{label}</Text>
      <Text className={`mt-2 text-2xl font-bold ${valueClasses[variant]}`}>{value}</Text>
    </View>
  );
}

function GoalkeeperDetailsContent({ data }: { data: Goalkeeper }) {
  const avgConceded = calculateGoalsConcededPerMatch(
    data.goalsConceded,
    data.matchesPlayed,
  );

  return (
    <ScrollView
      className="flex-1 bg-slate-950"
      contentContainerClassName="pb-8"
      showsVerticalScrollIndicator={false}
    >
      <View className="items-center border-b border-cyan-500/20 bg-slate-900 px-6 pb-8 pt-2">
        <View className="rounded-full border-2 border-cyan-500/50 p-1">
          <Avatar name={data.name} imageUrl={data.avatarUrl} size="lg" />
        </View>
        <Text className="mt-4 text-2xl font-bold text-white">{data.name}</Text>
        <Text className="mt-1 text-sm text-slate-400">
          #{data.jerseyNumber} · Goleiro
        </Text>
        <View className="mt-3 rounded-full bg-cyan-500/15 px-3 py-1">
          <Text className="text-xs font-medium text-cyan-300">
            {formatRecord(data.wins, data.draws, data.losses)} em {data.matchesPlayed} jogos
          </Text>
        </View>
      </View>

      <View className="px-4 pt-5">
        <Text className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Destaques
        </Text>
        <View className="flex-row gap-3">
          <HeroMetric
            icon="shield-checkmark"
            label="Clean sheets"
            value={data.cleanSheets}
            tone="cyan"
          />
          <HeroMetric
            icon="hand-left"
            label="Total de defesas"
            value={data.saves}
            tone="amber"
          />
          <HeroMetric
            icon="football"
            label="Gols sofridos"
            value={data.goalsConceded}
            tone="rose"
          />
        </View>

        <Text className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Estatísticas
        </Text>
        <View className="flex-row flex-wrap justify-between">
          <SecondaryStat label="Jogos" value={data.matchesPlayed} />
          <SecondaryStat label="Vitórias" value={data.wins} variant="success" />
          <SecondaryStat label="Empates" value={data.draws} variant="warning" />
          <SecondaryStat label="Derrotas" value={data.losses} variant="danger" />
          <SecondaryStat label="Média de gols sofridos" value={avgConceded} variant="danger" />
          <SecondaryStat label="Pênaltis defendidos" value={data.penaltiesSaved} />
          <SecondaryStat label="Total de defesas" value={data.saves} />
        </View>
      </View>
    </ScrollView>
  );
}

export function GoalkeeperDetailsScreen({ route }: Props) {
  const { goalkeeperId } = route.params;
  const { data, isLoading, isError } = useGoalkeeper(goalkeeperId);

  if (isLoading) {
    return <GoalkeeperDetailsSkeleton />;
  }

  if (isError || !data) {
    return (
      <SafeAreaView className="flex-1 bg-slate-950" edges={['bottom']}>
        <EmptyState
          icon={<Ionicons name="alert-circle-outline" size={48} color="#64748b" />}
          title="Erro ao carregar goleiro"
          description="Não foi possível carregar o perfil deste goleiro."
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-950" edges={['bottom']}>
      <GoalkeeperDetailsContent data={data} />
    </SafeAreaView>
  );
}
