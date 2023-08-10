import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Text } from 'react-native';
import { BottomTabNavigatorParamList } from '../types.navigation';
import { PortfolioStackNavigatorParamList } from '../Portfolio/types.navigation';

const ContactScreen = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<PortfolioStackNavigatorParamList>
    >();
  return <Text>Contact</Text>;
};

export default ContactScreen;
