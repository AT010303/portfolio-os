import { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';

const useWallpaper = (desktopRef: React.RefObject<HTMLElement>): void => {
  const { wallpaper } = useContext(ThemeContext) as any;

  useEffect(() => wallpaper?.(desktopRef), [desktopRef, wallpaper]);
};

export default useWallpaper;
