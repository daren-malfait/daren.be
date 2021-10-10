import cs from 'classnames';
import * as React from 'react';

import * as S from './input.styles';

import Check from '../Check/Check';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  as?: any;
  id: string;
  error?: string | boolean;
  valid?: boolean;
  label: string;
  type?: 'text' | 'number' | 'password' | 'email';
}

function Input({
  as,
  error,
  valid,
  id,
  placeholder,
  type,
  label,
  ...other
}: InputProps) {
  return (
    <S.Container className={cs({ error, valid })}>
      <S.Input
        as={as}
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        aria-label={label}
        {...other}
      />
      <S.Label htmlFor={id}>{label}</S.Label>
      {valid && (
        <S.IconWrapper>
          <Check />
        </S.IconWrapper>
      )}
    </S.Container>
  );
}

export default React.memo(Input);
