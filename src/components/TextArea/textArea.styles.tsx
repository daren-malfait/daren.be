import tw, { styled } from 'twin.macro';

import * as S from '~components/Input/input.styles';

export const TextArea = S.Input.withComponent('textarea');

export const Container = styled(S.Container)`
  &.error {
    ${TextArea} {
      ${tw`
      border-error
      `}
    }
  }
`;
