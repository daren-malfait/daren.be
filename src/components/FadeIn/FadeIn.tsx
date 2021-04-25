import React, { FunctionComponent } from 'react';

import FadeInItem from './FadeInItem';

const FadeIn: FunctionComponent = ({ children }) => {
  return (
    <div>
      {React.Children.map(children, (child, i) => {
        return <FadeInItem delay={i * 100}>{child}</FadeInItem>;
      })}
    </div>
  );
};

export default FadeIn;
