import { StyleSheet, Text, TextProps } from 'react-native';
import theme from 'src/util/theme';

type Props = TextProps;

export default function Heading({ style, ...props }: Props) {
  return (
    <Text accessibilityRole="header" style={[styles.text, style]} {...props} />
  );
}

const styles = StyleSheet.create({
  text: {
    color: theme.colors.dark2,
    fontSize: 21,
    lineHeight: 28,
    fontWeight: '600',
  },
});
