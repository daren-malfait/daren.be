import React, { FunctionComponent, memo } from 'react';

import config from '../../../config/website';

import { LinkLayout } from '~components/Link/linkTypes';
import Navbar from '~components/Navbar/Navbar';

const Navigation: FunctionComponent = () => {
  return (
    <Navbar contact={{ email: config.email }}>
      <Navbar.Link layout={LinkLayout.Button} to="/contact">
        contacteer mij
      </Navbar.Link>
    </Navbar>
  );
};

export default memo(Navigation);
