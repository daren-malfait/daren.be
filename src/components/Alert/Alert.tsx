import { lighten } from 'polished';
import * as React from 'react';

import * as S from './alert.styles';

import { AlertType } from './alertTypes';

import Check from '~components/Check/Check';
import { IconWrapper } from '~components/Input/input.styles';

import colors from '~styles/colors';

interface AlertProps {
  type?: AlertType;
  children?: React.ReactNode;
}

function Alert({ type, children }: AlertProps) {
  let color = colors.textPrimary700;
  let background = colors.bgPrimary700;

  switch (type) {
    case AlertType.Danger: {
      color = colors.error;
      background = lighten(0.5, color);
      break;
    }
    case AlertType.Success: {
      color = colors.success;
      background = lighten(0.4, color);
      break;
    }
  }

  return (
    <S.Alert background={background} foreground={color}>
      {children}
      {type === AlertType.Success && (
        <IconWrapper>
          <Check />
        </IconWrapper>
      )}
    </S.Alert>
  );
}

export default Alert;
