import React, { FunctionComponent, useCallback } from 'react';
import cs from 'classnames';

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

const Button: FunctionComponent<ButtonProps> = ({
  id,
  as,
  name,
  onClick,
  type = 'button',
  disabled,
  small,
  ...other
}) => {
  const handleClick = useCallback(
    e => {
      if (disabled) {
        return;
      }

      if (onClick) onClick(e);
    },
    [onClick, disabled],
  );

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
};

export default Button;
