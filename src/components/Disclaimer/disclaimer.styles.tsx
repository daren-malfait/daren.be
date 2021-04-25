import tw, { styled } from 'twin.macro';

export const Container = tw.div`
  w-full
  text-center
  mt-default
`;

export const Link = tw.a`
  font-bold
`;

export const Part = styled.div`
  ${tw`
  block
  px-3
  relative
  md:inline-block
  text-primary-900
  `}

  &:first-of-type:after {
    content: '|';
    ${tw`
    hidden
    md:inline-block
    absolute
    right-0
    `}
  }
`;
