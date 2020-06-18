/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PictureSection from './pictureStyled';
import potrait from '../../IMG/IMG_3635small.jpeg';


const Picture = () => (
  <PictureSection>
    <a name="anchor1" id="anchor1" className="anchor1" />
    <div className="textBox">
      <p className="name">I'm Lockett Pundt.</p>
      <p>I'm a Web Developer</p>
      <p>located in Atlanta.</p>
    </div>
    <div className="imgWrapper">
      <img src={potrait} alt="profile potrait" />
    </div>
  </PictureSection>
);


export default Picture;
