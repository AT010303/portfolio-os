import type { ComponentType } from 'react';

export type Process = {
  Component: ComponentType;
  hasWindow: boolean;
};

export type Processes = {
  [id: string]: Process;
};

export type ProcessContextState = {
  processes: Processes;
};

export type ProcessProviderProps = {
  startupProcesses: Processes;
  children: any; // becaues contexts process was crying may be react strict mode or es lint
};
