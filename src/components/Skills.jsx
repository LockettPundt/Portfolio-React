import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import SectionContainer from './SectionContainer';

const SkillIcons = styled.div`
  display: flex;
  font-size: 3.8rem;
  width: 90%;
  margin:  3rem auto;
  justify-content: space-between;
  
  @media screen and (max-width: 800px) {
    font-size: 2.7rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

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
