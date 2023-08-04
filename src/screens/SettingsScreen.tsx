import { StyleSheet, Switch, View } from 'react-native';
import BodyText from 'src/components/BodyText';
import Heading from 'src/components/Heading';
import theme from 'src/util/theme/theme';
import useThemeContext from 'src/util/useThemeContext';

export default function SettingsScreen() {
  const { colors, isSystemTheme, systemTheme, colorTheme, setColorTheme } =
    useThemeContext();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.backgrounds.grayscale5 },
      ]}
    >
      <View style={styles.heading}>
        <Heading
          style={[
            styles.headingText,
            { color: colors.grayscale1, borderColor: colors.grayscale2 },
          ]}
        >
          Dark Mode
        </Heading>
        <BodyText style={{ color: colors.grayscale1 }}>
          System: {isSystemTheme.toString()}. Theme:{' '}
          {JSON.stringify(colorTheme)}
        </BodyText>
      </View>
      <View style={styles.row}>
        <BodyText style={styles.label}>
          Automatic (follow device setting)
        </BodyText>
        <Switch
          trackColor={{
            false: colors.backgrounds.grayscale1,
            true: colors.backgrounds.grayscale2,
          }}
          thumbColor={colors.grayscale5}
          onValueChange={(on) => setColorTheme(on ? null : systemTheme)}
          value={isSystemTheme}
        />
      </View>
      <View style={styles.row}>
        <BodyText
          style={[styles.label, isSystemTheme && { color: colors.grayscale2 }]}
        >
          Dark Mode
        </BodyText>
        <Switch
          trackColor={{
            false: colors.backgrounds.grayscale1,
            true: colors.backgrounds.grayscale2,
          }}
          disabled={isSystemTheme}
          thumbColor={colors.grayscale5}
          onValueChange={(on) => setColorTheme(on ? 'dark' : 'light')}
          value={colorTheme === 'dark'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: theme.gaps.g24,
    paddingHorizontal: theme.gaps.screen.horizontal,
  },
  heading: {
    borderBottomWidth: 1,
    marginBottom: theme.gaps.g12,
  },
  headingText: {
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: theme.gaps.g12,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
});
