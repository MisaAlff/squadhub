import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '@/constants/theme';
import { GoalkeeperDetailsScreen } from '@/screens/goalkeepers/GoalkeeperDetailsScreen';
import { PlayerDetailsScreen } from '@/screens/players/PlayerDetailsScreen';
import { PlayersScreen } from '@/screens/players/PlayersScreen';

export type PlayersStackParamList = {
  PlayersList: undefined;
  PlayerDetails: { playerId: string };
  GoalkeeperDetails: { goalkeeperId: string };
};

const Stack = createNativeStackNavigator<PlayersStackParamList>();

export function PlayersStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.background },
        headerTintColor: theme.colors.text,
        headerTitleStyle: { fontWeight: '600', color: theme.colors.text },
        contentStyle: { backgroundColor: theme.colors.page },
      }}
    >
      <Stack.Screen
        name="PlayersList"
        component={PlayersScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PlayerDetails"
        component={PlayerDetailsScreen}
        options={{ title: 'Perfil do jogador' }}
      />
      <Stack.Screen
        name="GoalkeeperDetails"
        component={GoalkeeperDetailsScreen}
        options={{ title: 'Perfil do goleiro' }}
      />
    </Stack.Navigator>
  );
}
