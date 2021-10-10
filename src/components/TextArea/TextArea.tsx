import autosize from 'autosize';
import cs from 'classnames';
import * as React from 'react';

import * as S from './textArea.styles';

import * as InputStyles from '../Input/input.styles';

import Check from '~components/Check/Check';

interface TextAreaProps
  extends Omit<React.HTMLProps<HTMLTextAreaElement>, 'as'> {
  id: string;
  error?: string | boolean;
  valid?: boolean;
  label: string;
}

function TextArea({
  error,
  valid,
  id,
  placeholder,
  label,
  ...other
}: TextAreaProps) {
  const ref = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
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
}

export default React.memo(TextArea);
