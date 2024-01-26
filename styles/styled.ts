import 'styled-components';

import type { WallpaperEffect } from 'types/styles/wallpaper';

declare module 'styled-components' {
  export interface DefaultTheme {
    wallpaper?: WallpaperEffect;

    colors: {
      backgroundcolor: string;
      primary: string;
      window: string;
      taskbar: string;
    };

    fonts: {
      clock: {
        size: string;
      };
    };

    sizes: {
      clock: {
        width: string;
      };
      startButton: {
        width: string;
      };
      taskbar: {
        entry: {
          maxWidth: string;
        };
        height: string;
      };
    };
  }
}
