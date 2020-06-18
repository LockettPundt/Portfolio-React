import React, { useContext } from 'react';
import { GreetingBox, DownArrow, Welcome } from './greetingStyled';
import StateContext from '../../context';


const Greeting = () => {
  const [value] = useContext(StateContext);
  const scrollClick = () => {
    const anchor = document.getElementById('anchor1');
    anchor.scrollIntoView(true);
  };

  return (
    <GreetingBox>
      <Welcome><em>Hi there. Come on in.</em></Welcome>
      <DownArrow className="far fa-arrow-alt-circle-down downArrow" darkMode={value.darkMode} onClick={scrollClick} />
    </GreetingBox>

  );
};


export default Greeting;
