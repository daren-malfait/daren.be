import React, { FunctionComponent } from 'react';
import { Global } from '@emotion/react';

import Footer from '~components/Footer/Footer';
import GridBackground from '~components/GridBackground/GridBackground';
import FadeIn from '~components/FadeIn/FadeIn';

import Navigation from '~modules/Navigation/Navigation';

import { globalStyles } from '~styles/globalStyles';

const Layout: FunctionComponent = ({ children }) => (
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

export default Layout;
