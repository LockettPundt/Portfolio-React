import React from 'react';
import { GreetingBox } from '../Style/ContentContainers';
import { DownArrow, Welcome } from '../Style/GreetingStyles';

const Greeting = () => (
  <GreetingBox>
    <em><Welcome>Hi there. Come on in.</Welcome></em>
    <a
      href="#anchor1"
      target=""
      id="scrollArrow"
    >
      <DownArrow className="far fa-arrow-alt-circle-down downArrow" />
    </a>
  </GreetingBox>
);


export default Greeting;
