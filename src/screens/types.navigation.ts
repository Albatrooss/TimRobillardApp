import { PortfolioStackNavigatorParamList } from './Portfolio/types.navigation';

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Portfolio: PortfolioStackNavigatorParamList;
  Contact: undefined;
};
