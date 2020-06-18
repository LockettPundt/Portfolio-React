import React from 'react';
import StyledSection from './sectionContainerStyled';

const SectionContainer = ({ children }) => (
  <StyledSection>
    {children}
  </StyledSection>
);

export default SectionContainer;
