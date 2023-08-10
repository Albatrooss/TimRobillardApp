import * as React from 'react';

import HomeScreen from './Home';
import PortfolioScreen from './Portfolio';
import ContactScreen from './Contact';
import { BottomTabNavigatorParamList } from './types.navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import TabBar from '../components/TabBar';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const MyStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Icon name="clipboard-list" size={30} />,
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarIcon: () => <Icon name="clipboard-list" size={30} />,
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarIcon: () => <Icon name="clipboard-list" size={30} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MyStack;
