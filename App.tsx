import React from 'react';
import MyStack from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import StatusBar from './src/components/StatusBar';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar />
      <MyStack />
    </NavigationContainer>
  );
}

export default App;
