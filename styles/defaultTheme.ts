import type { DefaultTheme } from 'styled-components/dist/types';
import vantaWaves from 'utils/vantaWaves';

const colors = {
  backgroundcolor: '#000',
  primary: '#000',
  window: '#808080',
  taskbar: 'rgba(0,0,0,0.6)'
};

const wallpaper = vantaWaves({
  color: 0x5263,
  shininess: 100,
  waveHeight: 15,
  waveSpeed: 2,
  zoom: 0.5
});

const fonts = {
  clock: {
    size: '14px'
  }
};

const sizes = {
  clock: {
    width: '76px'
  },
  startButton: {
    width: '36px'
  },
  taskbar: {
    entry: {
      maxWidth: '161px'
    },
    height: '30px'
  }
};

const defaultTheme: DefaultTheme = { colors, sizes, wallpaper, fonts };

export default defaultTheme;
