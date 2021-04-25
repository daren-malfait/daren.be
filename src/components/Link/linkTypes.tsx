import { HTMLProps } from 'react';
import { ButtonColors } from '~components/Button/Button';

export enum LinkLayout {
  Link = 'link',
  Button = 'button',
}

export interface LinkType extends HTMLProps<HTMLLinkElement>, ButtonColors {
  to: string;
  layout?: LinkLayout;
}
