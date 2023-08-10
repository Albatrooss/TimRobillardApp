import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../utils';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.base}>
      <View style={styles.main}>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
  main: {
    flex: 1,
    backgroundColor: COLORS.orange
  },
  about: {
    flex: 1,
  },
});

export default HomeScreen;
