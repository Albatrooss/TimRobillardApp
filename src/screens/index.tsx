import * as React from 'react';

import HomeScreen from './Home';
import PortfolioScreen from './Portfolio';
import ContactScreen from './Contact';
import { BottomTabNavigatorParamList } from './types.navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../components/TabBar';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const MyStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
      }}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Portfolio" component={PortfolioScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
};

export default MyStack;
