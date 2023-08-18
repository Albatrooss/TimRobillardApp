import {
  Animated,
  Easing,
  ImageURISource,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useRef, useState } from 'react';

const ICON_MAP: Record<string, [ImageURISource, ImageURISource]> = {
  Contact: [
    require('../../Assets/Icons/Mail.png'),
    require('../../Assets/Icons/Mail_highlight.png'),
  ],
  Portfolio: [
    require('../../Assets/Icons/Portfolio.png'),
    require('../../Assets/Icons/Portfolio_highlight.png'),
  ],
  Home: [
    require('../../Assets/Icons/Resume.png'),
    require('../../Assets/Icons/Resume_highlight.png'),
  ],
};

const TabBar = ({ descriptors, state, navigation }: BottomTabBarProps) => {
  const iconSizes = useRef([
    new Animated.Value(0),
    new Animated.Value(1),
    new Animated.Value(0),
  ]).current;

  const [lastFocused, setLastFocused] = useState(1);

  const handleGrow = (index: number) => {
    Animated.timing(iconSizes[index], {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
      easing: Easing.bezier(0.17, 0.67, 0.83, 0.67),
    }).start();
  };

  const handleShrink = (index: number) => {
    Animated.timing(iconSizes[index], {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
      easing: Easing.bezier(0.17, 0.67, 0.83, 0.67),
    }).start();
  };

  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = (
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name
          ) as string;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
            handleGrow(index);
            handleShrink(lastFocused);
            setLastFocused(index);
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const imageScale = iconSizes[index].interpolate({
            inputRange: [0, 1],
            outputRange: [1, 1.1],
          });

          return (
            <View style={styles.tabIcon} key={label}>
              <TouchableHighlight
                activeOpacity={0.8}
                underlayColor="#fff"
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{
                  margin: 14,
                }}>
                <Animated.Image
                  source={ICON_MAP[route.name][isFocused ? 1 : 0]}
                  resizeMode="contain"
                  style={[styles.iamge, { transform: [{ scale: imageScale }] }]}
                />
              </TouchableHighlight>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
  },
  tabBar: {
    backgroundColor: '#fff',
    borderRadius: 200,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
    gap: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  tabIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
  },
  iamge: {
    width: 40,
    height: 40,
  },
});

export default TabBar;
