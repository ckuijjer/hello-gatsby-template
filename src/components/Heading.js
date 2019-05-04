import React from 'react';
import Colored from './Colored';

const Heading = ({ component, children, ...props }) =>
  React.createElement(component, props, <Colored>{children}</Colored>);

export default Heading;
