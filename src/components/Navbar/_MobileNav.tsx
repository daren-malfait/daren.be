import React, { FunctionComponent } from 'react';
import tw, { styled } from 'twin.macro';
import cs from 'classnames';
import { useClickOutside } from '~hooks/use-click-outside';
import GatsbyLink from 'gatsby-link';

import * as S from './navbar.styles';

import Hamburger from './_Hamburger';

import Logo from '~images/logo.svg';
import SmallContact from '~components/SmallContact/SmallContact';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  contact?: {
    email?: string;
  };
}

const MobileNav: FunctionComponent<MobileNavProps> = ({
  open,
  children,
  contact,
  onClose,
}) => {
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
};

const Drawer = styled.div`
  ${tw`
  bg-primary-900
  fixed
  h-screen
  right-0
  top-0
  transition-transform
  transform
  translate-x-full
  z-30
  w-screen
  max-w-screen-xsm
  md:hidden
  `}

  inset: 0px 0px 0px auto;

  &.open {
    ${tw`
    shadow-2xl
    translate-x-0
    `}
  }
`;

const Container = tw.div`
  space-y-8
  p-4
  text-center
`;

export default MobileNav;
