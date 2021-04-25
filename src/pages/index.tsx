import React, { FunctionComponent, memo } from 'react';

import * as Layout from '~components/layoutComponents';

import DefaultLayout from '~layouts/default';

import Seo from '~components/Seo/Seo';
import Link from '~components/Link/Link';
import Summary from '~components/Summary/Summary';
import FadeIn from '~components/FadeIn/FadeIn';
import { LinkLayout } from '~components/Link/linkTypes';

const HomePage: FunctionComponent = () => {
  return (
    <DefaultLayout>
      <Seo
        title="Uw nieuwe website door Daren"
        description="Met een focus op gebruiksvriendelijkheid, snelheid en hoge functionaliteit
              ga ik voor jou aan de slag om een pareltje van een website of
              applicatie te maken."
      />

      <FadeIn>
        <Layout.Section>
          <Layout.Container>
            <FadeIn>
              <h1>
                Wist je dat 1 seconde vertraging de tevredenheid van gebruikers
                doet zakken met 16%?
              </h1>
              <p>
                Volgens{' '}
                <a
                  href="https://think.storage.googleapis.com/docs/mobile-page-speed-new-industry-benchmarks.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  een Google page-load tijdstudie
                </a>{' '}
                verhoogt een laadtijd van 1-3 seconden de kans dat mensen meteen
                wegklikken van jouw website met 32%. Dat verdrievoudigt zelfs
                wanneer je daar 1 seconde aan toevoegt.
              </p>
              <Link layout={LinkLayout.Button} to="/contact">
                Ik wil een snelle website
              </Link>
            </FadeIn>
          </Layout.Container>
        </Layout.Section>
        <Layout.Section>
          <Layout.Container>
            <h2>Ik help je met</h2>
            <Summary
              items={[
                'webdesign',
                'webdevelopment',
                'webapplicaties',
                'UX-design',
                'javascript expertise',
                'jamstack expertise',
              ]}
            />
          </Layout.Container>
        </Layout.Section>
        <Layout.Section>
          <Layout.Container>
            <h2>
              Een grafisch mooi en technisch goed onderbouwde website draagt bij
              aan jouw uitstraling.{' '}
            </h2>
            <p>
              Met een focus op gebruiksvriendelijkheid en hoge functionaliteit
              ga ik voor jou aan de slag om een pareltje van een website of
              applicatie te maken.
            </p>
          </Layout.Container>
        </Layout.Section>
        <Layout.Section>
          <Layout.Container>
            <h2>Het beste resultaat is een tevreden gebruiker.</h2>
            <p>
              Een user-first approach is waar ik naar streef. Uiteindelijk zijn
              de gebruikers van uw website de mensen die er mee moeten werken.
              Dat resulteert onrechtstreeks in meer omzet.
            </p>
          </Layout.Container>
        </Layout.Section>
      </FadeIn>
    </DefaultLayout>
  );
};

export default memo(HomePage);
