import React from 'react';
import SkillIcons from './skillsStyled';
import SectionTitle from '../section_title/SectionTitle';
import SectionContainer from '../section_container/SectionContainer';



const Skills = () => (
  <SectionContainer>
    <SectionTitle title="Skills" />
    <SkillIcons>
      <i className="fab fa-js" />
      <i className="devicon-html5-plain-wordmark" />
      <i className="devicon-css3-plain-wordmark" />
      <i className="fab fa-node" />
      <i className="devicon-python-plain-wordmark" />
      <i className="devicon-postgresql-plain-wordmark" />
      <i className="devicon-react-original-wordmark" />
    </SkillIcons>
  </SectionContainer>
);


export default Skills;
