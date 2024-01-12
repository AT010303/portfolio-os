import StyledApp from 'components/pages/StyledApp';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { ReactElement } from 'react';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>portfolio-os</title>
        <meta name="description" content="My portfolio website" />
      </Head>
      <StyledApp>
        <Component {...pageProps} />
      </StyledApp>
    </>
  );
}
