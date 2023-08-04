import {
  DefaultTheme,
  NavigationContainer as RNNavigationContainer,
} from '@react-navigation/native';
import { ReactNode } from 'react';
import useThemeContext from 'src/util/useThemeContext';

type Props = {
  children: ReactNode;
};

export default function NavigationContainer({ children }: Props) {
  const { colors } = useThemeContext();

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      text: colors.text,
      background: colors.backgrounds.default,
      primary: colors.text,
    },
  };

  return (
    <RNNavigationContainer theme={navigationTheme}>
      {children}
    </RNNavigationContainer>
  );
}
