import * as React from 'react';
import tw, { styled } from 'twin.macro';

type AnitemateInViewItemProps = {
  delay: number;
  children?: React.ReactNode;
};

function FadeInItem({ delay, children }: AnitemateInViewItemProps) {
  return <Container delay={delay}>{children}</Container>;
}

type ContainerProps = {
  delay: number;
};

const Container = styled.div<ContainerProps>`
  --delay: ${({ delay }) => `${delay}ms`};

  ${tw`opacity-0  animate-fade-in-up`}

  animation-delay: var(--delay);
`;

export default FadeInItem;
