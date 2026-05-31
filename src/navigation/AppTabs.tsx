import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from '@/constants/theme';
import { DashboardScreen } from '@/screens/dashboard/DashboardScreen';
import { MatchesScreen } from '@/screens/matches/MatchesScreen';
import { PlayersScreen } from '@/screens/players/PlayersScreen';
import { ProfileScreen } from '@/screens/profile/ProfileScreen';
import { RankingsScreen } from '@/screens/rankings/RankingsScreen';

import type { AppTabsParamList } from './types';

const Tab = createBottomTabNavigator<AppTabsParamList>();

type TabIconName = React.ComponentProps<typeof Ionicons>['name'];

const tabIcons: Record<keyof AppTabsParamList, TabIconName> = {
  Dashboard: 'stats-chart',
  Matches: 'football',
  Players: 'people',
  Rankings: 'trophy',
  Profile: 'person',
};

export function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name={tabIcons[route.name]} size={size} color={color} />
        ),
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ title: 'Dashboard' }}
      />
      <Tab.Screen
        name="Matches"
        component={MatchesScreen}
        options={{ title: 'Jogos' }}
      />
      <Tab.Screen
        name="Players"
        component={PlayersScreen}
        options={{ title: 'Jogadores' }}
      />
      <Tab.Screen
        name="Rankings"
        component={RankingsScreen}
        options={{ title: 'Rankings' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Perfil' }}
      />
    </Tab.Navigator>
  );
}
