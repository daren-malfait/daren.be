import React, { FunctionComponent, useCallback, useState } from 'react';
import GatsbyLink from 'gatsby-link';
import cs from 'classnames';

import * as S from './navbar.styles';

import Link from './_Link';
import Hamburger from './_Hamburger';
import MobileNav from './_MobileNav';

import Logo from '~images/logo.svg';

interface NavbarProps {
  contact?: {
    email?: string;
  };
}

const Navbar: FunctionComponent<NavbarProps> & {
  Link: typeof Link;
} = ({ children, contact }) => {
  const [open, setOpen] = useState(false);

  const onToggle = useCallback(() => {
    setOpen(current => !current);
  }, [setOpen]);

  return (
    <S.Container>
      <S.Main>
        <GatsbyLink aria-label="home page" to="/">
          <S.LogoContainer>
            <Logo />
          </S.LogoContainer>
        </GatsbyLink>
        <Hamburger open={open} onClick={onToggle} />
      </S.Main>
      <S.Nav>{children}</S.Nav>
      <MobileNav contact={contact} onClose={onToggle} open={open}>
        {children}
      </MobileNav>
      <S.Overlay className={cs({ open })} />
    </S.Container>
  );
};

Navbar.Link = Link;

export default Navbar;
