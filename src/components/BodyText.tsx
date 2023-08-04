import { StyleSheet, Text, TextProps } from 'react-native';
import theme from 'src/util/theme';

type Props = TextProps;

export default function BodyText({ style, ...props }: Props) {
  return <Text style={[styles.text, style]} {...props} />;
}

const styles = StyleSheet.create({
  text: {
    color: theme.colors.dark2,
    fontSize: 18,
    lineHeight: 24,
  },
});
