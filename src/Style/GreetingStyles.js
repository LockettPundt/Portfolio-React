import styled from 'styled-components';

export const DownArrow = styled.i`
  color: var(--black);
  font-size: 3rem;
  
  &:hover {
  color: var(--hoverPink);
  transform: scale(1.3);
  transition: 0.3s ease-in-out;
  }

  @media screen and (max-width: 600px) {
    font-size: 5.3rem;
  }
  
`;

export const Welcome = styled.h1`
  font-size: 2.9rem;
  
  @media screen and (max-width: 600px) {
    font-size: 4.9rem;
    
  }
`;
