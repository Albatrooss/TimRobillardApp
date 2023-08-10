import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';

import { PortfolioScreenRouteProp } from '../types.navigation';

const ListScreen = () => {
  const navigation = useNavigation<PortfolioScreenRouteProp>();
  return (
    <Button
      title="Go to Project"
      onPress={() => navigation.navigate('Project', { name: 'Tim' })}
    />
  );
};

export default ListScreen;