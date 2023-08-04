import { StyleSheet, Text, TextProps } from 'react-native';
import useThemeContext from 'src/util/useThemeContext';

type Props = TextProps;

export default function Heading({ style, ...props }: Props) {
  const { colors } = useThemeContext();

  return (
    <Text
      accessibilityRole="header"
      style={[styles.text, { color: colors.text }, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 21,
    lineHeight: 28,
    fontWeight: '600',
  },
});
