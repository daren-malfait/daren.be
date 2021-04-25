import React, { FunctionComponent, memo } from 'react';
import cs from 'classnames';

import * as S from './input.styles';
import Check from '~components/Check/Check';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  as?: any;
  id: string;
  error?: string | boolean;
  valid?: boolean;
  label: string;
  type?: 'text' | 'number' | 'password' | 'email';
}

const Input: FunctionComponent<InputProps> = ({
  as,
  error,
  valid,
  id,
  placeholder,
  type,
  label,
  ...other
}) => {
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
};

export default memo(Input);
