import { StatusBar } from 'expo-status-bar';
import NavigationContainer from 'src/navigators/NavigationContainer';
import RootNavigator from 'src/navigators/RootNavigator';
import ThemeProvider from 'src/store/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <StatusBar />
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
