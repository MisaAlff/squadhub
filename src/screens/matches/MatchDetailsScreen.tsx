import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { EmptyState } from '@/components/EmptyState';
import { SectionHeader } from '@/components/SectionHeader';
import { MatchDetailsSkeleton } from '@/components/skeletons/match-details-skeleton';
import { useMatch } from '@/hooks/useMatch';
import type { MatchesStackParamList } from '@/navigation/MatchesStack';
import type { Card, MatchDetails } from '@/types';
import { formatMatchDate } from '@/utils/formatDate';
import { formatMatchScore, formatPosition, formatResultLabel } from '@/utils/match';

type Props = NativeStackScreenProps<MatchesStackParamList, 'MatchDetails'>;

function EventRow({
  minute,
  label,
  icon,
}: {
  minute: number;
  label: string;
  icon?: React.ReactNode;
}) {
  return (
    <View className="flex-row items-center border-b border-slate-700 py-2.5 last:border-b-0">
      <Text className="w-10 text-sm font-semibold text-slate-400">{minute}'</Text>
      {icon ? <View className="mr-2">{icon}</View> : null}
      <Text className="flex-1 text-sm text-white">{label}</Text>
    </View>
  );
}

function CardIcon({ type }: { type: Card['type'] }) {
  return (
    <View
      className={`h-4 w-3 rounded-sm ${type === 'yellow' ? 'bg-yellow-400' : 'bg-red-600'}`}
    />
  );
}

function LineupSection({ lineup }: { lineup: MatchDetails['lineup'] }) {
  return (
    <View className="rounded-2xl border border-slate-700 bg-dark-card p-4">
      <Text className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
        Titulares
      </Text>
      {lineup.starters.map((player) => (
        <View
          key={player.playerId}
          className="flex-row items-center border-b border-slate-700 py-2 last:border-b-0"
        >
          <Text className="w-8 text-sm font-bold text-slate-400">{player.jerseyNumber}</Text>
          <Text className="flex-1 text-sm text-white">{player.name}</Text>
          <Text className="text-xs font-medium text-slate-400">
            {formatPosition(player.position)}
          </Text>
        </View>
      ))}

      {lineup.substitutes.length > 0 ? (
        <>
          <Text className="mb-2 mt-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Reservas
          </Text>
          {lineup.substitutes.map((player) => (
            <View
              key={player.playerId}
              className="flex-row items-center border-b border-slate-700 py-2 last:border-b-0"
            >
              <Text className="w-8 text-sm font-bold text-slate-400">{player.jerseyNumber}</Text>
              <Text className="flex-1 text-sm text-white">{player.name}</Text>
              <Text className="text-xs font-medium text-slate-400">
                {formatPosition(player.position)}
              </Text>
            </View>
          ))}
        </>
      ) : null}
    </View>
  );
}

function MatchDetailsContent({ data }: { data: MatchDetails }) {
  return (
    <ScrollView
      className="flex-1 bg-surface-secondary"
      contentContainerClassName="pb-8"
      showsVerticalScrollIndicator={false}
    >
      <View className="border-b border-slate-800 bg-slate-900 px-6 pb-10 pt-2">
        <Text className="text-sm text-zinc-400">{formatMatchDate(data.date)}</Text>
        <Text className="mt-1 text-2xl font-bold text-white">vs {data.opponent}</Text>
        <Text className="mt-1 text-sm text-zinc-400">{data.location}</Text>
        <View className="mt-3 flex-row items-center gap-2">
          <View className="rounded-full bg-dark-card px-3 py-1">
            <Text className="text-xs font-medium text-zinc-300">
              {data.isHome ? 'Casa' : 'Fora'}
            </Text>
          </View>
          <Text className="text-xs font-medium text-zinc-400">
            {formatResultLabel(data.result)}
          </Text>
        </View>
        <Text className="mt-4 text-4xl font-bold text-white">{formatMatchScore(data)}</Text>
      </View>

      <View className="-mt-6 px-4">
        <SectionHeader title="Escalação" className="mb-2" />
        <LineupSection lineup={data.lineup} />

        <SectionHeader title="Gols" className="mb-2 mt-4" />
        <View className="rounded-2xl border border-slate-700 bg-dark-card px-4">
          {data.goals.length > 0 ? (
            data.goals.map((goal, index) => (
              <EventRow
                key={`${goal.playerId}-${goal.minute}-${index}`}
                minute={goal.minute}
                label={goal.playerName}
              />
            ))
          ) : (
            <Text className="py-4 text-sm text-slate-400">Nenhum gol marcado</Text>
          )}
        </View>

        <SectionHeader title="Assistências" className="mb-2 mt-4" />
        <View className="rounded-2xl border border-slate-700 bg-dark-card px-4">
          {data.assists.length > 0 ? (
            data.assists.map((assist, index) => (
              <EventRow
                key={`${assist.playerId}-${assist.minute}-${index}`}
                minute={assist.minute}
                label={assist.playerName}
              />
            ))
          ) : (
            <Text className="py-4 text-sm text-slate-400">Nenhuma assistência</Text>
          )}
        </View>

        <SectionHeader title="Cartões" className="mb-2 mt-4" />
        <View className="rounded-2xl border border-slate-700 bg-dark-card px-4">
          {data.cards.length > 0 ? (
            data.cards.map((card, index) => (
              <EventRow
                key={`${card.playerId}-${card.minute}-${index}`}
                minute={card.minute}
                label={card.playerName}
                icon={<CardIcon type={card.type} />}
              />
            ))
          ) : (
            <Text className="py-4 text-sm text-slate-400">Nenhum cartão</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

export function MatchDetailsScreen({ route }: Props) {
  const { matchId } = route.params;
  const { data, isLoading, isError } = useMatch(matchId);

  if (isLoading) {
    return <MatchDetailsSkeleton />;
  }

  if (isError || !data) {
    return (
      <SafeAreaView className="flex-1 bg-surface-secondary" edges={['bottom']}>
        <EmptyState
          icon={<Ionicons name="alert-circle-outline" size={48} color="#64748b" />}
          title="Erro ao carregar partida"
          description="Não foi possível carregar os detalhes desta partida."
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-surface-secondary" edges={['bottom']}>
      <MatchDetailsContent data={data} />
    </SafeAreaView>
  );
}
