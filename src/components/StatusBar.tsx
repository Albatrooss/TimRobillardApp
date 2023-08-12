import { StatusBar as NativeStatusBar, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../utils';
import { useLayoutContext } from '../contexts/layout';

const STATUSBAR_HEIGHT = NativeStatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 48 : 56;

const StatusBar = () => {
  const { statusBarColor } = useLayoutContext();
  return (
    <>
      <View
        style={{
          backgroundColor: COLORS[statusBarColor],
          height: STATUSBAR_HEIGHT,
        }}>
        <SafeAreaView>
          <NativeStatusBar
            translucent
            backgroundColor={COLORS[statusBarColor]}
          />
        </SafeAreaView>
      </View>
      <View
        style={{
          height: APPBAR_HEIGHT,
          backgroundColor: COLORS[statusBarColor],
        }}
      />
    </>
  );
};

export default StatusBar;
