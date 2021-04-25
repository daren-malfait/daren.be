import tw, { styled } from 'twin.macro';

export const Input = styled.input`
  ${tw`
  relative
  border
  border-primary-700
  focus:outline-none
  rounded-md
  focus:border-primary-200
  focus:shadow-sm
  w-full
  p-3
  h-16
  `}

  &::placeholder {
    color: transparent;

    ${tw`
    transition-all
    `}
  }

  &:focus,
  &:not(:placeholder-shown) {
    ${tw`
    pt-8
    `}
  }

  &:focus::placeholder {
    ${tw`
    text-primary-600
    `}
  }

  &:focus ~ label,
  :not(:placeholder-shown) ~ label {
    ${tw`
    opacity-75
    scale-75
    -translate-y-3
    translate-x-1
    h-auto
    `}
  }
`;

export const Container = styled.div`
  ${tw`
  mb-5
  relative
  `}

  &.error {
    ${tw`
    text-error
    animate-shake
    `}

    ${Input} {
      ${tw`
      border-error
      `}
    }
  }
`;

export const Label = tw.label`
  absolute
  top-0
  left-0
  px-3
  py-5
  h-full
  pointer-events-none
  transform
  origin-left
  transition-all
  duration-100
  ease-in-out
`;

export const IconWrapper = tw.div`
  absolute
  w-8
  right-2
  top-1/2
  transform
  -translate-y-1/2
`;
