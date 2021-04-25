import tw, { styled } from 'twin.macro';

import breakpoints from '~styles/breakpoints';

interface ContainerProps {
  offset?: string;
  width?: string;
  height?: string;
  centered?: boolean;
  relative?: boolean;
}

export const Container = styled.div<ContainerProps>`
  --offset: ${({ offset }) => offset || 0};
  --height: ${({ height }) => height || 0};
  --centered: ${({ centered }) => (centered ? `center` : `left`)};
  --relative: ${({ relative }) => (relative ? `relative` : `inherit`)};

  margin-top: var(--offset);
  max-width: ${breakpoints.xxl};
  min-height: var(--height);
  position: var(--relative);
  text-align: var(--centered);

  ${tw`
  mx-auto
  px-default
  pt-0
  w-full
  z-0
  `}

  * {
    color: ${({ color }) => color};
  }
`;

interface SectionProps {
  background?: string;
  overflow?: string;
}

export const Section = styled.section<SectionProps>`
  --background: ${({ background }) => background || `transparent`};
  --overflow: ${({ overflow }) => overflow || `visible`};

  background: var(--background);
  overflow: var(--overflow);

  ${tw`
  box-border
  items-center
  mx-auto
  px-0
  py-large
  z-0
  md:py-large
  md:px-0
  relative
  flex
  `}

  > img {
    ${tw`
    mb-large
    `}
    margin-bottom: 30px;
  }
`;
