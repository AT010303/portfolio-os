import StyledApp from 'components/pages/StyledApp';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { ReactElement } from 'react';
import Metadata from 'components/pages/Metadata';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Metadata />
      <StyledApp>
        <Component {...pageProps} />
      </StyledApp>
    </>
  );
}
