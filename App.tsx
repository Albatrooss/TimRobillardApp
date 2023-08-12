import React from 'react';
import MyStack from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import StatusBar from './src/components/StatusBar';
import LayoutContextProvider from './src/contexts/layout';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <LayoutContextProvider>
        <StatusBar />
        <MyStack />
      </LayoutContextProvider>
    </NavigationContainer>
  );
}

export default App;
