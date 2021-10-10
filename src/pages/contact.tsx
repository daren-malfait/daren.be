import * as React from 'react';

import * as Layout from '~components/layoutComponents';

import Seo from '~components/Seo/Seo';
import DefaultLayout from '~layouts/default';

import ContactForm from '~modules/ContactForm/ContactForm';

function ContactPage() {
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
}

export default React.memo(ContactPage);
