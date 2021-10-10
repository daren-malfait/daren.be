import tw, { styled } from 'twin.macro';

export const Input = styled.input`
  ${tw`relative w-full h-16 p-3 border rounded-md border-primary-700 focus:outline-none focus:border-primary-200 focus:shadow-sm`}

  &::placeholder {
    color: transparent;

    ${tw`transition-all `}
  }

  &:focus,
  &:not(:placeholder-shown) {
    ${tw`pt-8 `}
  }

  &:focus::placeholder {
    ${tw` text-primary-600`}
  }

  &:focus ~ label,
  :not(:placeholder-shown) ~ label {
    ${tw`h-auto transform scale-75 translate-x-1 -translate-y-3 opacity-75 `}
  }
`;

export const Container = styled.div`
  ${tw`relative mb-5 `}

  &.error {
    ${tw` text-error animate-shake`}

    ${Input} {
      ${tw` border-error`}
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
