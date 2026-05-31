import { Ionicons } from '@expo/vector-icons';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DarkScreenHeader } from '@/components/DarkScreenHeader';
import { EmptyState } from '@/components/EmptyState';
import { MatchCard } from '@/components/MatchCard';
import { MatchesSkeleton } from '@/components/skeletons/matches-skeleton';
import { useMatches } from '@/hooks/useMatches';
import type { MatchesStackParamList } from '@/navigation/MatchesStack';
import type { Match } from '@/types';

type MatchesListNavigationProp = NativeStackNavigationProp<
  MatchesStackParamList,
  'MatchesList'
>;

interface MatchesScreenProps {
  navigation: MatchesListNavigationProp;
}

export function MatchesScreen({ navigation }: MatchesScreenProps) {
  const { data, isLoading, isError } = useMatches();

  if (isLoading) {
    return <MatchesSkeleton />;
  }

  if (isError || !data?.length) {
    return (
      <SafeAreaView className="flex-1 bg-surface-secondary" edges={['top', 'bottom']}>
        <EmptyState
          icon={<Ionicons name="football-outline" size={48} color="#64748b" />}
          title="Nenhum jogo encontrado"
          description="Ainda não há partidas registradas para o Vasco."
        />
      </SafeAreaView>
    );
  }

  const renderItem = ({ item }: { item: Match }) => (
    <View className="px-4">
      <MatchCard
        match={item}
        onPress={() => navigation.navigate('MatchDetails', { matchId: item.id })}
      />
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-surface-secondary" edges={['bottom']}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerClassName="pb-6 pt-4"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <DarkScreenHeader className="mb-2">
            <Text className="text-2xl font-bold text-white">Jogos</Text>
            <Text className="mt-1 text-sm text-zinc-400">
              {data.length} partidas na temporada
            </Text>
          </DarkScreenHeader>
        }
      />
    </SafeAreaView>
  );
}
