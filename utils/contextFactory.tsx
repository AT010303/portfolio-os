/* eslint-disable no-unused-vars */
import { createContext, ReactNode } from 'react';

type ContextFactory = <T>(
  initialContextState: T,
  useContextState: () => T
) => {
  Consumer: React.Consumer<T>;
  Provider: React.FC<{ children: ReactNode }>;
};

const contextFactory: ContextFactory = (
  initialContextState,
  useContextState
) => {
  const { Consumer, Provider } = createContext(initialContextState);
  const ProcessProvider: React.FC<{ children: ReactNode }> = ({ children }) => (
    <Provider value={useContextState()}>{children}</Provider>
  );

  return { Consumer, Provider: ProcessProvider };
};

export default contextFactory;
