import { StatusBar as RNStatusBar, StatusBarStyle } from 'expo-status-bar';
import React from 'react';
import useThemeContext from 'src/util/useThemeContext';

type Props = {
  style?: StatusBarStyle;
};

export default function StatusBar({ style }: Props) {
  const { colorTheme } = useThemeContext();
  const styleComputed = style ?? colorTheme === 'dark' ? 'light' : 'dark';

  return <RNStatusBar style={styleComputed} />;
}
