import tw, { styled } from 'twin.macro';

export const Container = tw.div`
  antialiased
  w-full
  text-primary-800
  bg-primary-900
  flex
  flex-col
  max-w-screen-2xl
  py-4
  px-4
  mx-auto
  md:items-center
  md:justify-between
  md:flex-row
`;

export const Nav = tw.nav`
  hidden
  py-4
  flex-col
  flex-grow
  space-x-4
  md:py-0
  md:flex
  md:justify-end
  md:items-center
  md:flex-row
`;

export const Main = tw.div`
  flex
  flex-row
  items-center
  justify-between
`;

export const LogoContainer = styled.div`
  ${tw`
  w-10
  h-10
  tracking-widest
  text-primary-800
  `}
`;

export const Overlay = styled.div`
  ${tw`
  fixed
  top-0
  left-0
  w-full
  h-full
  z-20
  opacity-0
  bg-primary-100
  pointer-events-none
  transition
  transition-opacity
  md:hidden
  `}

  &.open {
    ${tw`
    opacity-20
    `}
  }
`;
