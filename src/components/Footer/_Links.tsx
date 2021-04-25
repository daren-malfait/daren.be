import React, { FunctionComponent, memo } from 'react';
import Obfuscate from 'react-obfuscate';
import tw, { styled } from 'twin.macro';

import config from '../../../config/website';

import breakpoints from '~styles/breakpoints';

const Item = styled.div`
  ${tw`
  mb-default
  flex
  flex-col
  flex-wrap
  `}

  span, a {
    ${tw`
    self-start
    inline-block
    w-auto
    text-lg
    mb-2
    `};
  }
`;

const Container = styled.div`
  @media screen and (min-width: ${breakpoints.sm}) {
    width: calc(100% * 1 / 3);
  }
`;

const Links: FunctionComponent = () => (
  <Container>
    <Item>
      <span>Wil je contact opnemen?</span>
      <Obfuscate
        email={config.email}
        headers={{
          subject: 'Hey Daren!',
          body: 'Hey Daren, Ik zag net jouw website.',
        }}
      />
    </Item>

    <Item>
      <span>Vind me op andere plaatsen:</span>
      <a
        href="https://www.linkedin.com/in/darenmalfait/"
        target="_blank"
        rel="noopener noreferrer"
      >
        linkedIn
      </a>
      <a
        href="https://github.com/daren-malfait"
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </a>
    </Item>
  </Container>
);

export default memo(Links);
