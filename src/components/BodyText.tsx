import { StyleSheet, Text, TextProps } from 'react-native';
import useThemeContext from 'src/util/useThemeContext';

type Props = TextProps;

export default function BodyText({ style, ...props }: Props) {
  const { colors } = useThemeContext();
  return (
    <Text
      style={[styles.text, { color: colors.grayscale1 }, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    lineHeight: 24,
  },
});
