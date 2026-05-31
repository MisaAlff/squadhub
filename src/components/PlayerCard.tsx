import { Pressable, Text, View } from 'react-native';

import { Avatar } from '@/components/Avatar';
import type { Player } from '@/types';
import { formatPositionLabel } from '@/utils/player';

interface PlayerCardProps {
  player: Player;
  onPress: () => void;
}

export function PlayerCard({ player, onPress }: PlayerCardProps) {
  const isGuest = player.isGuest === true;

  return (
    <Pressable
      className={`mb-3 flex-row items-center rounded-2xl border border-slate-700 bg-dark-card p-4 active:opacity-90 ${
        isGuest ? 'border-dashed border-amber-500/50' : ''
      }`}
      onPress={onPress}
    >
      <Avatar name={player.name} imageUrl={player.avatarUrl} size="lg" />

      <View className="ml-4 flex-1">
        <View className="flex-row flex-wrap items-center gap-2">
          <Text className="text-base font-semibold text-white">{player.name}</Text>
          {isGuest ? (
            <View className="rounded-full bg-amber-500/20 px-2 py-0.5">
              <Text className="text-[10px] font-semibold uppercase text-amber-300">
                Completou
              </Text>
            </View>
          ) : null}
        </View>
        <Text className="mt-0.5 text-sm text-slate-400">
          {formatPositionLabel(player.position)}
          {isGuest ? ' · 1 jogo' : ''}
        </Text>
        {isGuest && player.goals > 0 ? (
          <Text className="mt-1 text-xs font-medium text-primary">
            {player.goals} {player.goals === 1 ? 'gol' : 'gols'} na temporada
          </Text>
        ) : null}
      </View>

      <View
        className={`h-10 w-10 items-center justify-center rounded-full ${
          isGuest ? 'bg-amber-500/15' : 'bg-slate-700'
        }`}
      >
        <Text className={`text-sm font-bold ${isGuest ? 'text-amber-300' : 'text-slate-200'}`}>
          #{player.jerseyNumber}
        </Text>
      </View>
    </Pressable>
  );
}
