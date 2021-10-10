import * as React from 'react';

import FadeInItem from './FadeInItem';

interface FadeInProps {
  children: React.ReactNode;
}

function FadeIn({ children }: FadeInProps) {
  return (
    <div>
      {React.Children.map(children, (child, i) => {
        return <FadeInItem delay={i * 100}>{child}</FadeInItem>;
      })}
    </div>
  );
}

export default FadeIn;
