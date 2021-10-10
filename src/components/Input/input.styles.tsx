import tw, { styled, css } from 'twin.macro';

export const Input = styled.input`
  ${tw`
  relative
  border
  border-primary-700
  text-primary-700
  rounded-md
  w-full
  p-3
  h-16
  focus:(
    outline-none
    border-primary-200
    shadow-sm
    )
  xl:text-lg
  `}

  &::placeholder {
    ${tw`
    color[transparent]
    transition-all
    `}
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
    ${tw`h-auto transform[scale(0.75) translate(0.25rem, -0.75rem)]`}
  }
`;

// styled because component is used in other styled component
export const Label = styled.label(() => [
  tw`absolute top-0 left-0 h-full px-3 py-5 text-base transition-all duration-100 ease-in-out origin-left transform pointer-events-none text-primary-700`,
]);

export const Container = styled.div(() => [
  css`
    &.error {
      ${tw` text-error animate-shake`}

      ${Input} {
        ${tw` border-error`}
      }

      ${Label} {
        ${tw` text-error`}
      }
    }
  `,
  tw`relative mb-5 `,
]);

export const IconWrapper = tw.div`
  absolute
  w-8
  right-2
  top-1/2
  transform
  -translate-y-1/2
`;
