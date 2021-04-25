import React, { FunctionComponent, memo } from 'react';

import * as S from './footer.styles';
import * as Layout from '~components/layoutComponents';

import config from '../../../config/website';

import Links from './_Links';
import Disclaimer from '~components/Disclaimer/Disclaimer';
import Link from '~components/Link/Link';

import { LinkLayout } from '~components/Link/linkTypes';
import GatsbyLink from 'gatsby-link';

const Footer: FunctionComponent = () => {
  return (
    <Layout.Section as="footer">
      <Layout.Container>
        <S.Title>
          Heb je vragen, feedback of iets anders?{' '}
          <GatsbyLink to="/contact">Email mij</GatsbyLink>
        </S.Title>
        <S.InnerContainer>
          <S.ContentContainer>
            <p>
              Je bent op de onderkant van mijn website gekomen. Ik sta altijd
              open om eens te mailen of te chatten indien je nog vragen zou
              hebben.
            </p>
            <Link layout={LinkLayout.Button} to="/contact">
              Neem contact op
            </Link>
          </S.ContentContainer>
          <Links />
        </S.InnerContainer>
        <Disclaimer companyName={config.organization} />
      </Layout.Container>
    </Layout.Section>
  );
};

export default memo(Footer);
