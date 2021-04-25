import tw, { styled } from 'twin.macro';

import breakpoints from '~styles/breakpoints';

export const Container = tw.div`
  text-base
`;

export const Address = styled.div`
  ${tw`
  relative
  mb-small
  md:mb-0
  md:pr-6
  md:inline-block
  `}

  &:before {
    @media screen and (min--width: ${breakpoints.md}) {
      content: '•';

      ${tw`
      absolute
      -right-1
      top-0
      text-2xl
      `}
    }
  }
`;

export const Email = tw.div`
  mb-small
  md:mb-0
  md:inline-block
  md:ml-6
`;

export const Phone = tw.div`
  mb-small
  md:mb-0
  md:inline-block
  md:ml-6
`;
