import dynamic from 'next/dynamic';
import type { Process } from 'types/contexts/process';

// eslint-disable-next-line import/prefer-default-export
export const HelloWorld: Process = {
  Component: dynamic(() => import('components/apps/HelloWorld')),
  hasWindow: true,
  icon: '/chrome.ico',
  title: 'Hello'
};
