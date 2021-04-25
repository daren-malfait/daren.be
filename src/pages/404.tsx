import React, { FunctionComponent, memo } from 'react';

import * as Layout from '~components/layoutComponents';

import DefaultLayout from '~layouts/default';

import Seo from '~components/Seo/Seo';

const HomePage: FunctionComponent = () => {
  return (
    <DefaultLayout>
      <Seo title="" description="" />

      <Layout.Section>
        <Layout.Container>404</Layout.Container>
      </Layout.Section>
    </DefaultLayout>
  );
};

export default memo(HomePage);
