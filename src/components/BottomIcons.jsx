/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useContext } from 'react';
import styled from 'styled-components';
import StateContext from '../context';


const IconsBox = styled.section`
  display: flex;
  
  font-size: 3.8rem;
  width: 90%;
  margin:  9rem auto;
  justify-content: space-between;
  
  a {
    margin-right: 1rem;
    transition: 0.4s ease-in-out;
    text-decoration: none;
    color: ${(props) => (props.darkMode ? '#ffc89f' : 'rgb(38, 38, 39)')};
  }
  
  i:hover {
  color: var(--hoverPink);
  transform: scale(1.3);
  transition: 0.3s ease-in-out;
  }
  
  @media screen and (max-width: 800px) {
    font-size: 2.7rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.8rem;
  }

`;

const Bottomicons = () => {
  const [value, dispatch] = useContext(StateContext);
  const scrollClick = (e) => {
    const anchor = document.getElementById('anchor1');
    e.preventDefault();
    anchor.scrollIntoView(true);
  };

  return (
    <IconsBox darkMode={value.darkMode}>
      <a
        href="https://github.com/LockettPundt"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github" />
      </a>
      <a

        href="mailto:lockettpundt@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-at" />
      </a>
      <a
        href="https://www.linkedin.com/in/lockettpundt"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin" />
      </a>
      <a
        href="../LOCKETT%20PUNDT%20IV%20Resume%202020.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="far fa-file" />
      </a>
      <a
        href="#"
        rel="noopener noreferrer"
      >
        <i className="far fa-arrow-alt-circle-up" onClick={(e) => scrollClick(e)} />
      </a>
    </IconsBox>
  );
};

export default Bottomicons;
