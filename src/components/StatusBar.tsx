import { StatusBar as NativeStatusBar, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../utils';

const STATUSBAR_HEIGHT = NativeStatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 48 : 56;

const StatusBar = () => {
  return (
    <>
      <View
        style={{ backgroundColor: COLORS.orange, height: STATUSBAR_HEIGHT }}>
        <SafeAreaView>
          <NativeStatusBar translucent backgroundColor={COLORS.orange} />
        </SafeAreaView>
      </View>
      <View style={{ height: APPBAR_HEIGHT, backgroundColor: COLORS.orange }} />
    </>
  );
};

export default StatusBar;
