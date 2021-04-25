import React, { FunctionComponent, memo } from 'react';
import Obfuscate from 'react-obfuscate';

import * as S from './smallContact.styles';

interface SmallContactProps {
  address?: string;
  email?: string;
  phone?: string;
}

const SmallContact: FunctionComponent<SmallContactProps> = ({
  email,
  address,
  phone,
}) => (
  <S.Container>
    {address && (
      <S.Address>
        <strong>address.</strong> {address}
      </S.Address>
    )}
    {email && (
      <S.Email>
        <strong>email.</strong> <Obfuscate email={email} />
      </S.Email>
    )}
    {phone && (
      <S.Phone>
        <strong>tel.</strong> <Obfuscate tel={phone} />
      </S.Phone>
    )}
  </S.Container>
);

export default memo(SmallContact);
