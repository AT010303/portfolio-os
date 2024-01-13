import useSessionContextState from 'hooks/useSessionContextState';
import type { FC } from 'react';
import { createContext } from 'react';
import type { SessionContextState } from 'types/contexts/session';

const SessionContext = createContext<SessionContextState>({});

export const SessionProvider: FC<{ children: any }> = ({ children }) => (
  <SessionContext.Provider value={useSessionContextState()}>
    {children}
  </SessionContext.Provider>
);

export const SessionConsumer = SessionContext.Consumer;
