import type { NavigatorScreenParams } from '@react-navigation/native';

import type { MatchesStackParamList } from './MatchesStack';
import type { PlayersStackParamList } from './PlayersStack';

export type { MatchesStackParamList, PlayersStackParamList };

export type AuthStackParamList = {
  Login: undefined;
};

export type AppTabsParamList = {
  Dashboard: undefined;
  Matches: NavigatorScreenParams<MatchesStackParamList>;
  Players: NavigatorScreenParams<PlayersStackParamList>;
  Rankings: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  App: NavigatorScreenParams<AppTabsParamList>;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
