import tw, { styled } from 'twin.macro';

type AlertProps = {
  background: string;
  foreground: string;
};

export const Alert = styled.p<AlertProps>`
  --background: ${({ background }) => background};
  --foreground: ${({ foreground }) => foreground};

  color: var(--foreground);
  background: var(--background);

  ${tw`
  rounded-lg
  w-full
  p-3
  font-bold
  text-base
  relative
  `}
`;
