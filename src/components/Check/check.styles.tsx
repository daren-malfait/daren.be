import tw, { styled } from 'twin.macro';

import colors from '~styles/colors';

export const Container = styled.svg`
  stroke-miterlimit: 10;
  margin: 10% auto;
  box-shadow: inset 0px 0px 0px ${colors.success};

  ${tw`
  w-full
  h-full
  rounded-full
  block
  border-transparent
  border-2
  animate-scale
  text-success
  `}
`;

export const Circle = styled.circle`
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2px;
  stroke-miterlimit: 10;
  fill: none;

  ${tw`
  stroke-current
  animate-stroke
  `}

  animation-delay: 0.3s;
`;

export const Check = styled.path`
  transform-origin: 50% 50%;
  stroke-width: 2px;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  fill: none;

  ${tw`
  stroke-current
  animate-stroke
  `}

  animation-delay: 0.6s;
`;
