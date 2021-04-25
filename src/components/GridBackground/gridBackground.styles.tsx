import tw, { styled } from 'twin.macro';

import breakpoints from '~styles/breakpoints';

export const Container = styled.div`
  @media screen and (min-width: ${breakpoints.md}) {
    ${tw`
    block
    fixed
    top-0
    pointer-events-none
    w-full
    h-full
    `}
  }
`;

export const GridContainer = styled.div`
  ${tw`
  grid
  gap-x-3
  items-start
  m-auto
  relative
  items-stretch
  h-full
  w-full
  `}

  grid-template-columns: repeat(7, 1fr);
  max-width: calc(100% - 40px);
  z-index: 1;
`;

export const Line = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.07);
  grid-column: span 1 / auto;
`;
