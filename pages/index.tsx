import ProcessLoader from 'components/system/ProcessLoader';
import { ProcessProvider } from 'contexts/process';
import { getStartupProcesses } from 'utils/processDirectory';
import Desktop from 'components/system/Desktop';

export default function Home(): React.ReactElement {
  return (
    <Desktop>
      <ProcessProvider startupProcesses={getStartupProcesses()}>
        <ProcessLoader />
      </ProcessProvider>
    </Desktop>
  );
}
