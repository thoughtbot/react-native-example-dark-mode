import {
  AccessibilityRole,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import theme from '../util/theme';

type Props = TouchableOpacityProps & {
  accessibilityRole: AccessibilityRole;
};

export default function PrimaryButton({ children, style, ...props }: Props) {
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      {typeof children === 'string' ? (
        <Text style={styles.text}>{children}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.backgrounds.primary,
    borderRadius: theme.radius.default,
    color: theme.colors.white,
    paddingHorizontal: theme.gaps.button.horizontal,
    paddingVertical: theme.gaps.button.vertical,
  },
  text: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 21,
  },
});
