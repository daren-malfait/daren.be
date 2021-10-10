import * as React from 'react';

import * as Layout from '~components/layoutComponents';

import DefaultLayout from '~layouts/default';

function NotFoundPage() {
  return (
    <DefaultLayout>
      <Layout.Section>
        <Layout.Container>404</Layout.Container>
      </Layout.Section>
    </DefaultLayout>
  );
}

export default React.memo(NotFoundPage);
