const colors: Record<ColorThemeName, ThemeColors> = {
  light: {
    text: '#222',
    textMuted: '#454547',
    textLight: '#fff',
    backgrounds: {
      default: '#fff',
      soft: '#e0e0e4',
      strong: '#555',
      primary: '#e03131',
      inverted: '#29292c',
    },
  },
  dark: {
    text: '#fff',
    textMuted: '#ccc',
    textLight: '#fff',
    backgrounds: {
      default: '#29292c',
      soft: '#565659',
      strong: '#aaa',
      primary: '#e03131',
      inverted: '#fff',
    },
  },
};

export default colors;

export type ThemeColors = {
  text: string;
  textMuted: string;
  textLight: string;
  backgrounds: {
    /** white in light mode, dark in dark mode */
    default: string;
    soft: string;
    /** dark in light mode, light in dark mode */
    strong: string;
    primary: string;
    inverted: string;
  };
};

export type ColorThemeName = 'light' | 'dark';
