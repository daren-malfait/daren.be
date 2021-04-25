import React, { FunctionComponent, memo } from 'react';

import * as S from './gridBackground.styles';

const GridBackgroundProps: FunctionComponent = () => {
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
};

export default memo(GridBackgroundProps);
