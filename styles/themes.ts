import type { DefaultTheme } from 'styled-components';

import defaultTheme from './defaultTheme';

type Themes = {
  [key: string]: DefaultTheme;
};

const themes: Themes = { defaultTheme };

export default themes;
