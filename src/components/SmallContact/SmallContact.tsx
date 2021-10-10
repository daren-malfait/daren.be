import * as React from 'react';
import Obfuscate from 'react-obfuscate';

import * as S from './smallContact.styles';

interface SmallContactProps {
  address?: string;
  email?: string;
  phone?: string;
}

function SmallContact({ email, address, phone }: SmallContactProps) {
  return (
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
}

export default React.memo(SmallContact);
