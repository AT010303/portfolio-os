import ProcessLoader from 'components/system/ProcessLoader';
import { ProcessProvider } from 'contexts/process';
import type { ReactElement } from 'react';
import { getStartupProcesses } from 'utils/processDirectory';
import Desktop from 'components/system/Desktop';

export default function Home(): ReactElement {
  return (
    <Desktop>
      <ProcessProvider startupProcesses={getStartupProcesses()}>
        <ProcessLoader />
      </ProcessProvider>
    </Desktop>
  );
}
