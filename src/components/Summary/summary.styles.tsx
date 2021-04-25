import tw from 'twin.macro';

export const Container = tw.div``;

export const List = tw.ul`
  border-t-2
  p-0
  pt-default
  m-0
  mt-default
  grid
  grid-cols-1
  sm:grid-cols-2
  xl:grid-cols-3
`;

export const ListItem = tw.li`
  m-0
  p-0
  mb-2
  text-primary-700
`;
