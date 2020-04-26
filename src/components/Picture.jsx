import React from 'react';
import styled from 'styled-components';
import potrait from '../IMG/IMG_3635small.jpeg';

const Main = styled.div`
  display: flex;
  width: 100%;
  font-size: inherit;
  
  .textBox {
    margin: 0;
    display: inherit;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    
  }
  
  .textBox p {
    font-size: 2rem;
    font-weight: 300;
    margin: 0;
    
    @media screen and (max-width: 600px) {
      font-size: 2.6rem;
    }
    
    @media screen and (max-width: 400px) {
    font-size: 3.3rem;
    }
    
  }
  
  .imgWrapper {
    width: 50%;
  }
  
  .imgWrapper img {
    border-radius: 50%;
    width: 100%;
  }
`;


const Picture = () => (
  <Main>
    <div className="textBox">
      <h1>I'm Lockett Pundt.</h1>
      <p>I'm a Web Developer</p>
      <p>located in Atlanta.</p>
    </div>
    <div className="imgWrapper">
      <img src={potrait} alt="profile potrait" />
    </div>
  </Main>
);


export default Picture;
