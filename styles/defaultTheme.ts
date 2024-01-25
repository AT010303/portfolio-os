import vantaWaves from 'utils/vantaWaves';

const colors = {
  backgroundcolor: '#000',
  primary: '#000',
  window: '#808080'
};

const wallpaper = vantaWaves({
  color: 0x222222,
  shininess: 75,
  waveHeight: 40,
  waveSpeed: 1,
  zoom: 0.9
});

const fonts = {
  clock:{
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
      width: '80px'
    },
    height: '30px'
  }
};

const defaultTheme = { colors, sizes, wallpaper, fonts };

export default defaultTheme;
