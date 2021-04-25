import { RadioGroup } from '@headlessui/react';
import tw, { styled } from 'twin.macro';

export const Container = tw.div`
  space-y-2
`;

export const Wrapper = styled.div`
  ${tw`
  flex
  items-center
  justify-start
  `}

  &.checked {
    ${tw`
    text-accent
    `}
  }
`;

export const Icon = styled.div`
  ${tw`
  text-current
  flex
  items-center
  justify-center
  w-6
  h-6
  rounded-full
  border-2
  border-current
  relative
  mr-default
  hover:border-4
  focus:outline-none
  focus:ring
  focus:ring-offset-2
  focus:ring-accent
  focus:ring-opacity-60
  `}

  &.checked {
    ${tw`
    bg-accent
    text-primary-100
    border-accent
    hover:border-2
    `}
  }
`;

export const Option = styled(RadioGroup.Option)`
  ${tw`
  relative
  rounded-lg
  py-4
  cursor-pointer
  flex
  items-center
  justify-start
  outline-none
  `}

  &:focus {
    ${Icon} {
      ${tw`
      outline-none
      ring
      ring-offset-2
      ring-accent
      ring-opacity-100
      `}
    }
  }
`;
