import { useCallback, useContext, useMemo } from 'react';
import { ColorSchemeName, useColorScheme } from 'react-native';
import { ThemeContext } from 'src/store/ThemeProvider';
import colors from './theme/colors';

export default function useThemeContext() {
  const context = useContext(ThemeContext);
  const systemColorScheme = useColorScheme();

  if (context === undefined) {
    throw new Error('useThemeContext must be within ThemeProvider');
  }

  const { theme, loading, setTheme } = context;

  if (loading) {
    throw new Error('Tried to use ThemeContext before initialized');
  }

  const colorTheme: NonNullable<ColorSchemeName> =
    theme ?? systemColorScheme ?? 'light';

  return {
    colors: useMemo(() => {
      return colors[colorTheme || 'light'];
    }, [colorTheme]),
    colorTheme,
    isSystemTheme: !theme,
    isDark: theme === 'dark',
    systemTheme: systemColorScheme,
    setColorTheme: useCallback(
      (themeName: ColorSchemeName) => setTheme(themeName),
      [setTheme],
    ),
  };
}
