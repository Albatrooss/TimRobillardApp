import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { COLORS } from '../../utils';

// @ts-ignore its there
import headShot from '../../../Assets/BnW-headshot.jpg';
import { useEffect } from 'react';
import { useLayoutContext } from '../../contexts/layout';
import SpinningIcon from './IconDisplay';

const HEIGHT = Dimensions.get('window').height - 100;

const Main = () => (
  <View style={styles.main}>
    <View style={styles.nameContainer}>
      <Text style={styles.tim}>Tim</Text>
      <Text style={styles.robillard}>Robillard</Text>
      <View style={styles.h2Container}>
        <Text style={styles.software}>SOFTWARE</Text>
        <View style={styles.spacer} />
        <Text style={styles.design}>DESIGN</Text>
      </View>
      <SpinningIcon />
    </View>
  </View>
);

const About = () => (
  <View style={styles.about}>
    <View style={styles.headShotContainer}>
      <Image source={headShot} style={styles.headShot} />
    </View>
    <Text style={styles.aboutText}>
      Willing to go above and beyond to give you exactly what you need, when you
      need it.
    </Text>
  </View>
);

const HomeScreen = () => {
  const { setStatusBarColor } = useLayoutContext();
  useEffect(() => {
    setStatusBarColor('orange');
  }, []);
  return (
    <View style={styles.safeArea}>
      <ScrollView style={styles.base}>
        <Main />
        <About />
      </ScrollView>
      <View style={styles.topBG} />
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  base: {
    flex: 1,
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  topBG: {
    backgroundColor: COLORS.orange,
    height: 300,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  main: {
    backgroundColor: COLORS.orange,
    height: HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  nameContainer: {
    position: 'relative',
  },
  tim: {
    color: COLORS.white,
    fontSize: 64,
    fontWeight: 'bold',
  },
  robillard: {
    color: COLORS.darkBlue,
    fontSize: 72,
    fontWeight: 'bold',
  },
  h2Container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  software: {
    color: COLORS.blue,
    fontSize: 26,
    fontWeight: 'bold',
  },
  spacer: {
    width: 4,
    backgroundColor: COLORS.darkBlue,
    marginHorizontal: 6,
    height: 26,
  },
  design: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: 'bold',
  },
  about: {
    height: HEIGHT,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headShotContainer: {
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: COLORS.darkBlue,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    width: 240,
    height: 240,
    borderRadius: 1000,
  },
  headShot: {
    width: 240,
    height: 240,
    borderRadius: 1000,
  },
  aboutText: {
    marginTop: 40,
    marginHorizontal: 14,
    paddingHorizontal: 20,
    fontSize: 20,
    color: COLORS.darkBlue,
    textAlign: 'center',
  },
});

export default HomeScreen;
