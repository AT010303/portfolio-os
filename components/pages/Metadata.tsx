import Head from 'next/head';
import type { FC } from 'react';
import type { MetadataProps } from 'types/components/pages/Metadata';

const Metadata: FC<MetadataProps> = ({
  description = 'My portfolio website',
  title = 'portfolio-os'
}) => (
  <Head>
    <meta name="description" content={description} />
    <title>{title}</title>
  </Head>
);

export default Metadata;
