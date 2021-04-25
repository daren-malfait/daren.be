import tw, { styled, css } from 'twin.macro';

import colors from '~styles/colors';

export const SmallButtonStyles = css`
  ${tw`
  px-4
  font-semibold
  rounded-lg
  py-2
  text-sm
  `}
`;

export interface ButtonStylesProps {
  background?: string;
  backgroundHover?: string;
  color?: string;
  colorHover?: string;
  border?: string;
  borderHover?: string;
}

export const Button = styled.button<ButtonStylesProps>`
  --background: ${({ background }) => background || colors.accent};
  --backgroundHover: ${({ backgroundHover }) =>
    backgroundHover || colors.accent};

  --color: ${({ color }) => color || colors.textPrimary100};
  --colorHover: ${({ colorHover }) => colorHover || colors.textPrimary100};

  --border: ${({ border }) => border || colors.accent};
  --borderHover: ${({ borderHover }) => borderHover || colors.accent};

  ${tw`
    font-primary
    cursor-pointer
    content-center
    inline-block
    no-underline
    px-5
    py-3
    relative
    rounded-lg
    text-center
    text-xl
    transition
    transform
    font-bold
    hover:no-underline
    focus:outline-none
    focus:ring
    focus:ring-offset-2
    focus:ring-accent
    focus:ring-opacity-50
  `};

  background: var(--background) !important;
  color: var(--color) !important;
  border: 1px solid var(--border) !important;

  &:hover {
    background: var(--backgroundHover) !important;
    color: var(--colorHover) !important;
    border: 1px solid var(--borderHover) !important;
  }

  &.full {
    ${tw`
    block
    w-full
    `};
  }

  &:disabled {
    --background: ${colors.bgPrimary800};
    --backgroundHover: ${colors.bgPrimary800};
    --border: ${colors.bgPrimary800};
    --borderHover: ${colors.bgPrimary800};

    &:hover {
      cursor: not-allowed;
    }
  }

  &.small {
    ${SmallButtonStyles}
  }
`;
