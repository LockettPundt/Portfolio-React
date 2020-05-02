import React, { useContext } from 'react';
import styled from 'styled-components';
import { GreetingBox } from '../Style/ContentContainers';

import StateContext from '../context';

const DownArrow = styled.i`
  color: ${(props) => (props.darkMode ? '#ffc89f' : 'rgb(38, 38, 39)')};
  font-size: 3rem;
  &:hover {
  color: var(--hoverPink);
  transform: scale(1.3);
  transition: 0.3s ease-in-out;
  }
`;

export const Welcome = styled.h1`
  font-size: 2.9rem;
  text-align: center;
  
  @media screen and (max-width: 991px) {
    font-size: 2.4rem;
    
  }
  @media screen and (max-width: 767px) {
    font-size: 2rem;
    
  }
  @media screen and (max-width: 600px) {
    font-size: 3rem;
    
  }
`;

const Greeting = () => {
  const [value, dispatch] = useContext(StateContext);
  const scrollClick = (e) => {
    const anchor = document.getElementById('anchor1');
    e.preventDefault();
    anchor.scrollIntoView(true);
  };

  return (
    <GreetingBox>
      <em><Welcome>Hi there. Come on in.</Welcome></em>
      <DownArrow className="far fa-arrow-alt-circle-down downArrow" darkMode={value.darkMode} onClick={(e) => scrollClick(e)} />
    </GreetingBox>

  );
};


export default Greeting;
