import { Ionicons } from '@expo/vector-icons';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DarkScreenHeader } from '@/components/DarkScreenHeader';
import { EmptyState } from '@/components/EmptyState';
import { PlayerCard } from '@/components/PlayerCard';
import { SectionHeader } from '@/components/SectionHeader';
import { PlayersSkeleton } from '@/components/skeletons/players-skeleton';
import { usePlayers } from '@/hooks/usePlayers';
import type { PlayersStackParamList } from '@/navigation/PlayersStack';
import type { Player, PlayerPosition } from '@/types';
import { formatPositionGroupLabel, getPositionOrder } from '@/utils/player';

type PlayersListNavigationProp = NativeStackNavigationProp<
  PlayersStackParamList,
  'PlayersList'
>;

interface PlayersScreenProps {
  navigation: PlayersListNavigationProp;
}

type ListItem =
  | { type: 'header'; position: PlayerPosition }
  | { type: 'guestHeader' }
  | { type: 'player'; player: Player };

function buildGroupedList(players: Player[]): ListItem[] {
  const roster = players.filter((p) => !p.isGuest);
  const guests = players.filter((p) => p.isGuest);
  const order = getPositionOrder();
  const items: ListItem[] = [];

  for (const position of order) {
    const group = roster.filter((p) => p.position === position);
    if (group.length === 0) continue;
    items.push({ type: 'header', position });
    for (const player of group) {
      items.push({ type: 'player', player });
    }
  }

  if (guests.length > 0) {
    items.push({ type: 'guestHeader' });
    for (const player of guests) {
      items.push({ type: 'player', player });
    }
  }

  return items;
}

export function PlayersScreen({ navigation }: PlayersScreenProps) {
  const { data, isLoading, isError } = usePlayers();

  if (isLoading) {
    return <PlayersSkeleton />;
  }

  if (isError || !data?.length) {
    return (
      <SafeAreaView className="flex-1 bg-surface-secondary" edges={['top', 'bottom']}>
        <EmptyState
          icon={<Ionicons name="people-outline" size={48} color="#71717a" />}
          title="Nenhum jogador encontrado"
          description="Ainda não há jogadores cadastrados no elenco."
        />
      </SafeAreaView>
    );
  }

  const rosterCount = data.filter((p) => !p.isGuest).length;
  const guestCount = data.filter((p) => p.isGuest).length;
  const listData = buildGroupedList(data);

  const renderItem = ({ item }: { item: ListItem }) => {
    if (item.type === 'header') {
      return (
        <View className="px-4">
          <SectionHeader
            title={formatPositionGroupLabel(item.position)}
            className="mb-1 mt-2"
          />
        </View>
      );
    }

    if (item.type === 'guestHeader') {
      return (
        <View className="px-4">
          <SectionHeader title="Completaram o elenco" className="mb-1 mt-4" />
          <Text className="mb-2 text-xs text-zinc-500">
            Jogadores convocados para partidas específicas, fora do plantel fixo.
          </Text>
        </View>
      );
    }

    return (
      <View className="px-4">
        <PlayerCard
          player={item.player}
          onPress={() =>
            navigation.navigate('PlayerDetails', { playerId: item.player.id })
          }
        />
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-surface-secondary" edges={['bottom']}>
      <FlatList
        data={listData}
        keyExtractor={(item) =>
          item.type === 'header'
            ? `header-${item.position}`
            : item.type === 'guestHeader'
              ? 'guest-header'
              : item.player.id
        }
        renderItem={renderItem}
        contentContainerClassName="pb-6"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <DarkScreenHeader className="mb-2">
            <Text className="text-2xl font-bold text-white">Jogadores</Text>
            <Text className="mt-1 text-sm text-zinc-400">
              {rosterCount} atletas no elenco
              {guestCount > 0 ? ` · ${guestCount} completaram` : ''}
            </Text>
          </DarkScreenHeader>
        }
      />
    </SafeAreaView>
  );
}
