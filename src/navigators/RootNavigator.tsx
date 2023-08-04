import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'src/screens/HomeScreen';
import SettingsScreen from 'src/screens/SettingsScreen';
import useThemeContext from 'src/util/useThemeContext';

const Stack = createNativeStackNavigator();
export default function RootNavigator() {
  const { colors } = useThemeContext();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.backgrounds.default },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
