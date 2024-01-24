import 'styled-components';

import type { WallpaperEffect } from 'types/styles/wallpaper';

declare module 'styled-components' {
  export interface DefaultTheme {
    
    wallpaper ?: WallpaperEffect;

    colors: {
      backgroundcolor: string;
      primary: string;
      window: string;
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
          width: string;
        };
        height: string;
      };
    };
  }
}
