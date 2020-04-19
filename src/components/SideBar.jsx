import React from 'react';
import { NameBox, SideBarDiv, SocialIcons } from '../Style/StyledComponents';

const SideBar = () => (
  <SideBarDiv>
    <NameBox>
      <h1>
        lockettPundt
        {' '}
        {'{'}
      </h1>
      <h1>
        Developer
      </h1>
      <h1>
        {'}'}
      </h1>
    </NameBox>
    <SocialIcons>
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
        href="LOCKETT%20PUNDT%20IV%20Resume%202020.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="far fa-file" />
      </a>
    </SocialIcons>

  </SideBarDiv>
);


export default SideBar;
