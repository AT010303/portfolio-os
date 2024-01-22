import ProcessLoader from 'components/system/Processes/ProcessLoader';
import { ProcessProvider } from 'contexts/process';
import Desktop from 'components/system/Desktop';

export default function Home(): React.ReactElement {
  return (
    <Desktop>
      <ProcessProvider>
        <ProcessLoader />
      </ProcessProvider>
    </Desktop>
  );
}
