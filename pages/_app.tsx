import Metadata from 'components/pages/Metadata';
import StyledApp from 'components/pages/StyledApp';
import { FileSystemProvider } from 'contexts/fileSystem';
import { SessionProvider } from 'contexts/session';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <FileSystemProvider>
    <SessionProvider>
      <StyledApp>
        <Metadata />
        <Component {...pageProps} />
      </StyledApp>
    </SessionProvider>
  </FileSystemProvider>
);

export default App;
