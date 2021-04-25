import tw, { styled } from 'twin.macro';

import breakpoints from '~styles/breakpoints';

export const InnerContainer = tw.div`
  mt-8
  xl:flex
  xl:space-x-16
`;

export const Title = tw.h2`
  max-w-4xl
`;

export const ContentContainer = styled.div`
  ${tw`
  w-full
  mb-default
  `}

  @media screen and (min-width: ${breakpoints.xl}) {
    width: calc(100% * 2 / 3);
    ${tw`
    pr-xlarge
    `}
  }

  p {
    ${tw`
    text-lg
    `}
  }
`;
