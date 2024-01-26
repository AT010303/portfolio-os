import * as THREE from 'three';
import type { WallpaperEffect } from 'types/styles/wallpaper';
// @ts-expect-error No declaration file is required
import WAVES from 'vanta/dist/vanta.waves.min';

type VantaWavesSettings = {
  color: number;
  shininess: number;
  waveHeight: number;
  waveSpeed: number;
  zoom: number;
};

const disableControls = {
  mouseControls: false,
  touchControls: false
};

const vantaWaves =
  (settings: VantaWavesSettings): WallpaperEffect =>
  (element) => {
    const vantaEffect = element
      ? WAVES({
          el: element,
          THREE,
          ...disableControls,
          ...settings
        })
      : undefined;

    return () => {
      vantaEffect?.destroy?.();
    };
  };

export default vantaWaves;
