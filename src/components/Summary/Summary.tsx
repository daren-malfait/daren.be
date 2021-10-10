import * as React from 'react';

import * as S from './summary.styles';

interface SummaryProps {
  items: string[];
}

function Summary({ items }: SummaryProps) {
  return (
    <S.Container>
      <S.List>
        {items.map(item => (
          <S.ListItem key={item}>{item}</S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
}

export default React.memo(Summary);
