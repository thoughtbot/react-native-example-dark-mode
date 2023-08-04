import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { ColorSchemeName } from 'react-native';

const THEME_ASYNC_STORAGE_KEY = 'THEME_STATE';

type Props = {
  children: ReactNode;
};

export type ThemeContextState = {
  theme: ColorSchemeName;
  setTheme: React.Dispatch<React.SetStateAction<ColorSchemeName>>;
  loading: boolean;
};

export const ThemeContext = React.createContext<ThemeContextState | undefined>(
  undefined,
);
export default function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<ColorSchemeName>();
  const [loading, setLoading] = useState(true);

  void AsyncStorage.removeItem(THEME_ASYNC_STORAGE_KEY);

  useEffect(() => {
    const load = async () => {
      const storedTheme = (await AsyncStorage.getItem(
        THEME_ASYNC_STORAGE_KEY,
      )) as ColorSchemeName;

      setTheme(storedTheme);
      setLoading(false);
    };

    void load();
  }, []);

  useEffect(() => {
    if (theme) {
      void AsyncStorage.setItem(THEME_ASYNC_STORAGE_KEY, theme);
    } else {
      void AsyncStorage.removeItem(THEME_ASYNC_STORAGE_KEY);
    }
  }, [theme]);

  const contextState = useMemo(
    () => ({ loading, setTheme, theme }),
    [theme, loading],
  );

  if (loading) {
    return null;
  }

  return (
    <ThemeContext.Provider value={contextState}>
      {children}
    </ThemeContext.Provider>
  );
}
