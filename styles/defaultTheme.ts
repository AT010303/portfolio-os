import type { DefaultTheme } from 'styled-components/dist/types';
import vantaWaves from 'utils/vantaWaves';

const colors = {
  backgroundcolor: '#000',
  primary: '#000',
  window: '#808080',
  taskbar: 'rgba(10,10,10,0.75)'
};

const wallpaper = vantaWaves({
  color: 0x5263,
  shininess: 100,
  waveHeight: 15,
  waveSpeed: 2,
  zoom: 0.5
});

const formats = {
  date: <Intl.DateTimeFormatOptions>{
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  },
  time: <Intl.DateTimeFormatOptions>{
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }
};

const fonts = {
  clock: {
    size: '14px'
  }
};

const sizes = {
  clock: {
    width: '86px'
  },
  startButton: {
    width: '36px'
  },
  taskbar: {
    entry: {
      bottomBorder: '2px solid #76b9ed',
      fontSize: '14px',
      icon: {
        margin: '0 5px',
        size: '28px'
      },
      maxWidth: '161px'
    },
    height: '40px'
  }
};

const defaultTheme: DefaultTheme = { colors, formats, sizes, wallpaper, fonts };

export default defaultTheme;
