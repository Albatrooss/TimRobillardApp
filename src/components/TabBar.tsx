import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TabBar = ({ descriptors, state, navigation }: BottomTabBarProps) => (
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
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <View style={styles.tabIcon} key={label}>
            <TouchableHighlight
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                margin: 10,
              }}>
              <Icon name="z-wave" size={35} />
            </TouchableHighlight>
          </View>
        );
      })}
    </View>
  </View>
);

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
    gap: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,  
  },
  tabIcon: {},
});

export default TabBar;
