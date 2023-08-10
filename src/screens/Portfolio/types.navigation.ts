import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigatorParamList } from '../types.navigation';

export type PortfolioStackNavigatorParamList = {
  List: undefined;
  Project: {
    name: string;
  };
};

export type PortfolioScreenRouteProp = CompositeNavigationProp<
  NativeStackNavigationProp<PortfolioStackNavigatorParamList, 'Project'>,
  BottomTabNavigationProp<BottomTabNavigatorParamList, 'Portfolio'>
>;

export type ProjectScreenRouteProp = RouteProp<
  PortfolioStackNavigatorParamList,
  'Project'
>;
