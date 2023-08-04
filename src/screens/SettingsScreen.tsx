import { useState } from 'react';
import { StyleSheet, Switch, View } from 'react-native';
import BodyText from 'src/components/BodyText';
import Heading from 'src/components/Heading';
import theme from 'src/util/theme';

export default function SettingsScreen() {
  const [colorTheme, setColorTheme] = useState<'light' | 'dark'>('light');
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Heading style={styles.headingText}>Dark Mode</Heading>
      </View>
      <View style={styles.row}>
        <BodyText style={styles.label}>
          Automatic (follow device setting)
        </BodyText>
        <Switch
          trackColor={{
            false: theme.colors.backgrounds.dark1,
            true: theme.colors.backgrounds.dark2,
          }}
          thumbColor={theme.colors.white}
          onValueChange={(on) => setColorTheme(on ? 'dark' : 'light')}
          value={colorTheme === 'dark'}
        />
      </View>
      <View style={styles.row}>
        <BodyText style={styles.label}>Dark Mode</BodyText>
        <Switch
          trackColor={{
            false: theme.colors.backgrounds.dark1,
            true: theme.colors.backgrounds.dark2,
          }}
          thumbColor={theme.colors.white}
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
    borderColor: theme.colors.dark4,
    marginBottom: theme.gaps.g12,
  },
  headingText: {
    borderBottomWidth: 1,
    borderColor: theme.colors.dark2,
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
