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
      text: colors.grayscale1,
      background: colors.backgrounds.grayscale5,
      primary: colors.grayscale1,
    },
  };

  return (
    <RNNavigationContainer theme={navigationTheme}>
      {children}
    </RNNavigationContainer>
  );
}
