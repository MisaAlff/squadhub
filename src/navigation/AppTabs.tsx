import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from '@/constants/theme';
import { DashboardScreen } from '@/screens/dashboard/DashboardScreen';
import { MatchesStack } from '@/navigation/MatchesStack';
import { PlayersStack } from '@/navigation/PlayersStack';
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
        headerStyle: { backgroundColor: theme.colors.background },
        headerTintColor: theme.colors.text,
        headerTitleStyle: { fontWeight: '600', color: theme.colors.text },
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.border,
        },
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
        component={MatchesStack}
        options={{ title: 'Jogos', headerShown: false }}
      />
      <Tab.Screen
        name="Players"
        component={PlayersStack}
        options={{ title: 'Jogadores', headerShown: false }}
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
