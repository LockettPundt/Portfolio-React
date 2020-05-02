import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  font-size: inherit;
  font-weight: 300;
  margin: var(--sectionMargin);
`;


const SectionContainer = ({ children }) => (
  <StyledSection>
    {children}
  </StyledSection>
);

export default SectionContainer;
