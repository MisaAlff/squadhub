import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '@/constants/theme';
import { MatchDetailsScreen } from '@/screens/matches/MatchDetailsScreen';
import { MatchesScreen } from '@/screens/matches/MatchesScreen';

export type MatchesStackParamList = {
  MatchesList: undefined;
  MatchDetails: { matchId: string };
};

const Stack = createNativeStackNavigator<MatchesStackParamList>();

export function MatchesStack() {
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
        name="MatchesList"
        component={MatchesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MatchDetails"
        component={MatchDetailsScreen}
        options={{ title: 'Detalhes do jogo' }}
      />
    </Stack.Navigator>
  );
}
