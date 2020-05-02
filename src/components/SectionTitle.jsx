/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import styled from 'styled-components';
import StateContext from '../context';

const green = 'rgb(125, 187, 145)';
const StyledSectionTitle = styled.div`

  .title {
    font-size: 2rem;
    font-weight: 300;
    
    @media screen and (max-width: 600px) {
      font-size: 1.9rem;
    }
  }
  
  .greenRow {
    width: 100%;
    height: 1px;
    transition: 0.4s ease-in-out;
    background-color: ${(props) => (props.darkMode ? 'black' : green)};
  }

`;

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
