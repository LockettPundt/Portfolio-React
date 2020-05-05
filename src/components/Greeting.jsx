import React, { useContext } from 'react';
import styled from 'styled-components';
import StateContext from '../context';


const GreetingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 35vh auto 40rem auto;
  
  @media screen and (max-width: 769px) {
    margin: 39vh auto 40rem auto;
  }
  
`;

const DownArrow = styled.i`
  transition: 0.4s ease-in-out;
  color: ${(props) => (props.darkMode ? '#ffc89f' : 'rgb(38, 38, 39)')};
  font-size: 3rem;
  
  &:hover {
  color: var(--hoverPink);
  transform: scale(1.3);
  transition: 0.3s ease-in-out;
  }
  @media screen and (max-width: 600px) {
    font-size: 2.5rem;
  }
  
`;

export const Welcome = styled.h1`
  font-size: 2.9rem;
  text-align: center;
  
  @media screen and (max-width: 991px) {
    font-size: 2.4rem;
    
  }
  @media screen and (max-width: 769px) {
    font-size: 2rem;
    
  }
  @media screen and (max-width: 600px) {
    font-size: 1.9rem;
  }
  
`;

const Greeting = () => {
  const [value, dispatch] = useContext(StateContext);
  const scrollClick = () => {
    const anchor = document.getElementById('anchor1');
    anchor.scrollIntoView(true);
  };

  return (
    <GreetingBox>
      <em><Welcome>Hi there. Come on in.</Welcome></em>
      <DownArrow className="far fa-arrow-alt-circle-down downArrow" darkMode={value.darkMode} onClick={scrollClick} />
    </GreetingBox>

  );
};


export default Greeting;
