import tw, { styled } from 'twin.macro';

export const Wrapper = tw.div`
  space-y-8
  max-w-2xl
`;

export const TwoColumn = styled(Wrapper)`
  ${tw`
  space-y-8
  lg:flex
  lg:max-w-full
  lg:flex-nowrap
  lg:space-x-large
  lg:space-y-0
  `}
`;

export const Disclaimer = tw.span`
  mt-8
  block
  text-sm
`;
