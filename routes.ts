export const RouteNames = {
  HomeTab: 'home-tab' as const,
  Home: 'home' as const,
  Shopping: 'shopping' as const,
  Broswer: 'browser' as const,
};

export type RootStackParamList = {
  [RouteNames.HomeTab]: undefined;
  [RouteNames.Broswer]: undefined;
};
