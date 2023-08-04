const colors: Record<ColorThemeName, ThemeColors> = {
  light: {
    grayscale1: '#222',
    grayscale2: '#454547',
    grayscale4: '#ddd',
    grayscale5: '#fff',
    backgrounds: {
      grayscale1: '#29292c',
      grayscale2: '#565656',
      grayscale5: '#fff',
      primary: '#e03131',
    },
  },
  dark: {
    grayscale1: '#fff',
    grayscale2: '#888',
    grayscale4: '#454547',
    grayscale5: '#29292c',
    backgrounds: {
      grayscale1: '#fff',
      grayscale2: '#eee',
      grayscale5: '#29292c',
      primary: '#e03131',
    },
  },
};

export default colors;

export type ThemeColors = {
  /** darkest color. In dark mode, is lightest */
  grayscale1: string;
  grayscale2: string;
  grayscale4: string;
  /** lightest color. In dark mode, is darkest */
  grayscale5: string;
  backgrounds: {
    /** darkest color. In dark mode, is lightest */
    grayscale1: string;
    grayscale2: string;
    /** lightest color. In dark mode, is darkest */
    grayscale5: string;
    primary: string;
  };
};

export type BaseColorName = keyof Omit<ThemeColors, 'backgrounds'>;
export type BackgroundColorName = keyof ThemeColors['backgrounds'];
export type ColorThemeName = 'light' | 'dark';
