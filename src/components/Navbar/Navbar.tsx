import cs from 'classnames';
import GatsbyLink from 'gatsby-link';
import * as React from 'react';

import Hamburger from './_Hamburger';
import Link from './_Link';
import MobileNav from './_MobileNav';
import * as S from './navbar.styles';

import Logo from '~images/logo.svg';

interface NavbarProps {
  contact?: {
    email?: string;
  };
  children?: React.ReactNode;
}

function Navbar({ children, contact }: NavbarProps) {
  const [open, setOpen] = React.useState(false);

  const onToggle = React.useCallback(() => {
    setOpen(current => !current);
  }, []);

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
}

export default Object.assign(Navbar, { Link });
