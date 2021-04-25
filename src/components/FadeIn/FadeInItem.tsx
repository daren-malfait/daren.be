import React, { FunctionComponent } from 'react';
import tw, { styled } from 'twin.macro';

type AnitemateInViewItemProps = {
  delay: number;
};

const FadeInItem: FunctionComponent<AnitemateInViewItemProps> = ({
  delay,
  children,
}) => {
  return <Container delay={delay}>{children}</Container>;
};

type ContainerProps = {
  delay: number;
};

const Container = styled.div<ContainerProps>`
  --delay: ${({ delay }) => `${delay}ms`};

  ${tw`
  opacity-0
  animate-fade-in-up
  `}

  animation-delay: var(--delay);
`;

export default FadeInItem;
