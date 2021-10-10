import * as React from 'react';
import Obfuscate from 'react-obfuscate';
import tw, { styled } from 'twin.macro';

import config from '../../../config/website';

import breakpoints from '~styles/breakpoints';

const Item = styled.div`
  ${tw`flex flex-col flex-wrap mb-default`}

  span, a {
    ${tw`self-start inline-block w-auto mb-2 text-lg `};
  }
`;

const Container = styled.div`
  @media screen and (min-width: ${breakpoints.sm}) {
    width: calc(100% * 1 / 3);
  }
`;

function Links() {
  return (
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
          href="https://github.com/darenmalfait"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </Item>
    </Container>
  );
}

export default React.memo(Links);
