import dynamic from 'next/dynamic';
import type { Processes } from 'types/contexts/process';
import Taskbar from 'components/system/Taskbar/Taskbar';

const STARTUP_PROCESSES: string[] = ['Taskbar'];

export const processDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(() => import('components/apps/HelloWorld')),
    hasWindow: true
  },
  Taskbar: {
    Component: Taskbar
  }
};

export const getStartupProcesses = (): Processes =>
  STARTUP_PROCESSES.reduce(
    (processes, processId) => ({
      ...processes,
      [processId]: processDirectory[processId]
    }),
    {}
  );
