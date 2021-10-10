import { Global } from '@emotion/react';
import * as React from 'react';

import FadeIn from '~components/FadeIn/FadeIn';
import Footer from '~components/Footer/Footer';
import GridBackground from '~components/GridBackground/GridBackground';

import Navigation from '~modules/Navigation/Navigation';

import { globalStyles } from '~styles/globalStyles';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <GridBackground />

      <Navigation />
      <main>{children}</main>

      <FadeIn>
        <Footer />
      </FadeIn>
    </>
  );
}

export default Layout;
