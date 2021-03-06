/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import StateContext from '../../context';
import { NameBox, SideBarDiv, SocialIcons } from './SideBarStyling';

const SideBar = () => {
  const [value, dispatch] = useContext(StateContext);
  const darkModeToggle = () => {
    dispatch({
      type: 'ACTION_DARKMODE_TOGGLE',
      darkMode: !value.darkMode,
    });
    localStorage.setItem('darkMode', !value.darkMode);
  };


  return (
    <SideBarDiv darkMode={value.darkMode}>
      <NameBox>
        <h1>
          lockettPundt
          {' '}
          {'{'}
        </h1>
        <h1 className="indent">
          Developer
        </h1>
        <h1>
          {'}'}
        </h1>
      </NameBox>
      <SocialIcons darkMode={value.darkMode}>
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
        {value.darkMode ? (<i className="fas fa-sun" onClick={darkModeToggle} />

        ) : <i className="fas fa-moon" onClick={darkModeToggle} />}

      </SocialIcons>

    </SideBarDiv>
  );
};


export default SideBar;
