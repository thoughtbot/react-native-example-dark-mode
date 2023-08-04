import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import BodyText from 'src/components/BodyText';
import Heading from 'src/components/Heading';
import PrimaryButton from 'src/components/PrimaryButton';
import theme from 'src/util/theme';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Heading style={styles.heading}>Welcome to the app!</Heading>
      <BodyText style={styles.text}>
        This is a simple app to demonstrate supporting light and dark modes
      </BodyText>

      <PrimaryButton
        accessibilityRole="link"
        onPress={() => navigation.navigate('Settings')}
      >
        Go to settings
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgrounds.white,
    alignItems: 'center',
    paddingTop: 200,
    paddingHorizontal: theme.gaps.screen.horizontal,
  },
  heading: {
    marginBottom: theme.gaps.g12,
  },
  text: {
    marginBottom: theme.gaps.g24,
  },
});
