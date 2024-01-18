import type { SessionContextState } from 'types/contexts/session';
import { useState } from 'react';

const useSessionContextState = (): SessionContextState => {
  const [themeName, setThemeName] = useState('');
  return {
    themeName,
    setThemeName
  };
};

export default useSessionContextState;
