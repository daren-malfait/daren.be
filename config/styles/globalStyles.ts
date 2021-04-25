import tw, { css } from 'twin.macro';

export const globalStyles = css`
  * {
    ${tw`
      box-border
      m-0
      p-0
    `}
  }

  html {
    ${tw`
    bg-primary-900
    text-primary-900
    font-primary
    antialiased
    m-0
    min-h-screen
    max-w-full
    overflow-x-hidden
    `}
  }

  body {
    ${tw`
      m-0
      min-h-screen
      max-w-full
    `}
  }

  a {
    ${tw`
    text-accent
    no-underline
    cursor-pointer
    hover:underline
    focus:bg-primary-800
    focus:outline-none
    `}
  }

  p,
  li {
    ${tw`
    font-secundary
    text-primary-900
    my-8
    font-normal
    text-lg
    md:text-base
    md:text-2xl
    max-w-7xl
    `}

    &:first-of-type {
      ${tw`
      mt-0
      `}
    }
  }

  ul,
  ol {
    ${tw`
    py-8
    px-8
    `}
  }

  ul ul,
  ol ul,
  ul ol,
  ol ol {
    ${tw`
    my-0
    `}
  }
  blockquote {
    ${tw`
    my-8
    `}
  }
  /* Headings */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${tw`
    font-primary
    my-0
    max-w-6xl
    `}

    button, a, span {
      font-size: inherit;
      font-weight: inherit;
    }

    &:not(:first-of-type) {
      ${tw`
      mt-6
      `}
    }
  }

  h1 {
    ${tw`
    mt-0
    font-black
    text-3xl
    sm:text-4xl
    md:text-5xl
    2xl:text-7xl
    mb-small
    `}

    &:not(:first-of-type) {
      ${tw`
      mt-12
      `}
    }
  }

  h2 {
    ${tw`
    text-2xl
    sm:text-3xl
    md:text-4xl
    font-black
    mt-0
    mb-8
    wd:text-5xl
    `}

    &:not(:first-of-type) {
      ${tw`
     mt-14
     `}
    }
  }

  h3 {
    ${tw`
      font-black
      text-xl
      sm:text-2xl
      md:text-3xl
      mb-4
      `}
  }

  h4 {
    font-size: 0.7rem;
  }

  h5 {
    font-size: 0.5rem;
  }

  h6 {
    font-size: 0.4rem;
  }

  table {
    ${tw`
    mt-8
    `}
    border-spacing: 0px;
    border-collapse: collapse;
  }
  table td,
  table th {
    ${tw`
    p-0
    `}
  }

  code {
    ${tw`
    align-bottom
    `}
  }

  img {
    ${tw`
    w-full
    `}
  }

  figcaption {
    ${tw`
    text-center
    mt-3
    opacity-70
    `}
  }

  blockquote {
    box-shadow: rgb(41, 41, 41) 3px 0px 0px 0px inset;
    ${tw`
    text-xl
    pl-5
    ml-5
    `}

    em {
      background-color: rgb(233, 253, 240);
    }
  }
`;
