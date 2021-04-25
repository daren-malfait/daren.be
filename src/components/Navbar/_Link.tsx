import React, { FunctionComponent, memo } from 'react';
import cs from 'classnames';

import Link from '~components/Link/Link';
import { LinkLayout, LinkType } from '~components/Link/linkTypes';

const NavLink: FunctionComponent<LinkType> = ({
  layout,
  className,
  ...linkProps
}) => {
  return (
    <Link
      {...linkProps}
      layout={layout}
      className={cs(className, {
        small: layout === LinkLayout.Button,
      })}
    />
  );
};

export default memo(NavLink);
