/* eslint-disable @next/next/no-document-import-in-page */
import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const withStyledComponents = async (
  ctx: DocumentContext
): Promise<DocumentInitialProps> => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
      });

    const { styles, ...initialProps } = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [styles, sheet.getStyleElement()]
    };
  } finally {
    sheet.seal();
  }
};

export default withStyledComponents;
