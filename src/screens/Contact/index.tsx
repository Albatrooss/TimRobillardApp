import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text } from 'react-native';

import { PortfolioStackNavigatorParamList } from '../Portfolio/types.navigation';
import { useLayoutContext } from '../../contexts/layout';
import { useEffect } from 'react';

const ContactScreen = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<PortfolioStackNavigatorParamList>
    >();
  const { setStatusBarColor } = useLayoutContext();
  useEffect(() => {
    setStatusBarColor('blue');
  }, []);
  return <Text>Contact</Text>;
};

export default ContactScreen;
