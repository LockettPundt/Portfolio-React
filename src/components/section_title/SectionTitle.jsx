/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import StyledSectionTitle from './sectionTitleStyled';
import StateContext from '../../context';



const SectionTitle = ({ title }) => {
  const [value, dispatch] = useContext(StateContext);

  return (
    <StyledSectionTitle darkMode={value.darkMode}>
      <p className="title">{title}</p>
      <div className="greenRow" />
    </StyledSectionTitle>
  );
};

export default SectionTitle;
