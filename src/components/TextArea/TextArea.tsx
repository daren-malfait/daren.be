import React, {
  FunctionComponent,
  HTMLProps,
  memo,
  useEffect,
  useRef,
} from 'react';
import cs from 'classnames';
import autosize from 'autosize';

import * as S from './textArea.styles';
import * as InputStyles from '../Input/input.styles';

import Check from '~components/Check/Check';

interface TextAreaProps extends Omit<HTMLProps<HTMLTextAreaElement>, 'as'> {
  id: string;
  error?: string | boolean;
  valid?: boolean;
  label: string;
}

const TextArea: FunctionComponent<TextAreaProps> = ({
  error,
  valid,
  id,
  placeholder,
  label,
  ...other
}) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    autosize(ref.current);
  }, [ref]);

  return (
    <S.Container className={cs({ error, valid })}>
      <S.TextArea
        id={id}
        placeholder={placeholder}
        aria-label={label}
        {...other}
        ref={ref}
      />
      <InputStyles.Label htmlFor={id}>{label}</InputStyles.Label>
      {valid && (
        <InputStyles.IconWrapper>
          <Check />
        </InputStyles.IconWrapper>
      )}
    </S.Container>
  );
};

export default memo(TextArea);
