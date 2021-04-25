import React, { FunctionComponent, memo } from 'react';

import * as S from './summary.styles';

interface SummaryProps {
  items: string[];
}

const Summary: FunctionComponent<SummaryProps> = ({ items }) => {
  return (
    <S.Container>
      <S.List>
        {items.map(item => (
          <S.ListItem key={item}>{item}</S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
};

export default memo(Summary);
