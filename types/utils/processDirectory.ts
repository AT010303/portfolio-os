import type { ComponentType } from 'react';

export type Process = {
  Component: any;
  children: any;
};

export type Processes = {
  [id: string]: Process;
};
