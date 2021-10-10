import cs from 'classnames';
import * as React from 'react';

import * as S from './disclaimer.styles';

import { Heart } from './Heart';

interface DisclaimerProps {
  companyName: string;
}

function Disclaimer({ companyName }: DisclaimerProps) {
  const [hovered, setHovered] = React.useState(false);

  function toggleHover() {
    setHovered(hoverState => !hoverState);
  }

  return (
    <S.Container>
      <S.Part>
        <span role="img" aria-label="copyright">
          ©️
        </span>{' '}
        {companyName}
      </S.Part>
      <S.Part>
        Created with{` `}
        <Heart
          className={cs({
            active: hovered,
          })}
        />
        {` `}
        by{` `}
        <S.Link
          href="https://www.daren.be"
          rel="noreferrer noopener"
          target="_blank"
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          Daren
        </S.Link>
      </S.Part>
    </S.Container>
  );
}

export default React.memo(Disclaimer);
