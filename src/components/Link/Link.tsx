import * as React from 'react';

import { ExternalLink, InternalLink } from './link.styles';

import { LinkLayout, LinkType } from './linkTypes';

import * as ButtonStyles from '~components/Button/button.styles';

function Link({ children, to, layout = LinkLayout.Link, ...other }: LinkType) {
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
}

export default Link;
