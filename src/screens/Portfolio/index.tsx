import * as React from 'react';
import { PortfolioStackNavigatorParamList } from './types.navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from './List';
import ProjectScreen from './Project';

const Stack = createNativeStackNavigator<PortfolioStackNavigatorParamList>();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Project" component={ProjectScreen} />
    </Stack.Navigator>
  );
};

export default MyStack;
