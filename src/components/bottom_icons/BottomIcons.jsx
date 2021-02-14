/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useContext } from 'react';
import IconsBox from './iconsBox';
import StateContext from '../../context';


const Bottomicons = () => {
  const [value] = useContext(StateContext);
  
  const scrollClick = (e) => {
    const anchor = document.getElementById('anchor1');
    e.preventDefault();
    anchor.scrollIntoView({ behavior: 'smooth' });
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
        href="../LOCKETT%20PUNDT%20IV%202020%20RESUME.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="far fa-file" />
      </a>
      <a
        href="#"
        rel="noopener noreferrer"
        onClick={(e) => scrollClick(e)} 
      >
        <i className="far fa-arrow-alt-circle-up" />
      </a>
    </IconsBox>
  );
};

export default Bottomicons;
