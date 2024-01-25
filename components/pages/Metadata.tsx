import Head from 'next/head';

// import { description, name } from 'package.json';
// error with importing from package.json
// Should not import the named export 'name' (imported as 'name') from default-exporting module (only default export is available soon)

const Metadata = (): JSX.Element => (
  <Head>
    <meta name="description" content="My portfolio website" />
    <title>portfolio-os</title>
  </Head>
);

export default Metadata;
