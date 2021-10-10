import * as React from 'react';

import * as S from './check.styles';

function Check() {
  return (
    <S.Container xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
      <S.Circle cx="26" cy="26" r="25" />
      <S.Check d="M14.1 27.2l7.1 7.2 16.7-16.8" />
    </S.Container>
  );
}

export default React.memo(Check);
