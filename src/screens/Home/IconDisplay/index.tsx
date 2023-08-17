import React, { useRef } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';

import { ANIMATION_DATA, INPUT_RANGE } from './constants';

const SpinningIcon = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 40,
      duration: 24000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  const imageSources = [
    require('../../../../Assets/Icons/Typescript_dark.png'),
    require('../../../../Assets/Icons/React_dark.png'),
    require('../../../../Assets/Icons/Prisma_dark.png'),
    require('../../../../Assets/Icons/Node_dark.png'),
    require('../../../../Assets/Icons/Mongo_dark.png'),
    require('../../../../Assets/Icons/Graphql_dark.png'),
    require('../../../../Assets/Icons/Postgres_dark.png'),
    require('../../../../Assets/Icons/Javascript_dark.png'),
    require('../../../../Assets/Icons/Html_dark.png'),
    require('../../../../Assets/Icons/Css_dark.png'),
  ];

  const animationData = ANIMATION_DATA.map(data => ({
    X: spinValue.interpolate({
      inputRange: INPUT_RANGE,
      outputRange: data.X,
    }),
    Y: spinValue.interpolate({
      inputRange: INPUT_RANGE,
      outputRange: data.Y,
    }),
    ...(data.Z && {
      Z: spinValue.interpolate({
        inputRange: INPUT_RANGE,
        outputRange: data.Z,
      }),
    }),
  }));

  return (
    <>
      <View style={styles.container}>
        {animationData.map((data, i) => (
          <Animated.Image
            key={i}
            source={imageSources[i]}
            style={[
              styles.image,
              {
                transform: [
                  { rotateX: data.X },
                  { rotateY: data.Y },
                  ...(data.Z ? [{ rotateZ: data.Z }] : []),
                ],
              },
            ]}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -80,
    right: 20,
    width: 140,
    height: 140,
  },
  image: {
    position: 'absolute',
    backfaceVisibility: 'hidden',
    width: 140,
    height: 140,
    overflow: 'visible',
  },
});

export default SpinningIcon;
