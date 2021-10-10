import cs from 'classnames';
import * as React from 'react';

import * as S from './button.styles';

export interface ButtonColors {
  background?: string;
  backgroundHover?: string;
  border?: string;
  borderHover?: string;
  color?: string;
  colorHover?: string;
}

interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'as'>,
    ButtonColors {
  type?: 'button' | 'submit' | 'reset';
  full?: false;
  small?: boolean;
  as?: any;
}

function Button({
  id,
  as,
  name,
  onClick,
  type = 'button',
  disabled,
  small,
  ...other
}: ButtonProps) {
  function handleClick(e) {
    if (disabled) {
      return;
    }

    if (onClick) onClick(e);
  }

  return (
    <S.Button
      id={id || name}
      as={as}
      name={name}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={cs({
        small,
      })}
      {...other}
    />
  );
}

export default Button;
