import React, { FunctionComponent, memo } from 'react';

import * as Layout from '~components/layoutComponents';

import DefaultLayout from '~layouts/default';

import Seo from '~components/Seo/Seo';
import ContactForm from '~modules/ContactForm/ContactForm';

const HomePage: FunctionComponent = () => {
  return (
    <DefaultLayout>
      <Seo
        title="Laat ons praten — Daren"
        description="Neem contact op om uw project voor te stellen. Ik ben een webdeveloper uit Harelbeke klaar om uw website onder handen te nemen."
      />

      <Layout.Section>
        <Layout.Container>
          <ContactForm />
        </Layout.Container>
      </Layout.Section>
    </DefaultLayout>
  );
};

export default memo(HomePage);
