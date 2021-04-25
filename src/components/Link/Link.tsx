import React, { FunctionComponent } from 'react';

import * as ButtonStyles from '~components/Button/button.styles';

import { ExternalLink, InternalLink } from './link.styles';

import { LinkLayout, LinkType } from './linkTypes';

const Link: FunctionComponent<LinkType> = ({
  children,
  to,
  layout = LinkLayout.Link,
  ...other
}) => {
  const internal = /^\/(?!\/)/.test(to);
  let Link: any = internal ? InternalLink : ExternalLink;

  if (layout === LinkLayout.Button) {
    Link = ButtonStyles.Button.withComponent(Link);
  }

  return (
    <Link {...other} to={internal && to} href={!internal && to}>
      {children}
    </Link>
  );
};

export default Link;
