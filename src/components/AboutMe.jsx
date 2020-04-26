import React from 'react';
import styled from 'styled-components';


const AboutDiv = styled.div`
  font-size: inherit;
  margin: var(--sectionMargin);
  
  .title {
    font-size: 2rem;
    font-weight: 300;
    width: 20%;
    
    @media screen and (max-width: 600px) {
      font-size: 3rem;
      width: 30%;
    }
  }
  
  div {
    display: flex;
    justify-content: center;
    align-self: center;
  }
  hr {
    width: 80%;
    align-self: center;
    margin: auto;
    
    
    @media screen and (max-width: 600px) {
      width: 70%;
    }
  }
`;

const AboutMe = () => (
  <AboutDiv>
    <div>
      <p className="title">About Me</p>
      <hr noshade />
    </div>

    <p>
      I'm an enthusiastic Web/Software Developer who has turned a curiosity
      into a reality. I enrolled at DigitalCrafts in January of 2020 to
      study Full Stack Web Development and take a budding passion to the next level.
    </p>
    <p>
      I'm a musician at heart who has been extremely fortunate to travel the world
      playing music for most of my adult life. I've had an incredible journey and
      made invaluable friends, but I felt the need to broaden my horizon to
      include something outside of music. I have fallen in love with programming and
      building things digitally. The parallels between music and Web Development are
      such that it was a seemless transition to jump right in. I'm very excited to begin
      a new chapter and continue learning.
    </p>
  </AboutDiv>
);


export default AboutMe;
