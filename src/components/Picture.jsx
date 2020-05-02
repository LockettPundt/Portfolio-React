/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import potrait from '../IMG/IMG_3635small.jpeg';

const MainAbout = styled.div`
  display: flex;
  width: 100%;
  font-size: inherit;
  justify-content: center;
  align-content: center;
  margin: var(--sectionMargin);
  
  .textBox {
    margin: 0;
    display: inherit;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    
  }
  
  .textBox .name {
    font-weight: 400;
    margin: 1rem 0rem;
    @media screen and (max-width: 600px) {
      font-size: 1.3rem;
    }
  }
  
  .textBox p {
    font-size: 2rem;
    font-weight: 300;
    margin: 0;
    
    @media screen and (max-width: 600px) {
      font-size: 1.2rem;
    }
    
    @media screen and (max-width: 400px) {
    font-size: 1.1rem;
    }
    @media screen and (max-width: 350px) {
    font-size: 1rem;
    }
    
  }
  
  .imgWrapper {
    width: 50%;
  }
  
  .imgWrapper img {
    border-radius: 50%;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.3);
  }
`;

const Picture = () => (
  <MainAbout>
    <a name="anchor1" id="anchor1" className="anchor1" />
    <div className="textBox">
      <p className="name">I'm Lockett Pundt.</p>
      <p>I'm a Web Developer</p>
      <p>located in Atlanta.</p>
    </div>
    <div className="imgWrapper">
      <img src={potrait} alt="profile potrait" />
    </div>
  </MainAbout>
);


export default Picture;
