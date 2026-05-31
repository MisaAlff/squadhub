import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '@/constants/theme';
import { PlayerDetailsScreen } from '@/screens/players/PlayerDetailsScreen';
import { PlayersScreen } from '@/screens/players/PlayersScreen';

export type PlayersStackParamList = {
  PlayersList: undefined;
  PlayerDetails: { playerId: string };
};

const Stack = createNativeStackNavigator<PlayersStackParamList>();

export function PlayersStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.background },
        headerTintColor: theme.colors.text,
        headerTitleStyle: { fontWeight: '600' },
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
    </Stack.Navigator>
  );
}
