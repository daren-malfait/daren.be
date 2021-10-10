import cs from 'classnames';
import * as React from 'react';

import Link from '~components/Link/Link';
import { LinkLayout, LinkType } from '~components/Link/linkTypes';

function NavLink({ layout, className, ...linkProps }: LinkType) {
  return (
    <Link
      {...linkProps}
      layout={layout}
      className={cs(className, {
        small: layout === LinkLayout.Button,
      })}
    />
  );
}

export default React.memo(NavLink);
