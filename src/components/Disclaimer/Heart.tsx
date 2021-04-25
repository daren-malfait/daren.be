import tw, { styled } from 'twin.macro';

interface HeartProps {
  base?: string;
  className?: string;
}

export const Heart = styled.div<HeartProps>`
  --base: ${({ base }) => base || `12px`};
  --duration: 0.6s;
  --active: #ea4673;
  --inactive: #d1d6ee;

  width: var(--base);
  height: calc(var(--base) + var(--base) / 2);
  border-radius: calc(var(--base) / 2) calc(var(--base) / 2) 0 0;
  transform-origin: 50% 66.66%;
  transform-style: preserve-3d;
  transform: rotate(var(--rotate, -45deg));
  background: var(--heart-background, var(--inactive));

  ${tw`
  mx-xsmall
  inline-block
  relative
  transition-all
  duration-300
  `}

  &:before,
  &:after {
    content: '';
    width: calc(var(--base) / 2);
    height: var(--base);
    border-radius: var(
      --pseudo-border-radius,
      calc(var(--base) / 2) 0 0 calc(var(--base) / 2)
    );
    left: var(--pseudo-left, -50%);
    transform-origin: var(--pseudo-origin, 100%) 50%;
    background: var(--heart-background, var(--inactive));
    filter: brightness(var(--pseudo-filter, 50%));
    transform: translateX(1%) rotateY(var(--pseudo-rotate, 90deg)) translateZ(0);
    transition: background var(--duration), transform var(--duration) ease,
      filter var(--duration);

    ${tw`
    position: absolute
    bottom-0
    `}
  }
  &:after {
    --pseudo-border-radius: 0 calc(var(--base) / 2) calc(var(--base) / 2) 0;
    --pseudo-left: 100%;
    --pseudo-origin: 0;
    filter: brightness(var(--pseudo-filter-second, 100%));
    transform: translateX(-1%) rotateY(var(--pseudo-rotate-second, 0deg))
      translateZ(0);
  }

  &.active {
    --rotate: 45deg;
    --pseudo-filter: 100%;
    --pseudo-filter-second: 50%;
    --pseudo-rotate: 0deg;
    --pseudo-rotate-second: 90deg;
    --heart-background: var(--active);
  }
`;
