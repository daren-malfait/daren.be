import GatsbyLink from 'gatsby-link';
import tw, { styled, css } from 'twin.macro';

import { SmallButtonStyles } from '~components/Button/button.styles';

const linkStyles = css`
  ${SmallButtonStyles}

  ${tw`
  mt-2
  bg-transparent
  md:mt-0
  text-primary-700
  hover:text-primary-900
  focus:text-primary-900
  hover:no-underline
  focus:bg-primary-800
  focus:outline-none
`}
`;

export const InternalLink = styled(GatsbyLink)`
  ${linkStyles}
`;

export const ExternalLink = styled.a`
  ${linkStyles}
`;
