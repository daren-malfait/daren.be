import cs from 'classnames';
import GatsbyLink from 'gatsby-link';
import * as React from 'react';
import tw, { styled } from 'twin.macro';

import Hamburger from './_Hamburger';
import * as S from './navbar.styles';

import SmallContact from '~components/SmallContact/SmallContact';
import { useClickOutside } from '~hooks/use-click-outside';

import Logo from '~images/logo.svg';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  contact?: {
    email?: string;
  };
  children?: React.ReactNode;
}

function MobileNav({ open, children, contact, onClose }: MobileNavProps) {
  const ref = useClickOutside(open ? onClose : undefined);

  return (
    <Drawer
      ref={open ? ref : null}
      className={cs({
        open,
      })}
    >
      <S.Container>
        <S.Main>
          <GatsbyLink to="/">
            <S.LogoContainer>
              <Logo />
            </S.LogoContainer>
          </GatsbyLink>
          <Hamburger open={open} onClick={onClose} />
        </S.Main>
      </S.Container>
      <Container>
        {children}

        <SmallContact {...contact} />
      </Container>
    </Drawer>
  );
}

const Drawer = styled.div`
  ${tw`fixed top-0 z-30 w-screen h-screen transition-transform transform[translateX(100vw)] left-0 bg-primary-900 max-w-screen-xsm md:hidden`}

  inset: 0px 0px 0px auto;

  &.open {
    ${tw`transform translate-x-0 shadow-2xl `}
  }
`;

const Container = tw.div`
  space-y-8
  p-4
  text-center
`;

export default MobileNav;
