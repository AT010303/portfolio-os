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

    formats: {
      date: Intl.DateTimeFormatOptions;
      time: Intl.DateTimeFormatOptions;
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
          bottomBorder: string;
          fontSize: string;
          icon: {
            margin: string;
            size: string;
          };
          maxWidth: string;
        };
        height: string;
      };
    };
  }
}
