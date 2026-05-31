import { Ionicons } from '@expo/vector-icons';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Avatar } from '@/components/Avatar';
import { EmptyState } from '@/components/EmptyState';
import { SectionHeader } from '@/components/SectionHeader';
import { StatCard } from '@/components/StatCard';
import { DashboardSkeleton } from '@/components/skeletons/dashboard-skeleton';
import { useDashboard } from '@/hooks/useDashboard';
import type { DashboardStats } from '@/types';
import {
  formatGoalDifference,
  formatMatchDate,
  getGoalDifferenceVariant,
} from '@/utils/formatDate';

interface HighlightCardProps {
  label: string;
  title: string;
  subtitle: string;
  accentColor: string;
  icon: React.ComponentProps<typeof Ionicons>['name'];
  avatarName?: string;
}

function HighlightCard({
  label,
  title,
  subtitle,
  accentColor,
  icon,
  avatarName,
}: HighlightCardProps) {
  return (
    <View className="mb-3 flex-row overflow-hidden rounded-2xl border border-slate-700 bg-dark-card">
      <View style={{ width: 4, backgroundColor: accentColor }} />
      <View className="flex-1 flex-row items-center gap-3 p-4">
        {avatarName ? (
          <Avatar name={avatarName} size="md" />
        ) : (
          <View className="h-12 w-12 items-center justify-center rounded-full bg-slate-700">
            <Ionicons name={icon} size={22} color={accentColor} />
          </View>
        )}
        <View className="flex-1">
          <Text className="text-xs font-medium uppercase tracking-wide text-slate-400">
            {label}
          </Text>
          <Text className="mt-0.5 text-base font-bold text-white">{title}</Text>
          <Text className="mt-0.5 text-sm text-slate-400">{subtitle}</Text>
        </View>
      </View>
    </View>
  );
}

function DashboardContent({ data }: { data: DashboardStats }) {
  const goalDiff = formatGoalDifference(data.goalsFor, data.goalsAgainst);
  const goalDiffVariant = getGoalDifferenceVariant(data.goalsFor, data.goalsAgainst);

  const stats = [
    {
      label: 'Jogos disputados',
      value: data.totalMatches,
      variant: 'default' as const,
      icon: <Ionicons name="calendar-outline" size={18} color="#94a3b8" />,
    },
    {
      label: 'Vitórias',
      value: data.wins,
      variant: 'success' as const,
      icon: <Ionicons name="trophy-outline" size={18} color="#4ade80" />,
    },
    {
      label: 'Empates',
      value: data.draws,
      variant: 'warning' as const,
      icon: <Ionicons name="remove-outline" size={18} color="#fbbf24" />,
    },
    {
      label: 'Derrotas',
      value: data.losses,
      variant: 'danger' as const,
      icon: <Ionicons name="close-circle-outline" size={18} color="#f87171" />,
    },
    {
      label: 'Gols marcados',
      value: data.goalsFor,
      variant: 'default' as const,
      icon: <Ionicons name="football-outline" size={18} color="#94a3b8" />,
    },
    {
      label: 'Gols sofridos',
      value: data.goalsAgainst,
      variant: 'default' as const,
      icon: <Ionicons name="shield-outline" size={18} color="#94a3b8" />,
    },
    {
      label: 'Saldo de gols',
      value: goalDiff,
      variant: goalDiffVariant,
      icon: <Ionicons name="trending-up-outline" size={18} color="#94a3b8" />,
    },
    {
      label: 'Aproveitamento',
      value: `${data.winRate}%`,
      variant: 'default' as const,
      icon: <Ionicons name="stats-chart-outline" size={18} color="#94a3b8" />,
    },
  ];

  return (
    <ScrollView
      className="flex-1 bg-surface-secondary"
      contentContainerClassName="pb-8"
      showsVerticalScrollIndicator={false}
    >
      <View className="border-b border-slate-800 bg-slate-900 px-6 pb-10 pt-2">
        <Text className="text-2xl font-bold text-white">{data.teamName}</Text>
        <Text className="mt-1 text-sm text-zinc-400">Temporada {data.season}</Text>
        <View className="mt-4 self-start rounded-full bg-primary px-3 py-1">
          <Text className="text-xs font-semibold text-white">
            {data.winRate}% aproveitamento
          </Text>
        </View>
      </View>

      <View className="-mt-6 px-4">
        <SectionHeader title="Estatísticas" className="mb-2" />

        <View className="flex-row flex-wrap justify-between">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              variant={stat.variant}
              icon={stat.icon}
              className="mb-3 w-[48%] rounded-2xl shadow-sm"
            />
          ))}
        </View>

        <SectionHeader title="Destaques" className="mb-1 mt-2" />

        <HighlightCard
          label="Artilheiro"
          title={data.topScorer.name}
          subtitle={`${data.topScorer.goals} gols`}
          accentColor="#16a34a"
          icon="football"
          avatarName={data.topScorer.name}
        />

        <HighlightCard
          label="Líder de assistências"
          title={data.topAssists.name}
          subtitle={`${data.topAssists.assists} assistências`}
          accentColor="#2563eb"
          icon="git-network-outline"
          avatarName={data.topAssists.name}
        />

        {data.nextMatch ? (
          <HighlightCard
            label="Próximo jogo"
            title={`vs ${data.nextMatch.opponent}`}
            subtitle={`${formatMatchDate(data.nextMatch.date)} · ${data.nextMatch.location} · ${data.nextMatch.isHome ? 'Casa' : 'Fora'}`}
            accentColor="#7c3aed"
            icon="time-outline"
          />
        ) : null}
      </View>
    </ScrollView>
  );
}

export function DashboardScreen() {
  const { data, isLoading, isError } = useDashboard();

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  if (isError || !data) {
    return (
      <SafeAreaView className="flex-1 bg-surface-secondary" edges={['bottom']}>
        <EmptyState
          icon={<Ionicons name="alert-circle-outline" size={48} color="#64748b" />}
          title="Erro ao carregar dashboard"
          description="Não foi possível carregar as estatísticas do time."
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-surface-secondary" edges={['bottom']}>
      <DashboardContent data={data} />
    </SafeAreaView>
  );
}
