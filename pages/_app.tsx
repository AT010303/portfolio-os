import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { ReactElement } from 'react';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

`;

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>portfolio-os</title>
        <meta name="description" content="My portfolio website" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
