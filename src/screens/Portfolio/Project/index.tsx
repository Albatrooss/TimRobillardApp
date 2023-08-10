import { useRoute } from '@react-navigation/native';
import { Text } from 'react-native';
import { ProjectScreenRouteProp } from '../types.navigation';

const ProjectScreen = () => {
  const route = useRoute<ProjectScreenRouteProp>();

  return <Text>This is {route.params.name}'s profile</Text>;
};

export default ProjectScreen;
