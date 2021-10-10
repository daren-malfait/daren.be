import * as React from 'react';

import * as S from './gridBackground.styles';

function GridBackgroundProps() {
  return (
    <S.Container>
      <S.GridContainer>
        <S.Line />
        <S.Line />
        <S.Line />
        <S.Line />
        <S.Line />
        <S.Line />
        <S.Line />
      </S.GridContainer>
    </S.Container>
  );
}

export default React.memo(GridBackgroundProps);
